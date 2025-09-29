// Search page functionality
let currentSearchQuery = '';
let searchResults = [];
let filteredResults = [];
let currentPage = 1;
let resultsPerPage = 12;
let currentView = 'grid';
let currentSort = 'relevance';

// Initialize search page
document.addEventListener('DOMContentLoaded', function() {
    initializeSearchPage();
});

function initializeSearchPage() {
    // Get search query from URL
    const urlParams = new URLSearchParams(window.location.search);
    currentSearchQuery = urlParams.get('q') || '';
    
    // Set up the page
    setupSearchForm();
    loadSidebarContent();
    
    if (currentSearchQuery) {
        // Populate search inputs
        document.getElementById('searchInput').value = currentSearchQuery;
        document.getElementById('mainSearchInput').value = currentSearchQuery;
        
        // Display current query
        displayCurrentQuery();
        
        // Perform search
        performSearchQuery(currentSearchQuery);
    } else {
        // Show empty state or popular searches
        showEmptySearchState();
    }
    
    // Set up event listeners
    setupEventListeners();
}

function setupSearchForm() {
    const mainSearchInput = document.getElementById('mainSearchInput');
    
    if (mainSearchInput) {
        mainSearchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performMainSearch();
            }
        });
    }
}

function performMainSearch() {
    const query = document.getElementById('mainSearchInput').value.trim();
    if (query) {
        // Update URL without page reload
        const newUrl = `${window.location.pathname}?q=${encodeURIComponent(query)}`;
        window.history.pushState({}, '', newUrl);
        
        currentSearchQuery = query;
        document.getElementById('searchInput').value = query;
        
        displayCurrentQuery();
        performSearchQuery(query);
    }
}

function displayCurrentQuery() {
    const queryDisplay = document.getElementById('searchQueryDisplay');
    if (currentSearchQuery) {
        queryDisplay.innerHTML = `Searching for: <span class="query-text">"${currentSearchQuery}"</span>`;
        queryDisplay.style.display = 'block';
    } else {
        queryDisplay.style.display = 'none';
    }
}

function performSearchQuery(query) {
    // Show loading state
    showLoadingState();
    
    // Simulate search delay
    setTimeout(() => {
        // Search through articles and products
        const articleResults = searchArticles(query);
        const productResults = searchProducts(query);
        
        // Combine results
        searchResults = [
            ...articleResults.map(item => ({...item, type: 'article'})),
            ...productResults.map(item => ({...item, type: 'product'}))
        ];
        
        // Apply initial filters
        applyFilters();
    }, 500);
}

function searchArticles(query) {
    const queryLower = query.toLowerCase();
    
    return AuraTie.articles.filter(article => {
        const titleMatch = article.title.toLowerCase().includes(queryLower);
        const excerptMatch = article.excerpt.toLowerCase().includes(queryLower);
        const tagMatch = article.tags.some(tag => tag.toLowerCase().includes(queryLower));
        const categoryMatch = article.category.toLowerCase().includes(queryLower);
        
        return titleMatch || excerptMatch || tagMatch || categoryMatch;
    }).map(article => ({
        ...article,
        relevanceScore: calculateRelevanceScore(article, query)
    }));
}

function searchProducts(query) {
    const queryLower = query.toLowerCase();
    
    return AuraTie.products.filter(product => {
        const titleMatch = product.title.toLowerCase().includes(queryLower);
        const descriptionMatch = product.description && product.description.toLowerCase().includes(queryLower);
        const categoryMatch = product.category.toLowerCase().includes(queryLower);
        
        return titleMatch || descriptionMatch || categoryMatch;
    }).map(product => ({
        ...product,
        relevanceScore: calculateRelevanceScore(product, query)
    }));
}

function calculateRelevanceScore(item, query) {
    const queryLower = query.toLowerCase();
    let score = 0;
    
    // Title matches get highest score
    if (item.title.toLowerCase().includes(queryLower)) {
        score += 10;
        // Exact title match gets bonus
        if (item.title.toLowerCase() === queryLower) {
            score += 20;
        }
    }
    
    // Excerpt/description matches
    const content = item.excerpt || item.description || '';
    if (content.toLowerCase().includes(queryLower)) {
        score += 5;
    }
    
    // Tag matches
    if (item.tags && item.tags.some(tag => tag.toLowerCase().includes(queryLower))) {
        score += 3;
    }
    
    // Category matches
    if (item.category.toLowerCase().includes(queryLower)) {
        score += 2;
    }
    
    return score;
}

