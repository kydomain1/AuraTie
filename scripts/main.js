// Article data
const articles = [
    {
        id: 'viagogo-live-freedom',
        title: 'Viagogo: The Freedom to Dance, Sing & Cheer Live',
        category: 'travel',
        excerpt: 'Tap Viagogo’s live marketplace to secure unforgettable seats across concerts, sports, and theater weekends before the energy peaks.',
        image: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&h=600&fit=crop&crop=center',
        date: '2025-10-02',
        readTime: '6 min read',
        author: 'Marcus Bell',
        tags: ['live events', 'tickets', 'travel', 'nightlife']
    },
    {
        id: 'stubhub-trending-events',
        title: 'Discover Trending Events Near You on StubHub',
        category: 'travel',
        excerpt: 'From arena concerts to hometown sports rivalries, here’s how to spot and book the season’s hottest tickets in minutes using StubHub’s discovery tools.',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop&crop=center',
        date: '2025-10-03',
        readTime: '7 min read',
        author: 'Lena Morris',
        tags: ['events', 'tickets', 'live entertainment', 'city guide']
    },
    {
        id: 'sustainable-fashion',
        title: 'The Ultimate Guide to Sustainable Fashion: Building a Conscious Wardrobe',
        category: 'fashion',
        excerpt: 'Discover how to create a stylish, eco-friendly wardrobe that reflects your values while staying on-trend. Our comprehensive guide covers everything from ethical brands to sustainable materials.',
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop&crop=center',
        date: '2025-08-15',
        readTime: '8 min read',
        author: 'Emma Thompson',
        tags: ['sustainable fashion', 'eco-friendly', 'ethical brands', 'wardrobe essentials']
    },
    {
        id: 'korean-skincare-secrets',
        title: 'Korean Skincare Secrets for Glowing Skin',
        category: 'health',
        excerpt: 'Unlock the secrets of Korean skincare with our comprehensive guide to achieving that coveted glass skin look. Learn about the 10-step routine, key ingredients, and best products.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
        date: '2025-07-28',
        readTime: '6 min read',
        author: 'Sarah Kim',
        tags: ['skincare', 'K-beauty', 'glass skin', 'routine']
    },
    {
        id: 'minimalist-home-design',
        title: 'Minimalist Home Design Trends for Modern Living',
        category: 'home',
        excerpt: 'Transform your living space with minimalist design principles that emphasize simplicity, functionality, and beauty. Discover how less can truly be more.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop&crop=center',
        date: '2025-06-12',
        readTime: '7 min read',
        author: 'Michael Chen',
        tags: ['minimalism', 'interior design', 'home decor', 'modern living']
    },
    {
        id: 'european-travel-guide',
        title: 'Hidden Gems: European Travel Guide for 2025',
        category: 'travel',
        excerpt: 'Explore Europe\'s best-kept secrets with our curated guide to hidden destinations that offer authentic experiences away from the tourist crowds.',
        image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&h=600&fit=crop&crop=center',
        date: '2025-05-20',
        readTime: '10 min read',
        author: 'Isabella Rodriguez',
        tags: ['travel', 'Europe', 'hidden gems', 'destinations']
    },
    {
        id: 'investment-strategies',
        title: 'Smart Investment Strategies for Young Professionals',
        category: 'finance',
        excerpt: 'Build your financial future with proven investment strategies tailored for young professionals. Learn about portfolio diversification, risk management, and long-term wealth building.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=center',
        date: '2025-04-08',
        readTime: '9 min read',
        author: 'David Park',
        tags: ['investment', 'finance', 'wealth building', 'portfolio']
    },
    {
        id: 'artisan-coffee-culture',
        title: 'The Rise of Artisan Coffee Culture: A Global Phenomenon',
        category: 'food',
        excerpt: 'Dive into the world of specialty coffee and discover how artisan roasters are revolutionizing our daily brew. From bean to cup, explore the craft behind great coffee.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&crop=center',
        date: '2025-03-15',
        readTime: '5 min read',
        author: 'James Wilson',
        tags: ['coffee', 'artisan', 'culture', 'specialty coffee']
    },
];

