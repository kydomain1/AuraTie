// Extended product data with detailed information
const productDetails = {
    'organic-skincare-set': {
        id: 'organic-skincare-set',
        title: 'Premium Organic Skincare Set',
        category: 'health',
        price: '$89.99',
        originalPrice: '$129.99',
        rating: 4.8,
        reviewCount: 156,
        images: [
            'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=600&fit=crop'
        ],
        description: 'Transform your skincare routine with our premium organic skincare set. This comprehensive collection includes a gentle cleanser, hydrating toner, nourishing serum, and moisturizer – all formulated with certified organic ingredients and suitable for all skin types.',
        features: [
            '100% Organic certified ingredients',
            'Cruelty-free and vegan formulation',
            'Suitable for all skin types including sensitive',
            'Dermatologist tested and approved',
            'Eco-friendly packaging made from recycled materials',
            '30-day money-back guarantee',
            'Free shipping on orders over $75'
        ],
        specifications: {
            'Set Includes': '4 full-size products (Cleanser 150ml, Toner 200ml, Serum 30ml, Moisturizer 50ml)',
            'Skin Type': 'All skin types, including sensitive',
            'Key Ingredients': 'Organic Aloe Vera, Hyaluronic Acid, Vitamin E, Jojoba Oil',
            'Certifications': 'USDA Organic, Leaping Bunny Certified',
            'Packaging': 'Recyclable glass and bamboo containers',
            'Shelf Life': '24 months unopened, 12 months after opening',
            'Origin': 'Made in USA with globally sourced organic ingredients'
        },
        reviews: [
            {
                name: 'Sarah M.',
                rating: 5,
                date: '2025-01-15',
                text: 'Amazing results! My skin has never looked better. The serum is particularly incredible – I noticed a difference in just one week. The packaging is beautiful too.'
            },
            {
                name: 'Jennifer K.',
                rating: 5,
                date: '2025-01-08',
                text: 'Love this set! Finally found products that work for my sensitive skin. No irritation and my complexion looks so much brighter and healthier.'
            },
            {
                name: 'Maria L.',
                rating: 4,
                date: '2024-12-28',
                text: 'Great quality products. The cleanser is very gentle and the moisturizer is perfect for my dry skin. Only wish the serum bottle was larger!'
            }
        ],
        relatedProducts: ['designer-handbag', 'smart-home-system']
    },

    'designer-handbag': {
        id: 'designer-handbag',
        title: 'Luxury Leather Handbag',
        category: 'fashion',
        price: '$299.99',
        originalPrice: null,
        rating: 4.9,
        reviewCount: 89,
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=600&fit=crop'
        ],
        description: 'Elevate your style with this exquisite handcrafted leather handbag. Made from premium full-grain leather and featuring impeccable attention to detail, this timeless piece combines elegance with functionality. Perfect for both professional and casual occasions.',
        features: [
            'Genuine full-grain leather construction',
            'Handcrafted by skilled artisans',
            'Multiple interior compartments for organization',
            'Adjustable and removable shoulder strap',
            'Protective metal feet to prevent wear',
            'Lifetime craftsmanship warranty',
            'Comes with dust bag and care instructions'
        ],
        specifications: {
            'Dimensions': '32cm W x 25cm H x 12cm D (12.6" x 9.8" x 4.7")',
            'Material': 'Premium full-grain leather with cotton lining',
            'Hardware': 'Antique brass hardware with protective coating',
            'Closure': 'Magnetic snap closure with interior zip pocket',
            'Strap': 'Adjustable leather strap (95-120cm / 37"-47")',
            'Weight': '0.8kg (1.8 lbs)',
            'Care': 'Professional leather cleaning recommended',
            'Origin': 'Handcrafted in Italy'
        },
        reviews: [
            {
                name: 'Emma T.',
                rating: 5,
                date: '2025-01-20',
                text: 'Absolutely gorgeous bag! The leather quality is exceptional and it fits everything I need. Gets compliments everywhere I go. Worth every penny!'
            },
            {
                name: 'Rachel W.',
                rating: 5,
                date: '2025-01-12',
                text: 'Perfect size and beautiful craftsmanship. The leather is so soft and the interior is well-organized. This will definitely last for years.'
            },
            {
                name: 'Lisa H.',
                rating: 4,
                date: '2025-01-05',
                text: 'Beautiful bag with excellent quality. Only minor complaint is that it\'s a bit heavier than expected, but the quality makes up for it.'
            }
        ],
        relatedProducts: ['organic-skincare-set', 'smart-home-system']
    },

    'smart-home-system': {
        id: 'smart-home-system',
        title: 'Smart Home Automation System',
        category: 'home',
        price: '$199.99',
        originalPrice: '$249.99',
        rating: 4.7,
        reviewCount: 203,
        images: [
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1558882224-dda166733046?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=600&fit=crop'
        ],
        description: 'Transform your home into a smart, efficient living space with our comprehensive home automation system. Control lighting, temperature, security, and more from your smartphone or voice commands. Easy to install and compatible with major smart home platforms.',
        features: [
            'Voice control compatible with Alexa and Google Assistant',
            'Smartphone app for remote control and monitoring',
            'Energy-saving automation schedules',
            'Easy DIY installation with step-by-step guide',
            'Works with existing electrical systems',
            'Expandable system – add more devices anytime',
            '24/7 customer support and 2-year warranty'
        ],
        specifications: {
            'Hub Connectivity': 'Wi-Fi 802.11n, Bluetooth 5.0, Zigbee 3.0',
            'Compatibility': 'iOS 12+, Android 8+, Alexa, Google Assistant',
            'Power Supply': '12V DC adapter (included)',
            'Range': 'Up to 100m (328ft) outdoor, 30m (98ft) indoor',
            'Included Devices': 'Smart Hub, 4 Smart Switches, 2 Motion Sensors, 1 Temperature Sensor',
            'Max Devices': 'Up to 100 connected devices',
            'Security': 'AES-128 encryption, regular security updates',
            'Warranty': '2 years manufacturer warranty'
        },
        reviews: [
            {
                name: 'Mike R.',
                rating: 5,
                date: '2025-01-18',
                text: 'Installation was surprisingly easy! Everything works perfectly with Alexa. Love being able to control all my lights and check sensors from anywhere.'
            },
            {
                name: 'David L.',
                rating: 5,
                date: '2025-01-10',
                text: 'Great starter system for smart home automation. The app is user-friendly and the energy savings are already noticeable on my electricity bill.'
            },
            {
                name: 'Tom K.',
                rating: 4,
                date: '2025-01-03',
                text: 'Solid system with good features. Had a small issue with one sensor but customer support was very helpful and sent a replacement quickly.'
            }
        ],
        relatedProducts: ['organic-skincare-set', 'designer-handbag']
    }
};

