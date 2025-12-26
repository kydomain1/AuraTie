// Category page functionality
let currentCategory = '';
let filteredArticles = [];
let currentPage = 1;
const articlesPerPage = 6;

// Category information
const categoryInfo = {
    'fashion': {
        title: 'Fashion & Accessories',
        description: 'Discover the latest fashion trends, style guides, and accessory recommendations for the modern lifestyle.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
        color: '#8b4513'
    },
    'health': {
        title: 'Health & Beauty',
        description: 'Explore wellness tips, skincare routines, and beauty products for a healthier, more radiant you.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop',
        color: '#2e8b57'
    },
    'home': {
        title: 'Home & Garden',
        description: 'Transform your living space with interior design ideas, home improvement tips, and garden inspiration.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=400&fit=crop',
        color: '#4682b4'
    },
    'travel': {
        title: 'Travel & Accommodation',
        description: 'Discover amazing destinations, travel tips, and accommodation recommendations for your next adventure.',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=400&fit=crop',
        color: '#20b2aa'
    },
    'finance': {
        title: 'Finance & Insurance',
        description: 'Get expert advice on personal finance, investment strategies, and insurance planning for your future.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=400&fit=crop',
        color: '#6b8e23'
    },
    'food': {
        title: 'Food & Beverage',
        description: 'Explore culinary adventures, restaurant reviews, and beverage guides for food enthusiasts.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=400&fit=crop',
        color: '#cd853f'
    }
};

// Initialize category page
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure AuraTie is loaded
    setTimeout(initializeCategoryPage, 100);
});

function initializeCategoryPage() {
    console.log('Initializing category page...');
    
    // Check if AuraTie is available
    if (typeof AuraTie === 'undefined') {
        console.error('AuraTie object not found. Retrying...');
        setTimeout(initializeCategoryPage, 100);
        return;
    }
    
    console.log('AuraTie object found:', AuraTie);
    
    currentCategory = AuraTie.getUrlParameter('cat');
    console.log('Current category from URL:', currentCategory);
    console.log('Available categories:', Object.keys(categoryInfo));
    console.log('Category info for current category:', categoryInfo[currentCategory]);
    
    if (currentCategory && categoryInfo[currentCategory]) {
        console.log('Loading category page for:', currentCategory);
        loadCategoryPage();
    } else {
        console.error('Category not found or invalid:', currentCategory);
        // Handle category not found
        const categoryHero = document.getElementById('categoryHero');
        if (categoryHero) {
            categoryHero.innerHTML = `
                <div class="category-not-found">
                    <h2>Category Not Found</h2>
                    <p>The category you're looking for doesn't exist. Current category: "${currentCategory}"</p>
                    <p>Available categories: ${Object.keys(categoryInfo).join(', ')}</p>
                    <a href="index.html" class="read-more-btn">Return to Home</a>
                </div>
            `;
        }
    }
}

function loadCategoryPage() {
    console.log('Loading category page for:', currentCategory);
    const category = categoryInfo[currentCategory];
    console.log('Category info:', category);
    
    // Update page title
    document.title = `${category.title} - AuraTie`;
    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle) {
        categoryTitle.textContent = `${category.title} - AuraTie`;
    }
    
    // Load category hero
    console.log('Loading category hero...');
    loadCategoryHero(category);
    
    // Filter articles by category
    if (AuraTie && AuraTie.articles) {
        console.log('Total articles available:', AuraTie.articles.length);
        console.log('All articles:', AuraTie.articles.map(a => ({id: a.id, category: a.category, title: a.title})));
        
        filteredArticles = AuraTie.articles.filter(article => article.category === currentCategory);
        console.log(`Found ${filteredArticles.length} articles for category: ${currentCategory}`);
        console.log('Filtered articles:', filteredArticles.map(a => ({id: a.id, title: a.title})));
    } else {
        console.error('AuraTie.articles not available');
        filteredArticles = [];
    }
    
    // Load articles
    console.log('Loading category articles...');
    loadCategoryArticles();
    
    // Load sidebar content
    console.log('Loading sidebar content...');
    loadRelatedCategories();
    loadPopularArticles();
    loadSidebarProducts();
    
    // Update results count
    console.log('Updating results count...');
    updateResultsCount();
    
    console.log('Category page loading complete');
}

function loadCategoryHero(category) {
    console.log('Loading category hero for:', category.title);
    const categoryHero = document.getElementById('categoryHero');
    
    if (!categoryHero) {
        console.error('Category hero element not found');
        return;
    }
    
    // Calculate article count safely
    let articleCount = 0;
    if (filteredArticles && Array.isArray(filteredArticles)) {
        articleCount = filteredArticles.length;
    } else if (AuraTie && AuraTie.articles) {
        articleCount = AuraTie.articles.filter(article => article.category === currentCategory).length;
    }
    
    categoryHero.innerHTML = `
        <div class="category-hero-content">
            <div class="category-hero-image">
                <img src="${category.image}" alt="${category.title}" loading="eager">
                <div class="category-hero-overlay"></div>
            </div>
            <div class="category-hero-text">
                <h1 class="category-title">${category.title}</h1>
                <p class="category-description">${category.description}</p>
                <div class="category-stats">
                    <span class="stat">${articleCount} Articles</span>
                    <span class="stat">Updated Daily</span>
                </div>
            </div>
        </div>
    `;
    
    console.log('Category hero loaded successfully');
}