// Products data
const products = [
    {
        id: 'viagogo-live-pass',
        title: 'Viagogo Live Freedom Pass',
        category: 'travel',
        price: '$159.00',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop',
        description: 'Weekend-ready ticket bundles curated through Viagogo’s verified resale network, complete with hospitality tips.',
        features: ['Multi-city event credits', 'VIP-ready seat mapping', 'Price-drop monitoring', 'Mobile ticket transfers']
    },
    {
        id: 'stubhub-event-pass',
        title: 'City Event Explorer by StubHub',
        category: 'travel',
        price: '$149.00',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=400&h=400&fit=crop',
        description: 'Curated access bundles for concerts, sports, and theater in your city, powered by StubHub’s verified ticket marketplace.',
        features: ['Multi-event bundles', 'Mobile-first ticketing', 'Real-time seat maps', 'VIP upgrade suggestions']
    },
    {
        id: 'organic-skincare-set',
        title: 'Premium Organic Skincare Set',
        category: 'health',
        price: '$89.99',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
        description: 'Complete organic skincare routine with cleanser, toner, serum, and moisturizer.',
        features: ['100% Organic', 'Cruelty-Free', 'Suitable for All Skin Types', 'Natural Ingredients']
    },
    {
        id: 'designer-handbag',
        title: 'Luxury Leather Handbag',
        category: 'fashion',
        price: '$299.99',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
        description: 'Handcrafted leather handbag with premium materials and elegant design.',
        features: ['Genuine Leather', 'Multiple Compartments', 'Adjustable Strap', 'Lifetime Warranty']
    },
    {
        id: 'smart-home-system',
        title: 'Smart Home Automation System',
        category: 'home',
        price: '$199.99',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
        description: 'Complete smart home solution with voice control and mobile app integration.',
        features: ['Voice Control', 'Mobile App', 'Energy Saving', 'Easy Installation']
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupMobileMenu();
    setupSearch();
    setupNewsletter();
    setupHeaderFeatures();
    setupImageErrorHandling();
    loadArticles();
    setupCategoryCards();
    setupScrollAnimations();
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const headerNav = document.querySelector('.header-nav');

    if (mobileMenuBtn && headerNav) {
        mobileMenuBtn.addEventListener('click', function() {
            headerNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!headerNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                headerNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query) {
        // Redirect to search page with query parameter
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
}

function displaySearchResults(results, query) {
    const articlesGrid = document.getElementById('articlesGrid');
    
    if (articlesGrid) {
        articlesGrid.innerHTML = '';
        
        if (results.length === 0) {
            articlesGrid.innerHTML = `
                <div class="no-results">
                    <h3>No articles found for "${query}"</h3>
                    <p>Try searching with different keywords or browse our categories.</p>
                </div>
            `;
        } else {
            results.forEach(article => {
                articlesGrid.appendChild(createArticleCard(article));
            });
        }
        
        // Hide load more button during search
        const loadMoreContainer = document.querySelector('.load-more-container');
        if (loadMoreContainer) {
            loadMoreContainer.style.display = 'none';
        }
    }
}

// Newsletter functionality
function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate newsletter signup
            const button = this.querySelector('button');
            const originalText = button.textContent;
            
            button.innerHTML = '<div class="loading"></div>';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Subscribed!';
                button.style.background = '#28a745';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                    button.disabled = false;
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }
}

// Load and display articles
function loadArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    
    if (articlesGrid && articles && articles.length > 0) {
        // Clear existing articles (including static test card)
        articlesGrid.innerHTML = '';
        
        // Show all articles at once
        articles.forEach((article, index) => {
            const articleCard = createArticleCard(article);
            articleCard.style.animationDelay = `${index * 0.1}s`;
            articlesGrid.appendChild(articleCard);
        });
        
    }
}

function createArticleCard(article) {
    const card = document.createElement('article');
    card.className = 'article-card fade-in-up';
    card.style.cursor = 'pointer';
    
    // Use innerHTML for reliable content rendering
    card.innerHTML = `
        <div class="article-image">
            <img src="${article.image}" alt="${article.title}" loading="lazy" style="width: 100%; height: 220px; object-fit: cover;">
            <div class="article-category" style="position: absolute; top: 1rem; left: 1rem; background: #8b4513; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem; font-weight: 500; z-index: 2;">
                ${getCategoryDisplayName(article.category)}
            </div>
        </div>
        <div class="article-content" style="padding: 1.5rem; display: block;">
            <h3 class="article-title" style="font-size: 1.4rem; font-weight: 700; margin-bottom: 0.75rem; line-height: 1.3; color: #2c2c2c; display: block; cursor: pointer;">
                <a href="article.html?id=${article.id}" style="text-decoration: none; color: inherit; display: block;">
                    ${article.title}
                </a>
            </h3>
            <p class="article-excerpt" style="font-size: 0.95rem; color: #666; line-height: 1.6; margin-bottom: 1.25rem; display: block;">
                ${article.excerpt}
            </p>
            <div class="article-meta" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; font-size: 0.85rem; color: #666;">
                <span class="date">${formatDate(article.date)}</span>
                <span class="read-time">${article.readTime}</span>
            </div>
            <a href="article.html?id=${article.id}" class="read-more-btn" style="display: inline-block; background: #8b4513; color: white; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 0.9rem; transition: all 0.3s ease;">
                阅读全文
            </a>
        </div>
    `;
    
    // 添加点击整个卡片跳转的功能
    card.addEventListener('click', function(e) {
        // 如果点击的是链接，不阻止默认行为
        if (e.target.tagName === 'A') {
            return;
        }
        // 否则跳转到文章页面
        window.location.href = `article.html?id=${article.id}`;
    });
    
    return card;
}

function getCategoryDisplayName(category) {
    const categoryNames = {
        'fashion': 'Fashion & Accessories',
        'health': 'Health & Beauty',
        'home': 'Home & Garden',
        'travel': 'Travel & Accommodation',
        'finance': 'Finance & Insurance',
        'food': 'Food & Beverage'
    };
    
    return categoryNames[category] || category;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Category cards functionality
function setupCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            if (category) {
                window.location.href = `category.html?cat=${category}`;
            }
        });
    });
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.category-card, .trending-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Header functionality
function setupHeaderFeatures() {
    setupCurrentDate();
    setupReadingProgress();
    setupNewsletterModal();
}