// Initialize product page
document.addEventListener('DOMContentLoaded', function() {
    const productId = AuraTie.getUrlParameter('id');
    
    if (productId && productDetails[productId]) {
        loadProduct(productDetails[productId]);
        loadRelatedProducts(productDetails[productId]);
    } else {
        // Handle product not found
        document.getElementById('productContent').innerHTML = `
            <div class="product-not-found">
                <h2>Product Not Found</h2>
                <p>The product you're looking for doesn't exist or has been discontinued.</p>
                <a href="index.html" class="btn-primary">Return to Home</a>
            </div>
        `;
    }
});

function loadProduct(product) {
    // Update page title
    document.title = `${product.title} - AuraTie`;
    document.getElementById('productTitle').textContent = `${product.title} - AuraTie`;
    
    // Update breadcrumb
    document.getElementById('breadcrumbCategory').textContent = AuraTie.getCategoryDisplayName(product.category);
    
    // Load product content
    const productContent = document.getElementById('productContent');
    productContent.innerHTML = `
        <div class="product-images">
            <div class="main-image-container">
                <img src="${product.images[0]}" alt="${product.title}" class="main-product-image" id="mainProductImage">
                <div class="image-badge">${AuraTie.getCategoryDisplayName(product.category)}</div>
            </div>
            <div class="thumbnail-images">
                ${product.images.map((image, index) => `
                    <img src="${image}" alt="${product.title}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${image}', ${index})">
                `).join('')}
            </div>
        </div>

        <div class="product-info">
            <div class="product-category">${AuraTie.getCategoryDisplayName(product.category)}</div>
            <h1 class="product-title">${product.title}</h1>
            
            <div class="product-rating">
                <div class="stars">${generateStarRating(product.rating)}</div>
                <span class="rating-text">${product.rating} (${product.reviewCount} reviews)</span>
            </div>
            
            <div class="product-price">
                ${product.price}
                ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
            </div>
            
            <p class="product-description">${product.description}</p>
            
            <div class="product-features">
                <h3>Key Features</h3>
                <ul class="features-list">
                    ${product.features.map(feature => `
                        <li><i class="fas fa-check"></i> ${feature}</li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="product-actions">
                <div class="quantity-selector">
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" class="quantity-input" value="1" min="1" max="10">
                </div>
                
                <div class="action-buttons">
                    <button class="btn-primary" onclick="addToCart('${product.id}')">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                    <a href="#" class="btn-secondary">
                        <i class="fas fa-external-link-alt"></i>
                        Visit Store
                    </a>
                    <button class="wishlist-btn" onclick="toggleWishlist('${product.id}')" title="Add to Wishlist">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            
            <div class="product-specs">
                <h3>Specifications</h3>
                <table class="specs-table">
                    ${Object.entries(product.specifications).map(([key, value]) => `
                        <tr>
                            <td>${key}</td>
                            <td>${value}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>
            
            <div class="product-share">
                <h4>Share This Product</h4>
                <div class="share-buttons">
                    <button class="share-btn facebook" onclick="shareProduct('facebook')" title="Share on Facebook">
                        <i class="fab fa-facebook-f"></i>
                    </button>
                    <button class="share-btn twitter" onclick="shareProduct('twitter')" title="Share on Twitter">
                        <i class="fab fa-twitter"></i>
                    </button>
                    <button class="share-btn pinterest" onclick="shareProduct('pinterest')" title="Share on Pinterest">
                        <i class="fab fa-pinterest"></i>
                    </button>
                    <button class="share-btn whatsapp" onclick="shareProduct('whatsapp')" title="Share on WhatsApp">
                        <i class="fab fa-whatsapp"></i>
                    </button>
                </div>
            </div>
            
            <div class="product-reviews">
                <div class="reviews-header">
                    <h3>Customer Reviews</h3>
                    <div class="reviews-summary">
                        <div class="average-rating">${product.rating}</div>
                        <div class="rating-breakdown">
                            <div class="stars">${generateStarRating(product.rating)}</div>
                            <div>Based on ${product.reviewCount} reviews</div>
                        </div>
                    </div>
                </div>
                
                <div class="reviews-list">
                    ${product.reviews.map(review => `
                        <div class="review-item">
                            <div class="review-header">
                                <div class="reviewer-info">
                                    <span class="reviewer-name">${review.name}</span>
                                    <span class="review-date">${formatDate(review.date)}</span>
                                </div>
                                <div class="review-rating">${generateStarRating(review.rating)}</div>
                            </div>
                            <p class="review-text">${review.text}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function loadRelatedProducts(currentProduct) {
    const relatedContainer = document.getElementById('relatedProducts');
    
    // Get related products or products from same category
    let relatedProducts = [];
    
    if (currentProduct.relatedProducts && currentProduct.relatedProducts.length > 0) {
        relatedProducts = AuraTie.products.filter(product => 
            currentProduct.relatedProducts.includes(product.id)
        );
    }
    
    // If no related products, get products from same category
    if (relatedProducts.length === 0) {
        relatedProducts = AuraTie.products
            .filter(product => product.category === currentProduct.category && product.id !== currentProduct.id)
            .slice(0, 3);
    }
    
    // If still no products, get random products
    if (relatedProducts.length === 0) {
        relatedProducts = AuraTie.products
            .filter(product => product.id !== currentProduct.id)
            .slice(0, 3);
    }
    
    relatedContainer.innerHTML = relatedProducts.map(product => `
        <a href="product.html?id=${product.id}" class="related-product-card">
            <img src="${product.image}" alt="${product.title}" class="related-product-image" loading="lazy">
            <div class="related-product-info">
                <h4 class="related-product-title">${product.title}</h4>
                <div class="related-product-price">${product.price}</div>
                <div class="related-product-rating">${generateStarRating(product.rating)}</div>
            </div>
        </a>
    `).join('');
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

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function changeMainImage(imageSrc, index) {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Update main image
    mainImage.src = imageSrc;
    
    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function addToCart(productId) {
    const quantity = document.getElementById('quantity').value;
    const button = event.target;
    const originalText = button.innerHTML;
    
    // Show loading state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        showMessage('Product added to cart successfully!', 'success');
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
        
        // Update cart count (if you have a cart counter)
        updateCartCount();
    }, 1000);
}

function toggleWishlist(productId) {
    const button = event.target.closest('.wishlist-btn');
    const isActive = button.classList.contains('active');
    
    button.classList.toggle('active');
    
    if (isActive) {
        showMessage('Removed from wishlist', 'info');
        button.querySelector('i').className = 'fas fa-heart';
    } else {
        showMessage('Added to wishlist', 'success');
        button.querySelector('i').className = 'fas fa-heart';
    }
}

function shareProduct(platform) {
    const url = window.location.href;
    const title = document.querySelector('.product-title').textContent;
    const image = document.getElementById('mainProductImage').src;
    
    let shareUrl = '';
    
    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
            break;
        case 'pinterest':
            shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(image)}&description=${encodeURIComponent(title)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

function showMessage(text, type = 'info') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        ${text}
    `;
    
    // Insert message at top of product info
    const productInfo = document.querySelector('.product-info');
    productInfo.insertBefore(message, productInfo.firstChild);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 3000);
}

function updateCartCount() {
    // This would typically update a cart counter in the header
    // For now, just a placeholder function
    console.log('Cart updated');
}

// Add to global scope for onclick handlers
window.changeMainImage = changeMainImage;
window.addToCart = addToCart;
window.toggleWishlist = toggleWishlist;
window.shareProduct = shareProduct;