function applyFilters() {
    // Get filter values
    const contentTypeFilters = Array.from(document.querySelectorAll('input[name="contentType"]:checked'))
        .map(input => input.value);
    
    const categoryFilters = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(input => input.value);
    
    // Apply filters
    filteredResults = searchResults.filter(item => {
        // Content type filter
        if (!contentTypeFilters.includes(item.type + 's')) {
            return false;
        }
        
        // Category filter
        if (!categoryFilters.includes('all') && !categoryFilters.includes(item.category)) {
            return false;
        }
        
        return true;
    });
    
    // Apply sorting
    sortSearchResults();
}

function sortSearchResults() {
    const sortValue = document.getElementById('sortSelect').value;
    
    switch (sortValue) {
        case 'relevance':
            filteredResults.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
            break;
        case 'date-desc':
            filteredResults.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'date-asc':
            filteredResults.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'title-asc':
            filteredResults.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'title-desc':
            filteredResults.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }
    
    currentPage = 1;
    displaySearchResults();
}

function displaySearchResults() {
    const container = document.getElementById('searchResultsContainer');
    const noResultsSection = document.getElementById('noResultsSection');
    
    // Update results info
    updateResultsInfo();
    
    if (filteredResults.length === 0) {
        container.innerHTML = '';
        noResultsSection.style.display = 'block';
        return;
    }
    
    noResultsSection.style.display = 'none';
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const resultsToShow = filteredResults.slice(startIndex, endIndex);
    
    // Set container class based on view
    container.className = `search-results-container ${currentView}-view`;
    
    // Generate results HTML
    container.innerHTML = resultsToShow.map(item => createResultItem(item)).join('');
    
    // Generate pagination
    generateSearchPagination();
    
    // Hide loading state
    hideLoadingState();
}

function createResultItem(item) {
    const isProduct = item.type === 'product';
    const link = isProduct ? `product.html?id=${item.id}` : `article.html?id=${item.id}`;
    const image = item.image || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop';
    const excerpt = item.excerpt || item.description || '';
    
    // Highlight search terms in title and excerpt
    const highlightedTitle = highlightSearchTerms(item.title, currentSearchQuery);
    const highlightedExcerpt = highlightSearchTerms(excerpt, currentSearchQuery);
    
    return `
        <a href="${link}" class="search-result-item">
            <div class="result-image">
                <img src="${image}" alt="${item.title}" loading="lazy">
                <div class="result-type-badge">${isProduct ? 'Product' : 'Article'}</div>
                <div class="result-category-badge">${AuraTie.getCategoryDisplayName(item.category)}</div>
            </div>
            <div class="result-content">
                <h3 class="result-title">${highlightedTitle}</h3>
                <p class="result-excerpt">${highlightedExcerpt}</p>
                <div class="result-meta">
                    <div class="result-date">
                        <i class="fas fa-calendar"></i>
                        ${AuraTie.formatDate(item.date)}
                    </div>
                    ${isProduct ? `
                        <div class="result-price">${item.price}</div>
                    ` : `
                        <div class="result-rating">${generateStarRating(item.rating || 4.5)}</div>
                    `}
                </div>
            </div>
        </a>
    `;
}