function loadCategoryArticles() {
    const articlesGrid = document.getElementById('categoryArticles');
    
    if (!articlesGrid) {
        console.error('Articles grid element not found');
        return;
    }
    
    if (!filteredArticles || filteredArticles.length === 0) {
        articlesGrid.innerHTML = `
            <div class="no-articles">
                <h3>No Articles Found</h3>
                <p>We don't have any articles in this category yet. Check back soon for new content!</p>
                <a href="index.html" class="read-more-btn">Back to Home</a>
            </div>
        `;
        return;
    }
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);
    
    console.log(`Displaying ${articlesToShow.length} articles for category: ${currentCategory}`);
    
    // Create article cards
    articlesGrid.innerHTML = articlesToShow.map((article, index) => `
        <article class="article-card fade-in-up" style="animation-delay: ${index * 0.1}s">
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
                <div class="article-category">${AuraTie.getCategoryDisplayName(article.category)}</div>
            </div>
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <span class="date">${AuraTie.formatDate(article.date)}</span>
                    <span class="read-time">${article.readTime}</span>
                </div>
                <a href="article.html?id=${article.id}" class="read-more-btn">Read Article</a>
            </div>
        </article>
    `).join('');
    
    // Generate pagination
    generatePagination();
}

function generatePagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    
    if (!pagination || totalPages <= 1) return;
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i> Previous
        </button>
    `;
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        paginationHTML += `<button onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span>...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ''}>
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span>...</span>`;
        }
        paginationHTML += `<button onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    paginationHTML += `
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Next <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    if (page < 1 || page > Math.ceil(filteredArticles.length / articlesPerPage)) return;
    
    currentPage = page;
    loadCategoryArticles();
    
    // Scroll to top of articles
    document.getElementById('categoryArticles').scrollIntoView({ behavior: 'smooth' });
}

function sortArticles() {
    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect.value;
    
    switch (sortValue) {
        case 'date-desc':
            filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'date-asc':
            filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'title-asc':
            filteredArticles.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'title-desc':
            filteredArticles.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }
    
    currentPage = 1;
    loadCategoryArticles();
}

function loadRelatedCategories() {
    const relatedContainer = document.getElementById('relatedCategories');
    if (!relatedContainer) return;
    
    // Get other categories
    const otherCategories = Object.keys(categoryInfo)
        .filter(cat => cat !== currentCategory)
        .slice(0, 4);
    
    relatedContainer.innerHTML = otherCategories.map(categoryKey => {
        const category = categoryInfo[categoryKey];
        return `
            <a href="category.html?cat=${categoryKey}" class="related-category">
                <i class="fas fa-folder"></i>
                <div>
                    <h4>${category.title}</h4>
                    <small>Explore ${categoryKey} articles</small>
                </div>
            </a>
        `;
    }).join('');
}

function loadPopularArticles() {
    const popularContainer = document.getElementById('popularArticles');
    
    if (!popularContainer) return;
    
    // Get random articles from current category (simulating popularity)
    let popularArticles = [];
    if (filteredArticles && filteredArticles.length > 0) {
        popularArticles = filteredArticles
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
    } else if (AuraTie && AuraTie.articles) {
        // If no filtered articles, get random articles from all categories
        popularArticles = AuraTie.articles
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
    }
    
    popularContainer.innerHTML = popularArticles.map(article => `
        <a href="article.html?id=${article.id}" class="popular-article">
            <img src="${article.image}" alt="${article.title}" loading="lazy">
            <div class="popular-article-content">
                <h4>${article.title}</h4>
                <div class="popular-article-meta">
                    ${AuraTie.formatDate(article.date)} • ${article.readTime}
                </div>
            </div>
        </a>
    `).join('');
}

function loadSidebarProducts() {
    const productsContainer = document.getElementById('sidebarProducts');
    
    if (!productsContainer) return;
    
    // Get products from current category or random products
    let categoryProducts = [];
    if (AuraTie && AuraTie.products) {
        categoryProducts = AuraTie.products.filter(product => product.category === currentCategory);
    }
    
    if (categoryProducts.length === 0 && AuraTie && AuraTie.products) {
        categoryProducts = AuraTie.products.slice(0, 2);
    } else {
        categoryProducts = categoryProducts.slice(0, 2);
    }
    
    productsContainer.innerHTML = categoryProducts.map(product => `
        <a href="product.html?id=${product.id}" class="sidebar-product">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <div class="sidebar-product-content">
                <h4>${product.title}</h4>
                <div class="product-price">$${product.price}</div>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.reviews} reviews)</span>
                </div>
            </div>
        </a>
    `).join('');
}

function generateStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
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

function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    
    if (!resultsCount) {
        console.error('Results count element not found');
        return;
    }
    
    const count = filteredArticles ? filteredArticles.length : 0;
    const categoryName = categoryInfo[currentCategory] ? categoryInfo[currentCategory].title : 'Unknown';
    
    resultsCount.textContent = `${count} article${count !== 1 ? 's' : ''} in ${categoryName}`;
    console.log('Results count updated:', resultsCount.textContent);
}

// Add to global scope for onclick handlers
window.changePage = changePage;
window.sortArticles = sortArticles;