function setupCurrentDate() {
    const dateDisplay = document.getElementById('currentDate');
    if (dateDisplay) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        dateDisplay.textContent = now.toLocaleDateString('en-US', options);
    }
}

function setupReadingProgress() {
    const progressBar = document.getElementById('readingProgress');
    if (progressBar) {
        window.addEventListener('scroll', function() {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / docHeight) * 100;
            progressBar.style.width = Math.min(progress, 100) + '%';
        });
    }
}

function setupNewsletterModal() {
    // This would open a newsletter modal - placeholder for now
    window.openNewsletterModal = function() {
        // Scroll to newsletter section
        const newsletter = document.querySelector('.newsletter');
        if (newsletter) {
            newsletter.scrollIntoView({ behavior: 'smooth' });
        }
    };
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Utility functions
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoading(element, originalContent) {
    element.innerHTML = originalContent;
}

// Image error handling
function setupImageErrorHandling() {
    // Handle category card images
    document.querySelectorAll('.category-image img').forEach(img => {
        img.addEventListener('error', function() {
            handleImageError(this);
        });
        
        // Also check if image is already broken
        if (!this.complete || this.naturalHeight === 0) {
            handleImageError(this);
        }
    });
}

function handleImageError(img) {
    // Set error attribute for CSS styling
    img.setAttribute('data-error', 'true');
    
    // Create fallback based on category
    const categoryCard = img.closest('.category-card');
    const category = categoryCard ? categoryCard.getAttribute('data-category') : '';
    
    // Set fallback image based on category
    const fallbackImages = {
        'fashion': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
        'health': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
        'home': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        'travel': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
        'finance': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
        'food': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop'
    };
    
    // Try fallback image first
    if (category && fallbackImages[category] && img.src !== fallbackImages[category]) {
        img.removeAttribute('data-error');
        img.src = fallbackImages[category];
        return;
    }
    
    // If fallback also fails, create colored placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');
    
    // Category colors
    const categoryColors = {
        'fashion': ['#8b4513', '#d4af37'],
        'health': ['#2e8b57', '#90ee90'],
        'home': ['#4682b4', '#87ceeb'],
        'travel': ['#20b2aa', '#afeeee'],
        'finance': ['#6b8e23', '#9acd32'],
        'food': ['#cd853f', '#daa520']
    };
    
    const colors = categoryColors[category] || ['#8b4513', '#d4af37'];
    
    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 400, 300);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 300);
    
    // Add category icon
    ctx.fillStyle = 'white';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const categoryIcons = {
        'fashion': '👗',
        'health': '💖',
        'home': '🏠',
        'travel': '✈️',
        'finance': '💰',
        'food': '🍽️'
    };
    
    const icon = categoryIcons[category] || '📷';
    ctx.fillText(icon, 200, 150);
    
    // Convert to data URL and set as src
    img.src = canvas.toDataURL();
}

// Export functions for use in other files
window.AuraTie = {
    articles,
    products,
    performSearch,
    getCategoryDisplayName,
    formatDate,
    getUrlParameter
};