function highlightSearchTerms(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

function updateResultsInfo() {
    const resultsInfo = document.getElementById('resultsInfo');
    const totalResults = filteredResults.length;
    const startResult = totalResults > 0 ? (currentPage - 1) * resultsPerPage + 1 : 0;
    const endResult = Math.min(currentPage * resultsPerPage, totalResults);
    
    resultsInfo.innerHTML = `
        <div class="results-count">
            Showing ${startResult}-${endResult} of ${totalResults} results
        </div>
        <div class="results-query">
            for "${currentSearchQuery}"
        </div>
    `;
}

function generateSearchPagination() {
    const pagination = document.getElementById('searchPagination');
    const totalPages = Math.ceil(filteredResults.length / resultsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <button onclick="changeSearchPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i> Previous
        </button>
    `;
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        paginationHTML += `<button onclick="changeSearchPage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span>...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button onclick="changeSearchPage(${i})" ${i === currentPage ? 'class="active"' : ''}>
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span>...</span>`;
        }
        paginationHTML += `<button onclick="changeSearchPage(${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    paginationHTML += `
        <button onclick="changeSearchPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Next <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    pagination.innerHTML = paginationHTML;
}

function changeSearchPage(page) {
    if (page < 1 || page > Math.ceil(filteredResults.length / resultsPerPage)) {
        return;
    }
    
    currentPage = page;
    displaySearchResults();
    
    // Scroll to top of results
    document.getElementById('searchResultsContainer').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function toggleView(view) {
    if (view === currentView) return;
    
    currentView = view;
    
    // Update view buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    // Redisplay results with new view
    displaySearchResults();
}

function showLoadingState() {
    const container = document.getElementById('searchResultsContainer');
    container.innerHTML = `
        <div class="search-loading">
            <i class="fas fa-spinner fa-spin"></i>
            Searching...
        </div>
    `;
}

function hideLoadingState() {
    // Loading state is hidden when results are displayed
}

function showEmptySearchState() {
    const container = document.getElementById('searchResultsContainer');
    container.innerHTML = `
        <div class="empty-search-state">
            <h3>Start Your Search</h3>
            <p>Enter keywords above to find articles and products across all our categories.</p>
        </div>
    `;
    
    // Add styles for empty state
    const style = document.createElement('style');
    style.textContent = `
        .empty-search-state {
            text-align: center;
            padding: 3rem;
            color: var(--text-light);
        }
        
        .empty-search-state h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }
    `;
    document.head.appendChild(style);
}

function loadSidebarContent() {
    loadRecentArticles();
    loadSidebarFeaturedProducts();
}

function loadRecentArticles() {
    const container = document.getElementById('recentArticles');
    
    // Get 3 most recent articles
    const recentArticles = AuraTie.articles
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
    
    container.innerHTML = recentArticles.map(article => `
        <a href="article.html?id=${article.id}" class="recent-article">
            <img src="${article.image}" alt="${article.title}" loading="lazy">
            <div class="recent-article-content">
                <h4>${article.title}</h4>
                <div class="recent-article-date">${AuraTie.formatDate(article.date)}</div>
            </div>
        </a>
    `).join('');
}

function loadSidebarFeaturedProducts() {
    const container = document.getElementById('sidebarFeaturedProducts');
    
    // Get 2 featured products
    const featuredProducts = AuraTie.products.slice(0, 2);
    
    container.innerHTML = featuredProducts.map(product => `
        <a href="product.html?id=${product.id}" class="sidebar-product">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <div class="sidebar-product-content">
                <h4>${product.title}</h4>
                <div class="price">${product.price}</div>
                <div class="rating">${generateStarRating(product.rating)}</div>
            </div>
        </a>
    `).join('');
    
    // Add sidebar product styles
    const style = document.createElement('style');
    style.textContent = `
        .sidebar-product {
            display: block;
            text-decoration: none;
            color: inherit;
            transition: var(--transition);
            margin-bottom: 1.5rem;
        }
        
        .sidebar-product:hover {
            transform: translateY(-2px);
        }
        
        .sidebar-product img {
            width: 100%;
            height: 120px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 0.75rem;
        }
        
        .sidebar-product h4 {
            font-size: 0.9rem;
            margin: 0 0 0.5rem 0;
            color: var(--text-dark);
            line-height: 1.3;
        }
        
        .sidebar-product .price {
            font-size: 1rem;
            font-weight: 600;
            color: var(--secondary-color);
            margin-bottom: 0.25rem;
        }
        
        .sidebar-product .rating {
            color: var(--accent-color);
            font-size: 0.8rem;
        }
    `;
    document.head.appendChild(style);
}

function setupEventListeners() {
    // Filter checkboxes
    document.querySelectorAll('input[name="contentType"], input[name="category"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });
    
    // Category filter special handling
    const allCategoriesCheckbox = document.querySelector('input[name="category"][value="all"]');
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]:not([value="all"])');
    
    if (allCategoriesCheckbox) {
        allCategoriesCheckbox.addEventListener('change', function() {
            if (this.checked) {
                categoryCheckboxes.forEach(cb => cb.checked = false);
            }
        });
    }
    
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked && allCategoriesCheckbox) {
                allCategoriesCheckbox.checked = false;
            }
        });
    });
}

function handleFilterChange() {
    // Auto-apply filters when checkboxes change
    applyFilters();
}

// Add to global scope for onclick handlers
window.performMainSearch = performMainSearch;
window.applyFilters = applyFilters;
window.sortSearchResults = sortSearchResults;
window.toggleView = toggleView;
window.changeSearchPage = changeSearchPage;
