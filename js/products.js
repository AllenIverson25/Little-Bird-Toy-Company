// Product functionality for Little Bird Toy Company

// Product Data Array
const products = [
    {
        id: 1,
        name: "Wooden Airplane",
        price: 24.99,
        age: "Toddlers",
        image: "imgs/plane1.jpg",
        images: ["imgs/plane1.jpg", "imgs/plane2.jpg", "imgs/plane3.jpg"],
        description: "Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller.",
        dimensions: "3.5\"H x 7\"L x 7\"W"
    },
    {
        id: 2,
        name: "Wooden Train Set",
        price: 89.99,
        age: "3+",
        image: "imgs/train1.jpg",
        images: ["imgs/train1.jpg", "imgs/train2.jpg", "imgs/train3.jpg", "imgs/train4.jpg", "imgs/train5.jpg", "imgs/train6.jpg", "imgs/train7.jpg"],
        description: "Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood.",
        dimensions: "84cm L x 11cm H x 13cm W"
    },
    {
        id: 3,
        name: "Wooden Boat",
        price: 32.99,
        age: "All ages",
        image: "imgs/boat1.jpg",
        images: ["imgs/boat1.jpg", "imgs/boat2.jpg"],
        description: "Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety.",
        dimensions: "10.5\"W x 3.5\"H"
    },
    {
        id: 4,
        name: "Wooden Block Set",
        price: 45.99,
        age: "3+",
        image: "imgs/block1.jpg",
        images: ["imgs/block1.jpg", "imgs/block2.jpg", "imgs/block3.jpg", "imgs/block4.jpg", "imgs/block5.jpg"],
        description: "Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks.",
        dimensions: "13\" L x 12\" W x 2\" H"
    },
    {
        id: 5,
        name: "Wooden Car",
        price: 19.99,
        age: "All ages",
        image: "imgs/car1.jpg",
        images: ["imgs/car1.jpg", "imgs/car2.jpg", "imgs/car3.jpg", "imgs/car4.jpg"],
        description: "This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish.",
        dimensions: "6\"L x 3\"W x 2.5\"H"
    }
];

// Function to display featured products on home page
function displayFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    if (!featuredContainer) return;

    // Show first 3 products as featured
    const featuredProducts = products.slice(0, 3);
    
    featuredProducts.forEach(product => {
        const productCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card product-card h-100 shadow-sm">
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title">${product.name}</h5>
                            <span class="product-age">${product.age}</span>
                        </div>
                        <p class="card-text flex-grow-1">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <span class="product-price">$${product.price}</span>
                            <button class="btn btn-primary btn-sm" onclick="viewProduct(${product.id})">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        featuredContainer.innerHTML += productCard;
    });
}

// Function to display all products on products page
function displayAllProducts() {
    const productsContainer = document.getElementById('all-products');
    if (!productsContainer) return;

    products.forEach(product => {
        const productCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card product-card h-100 shadow-sm">
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.name}" id="product-image-${product.id}">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title">${product.name}</h5>
                            <span class="product-age">${product.age}</span>
                        </div>
                        <p class="card-text flex-grow-1" id="product-desc-${product.id}">${product.description}</p>
                        <div class="mb-3">
                            <small class="text-muted">Dimensions: ${product.dimensions}</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <span class="product-price">$${product.price}</span>
                            <div class="btn-group">
                                <button class="btn btn-outline-primary btn-sm" onclick="changeProductImage(${product.id})">
                                    <i class="bi bi-images"></i> View More
                                </button>
                                <button class="btn btn-primary btn-sm" onclick="viewProduct(${product.id})">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += productCard;
    });
}

// Product variation feature - cycle through product images
let currentImageIndex = {};

function changeProductImage(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.images) return;

    // Initialize index if not exists
    if (!currentImageIndex[productId]) {
        currentImageIndex[productId] = 0;
    }

    // Move to next image
    currentImageIndex[productId] = (currentImageIndex[productId] + 1) % product.images.length;
    
    // Update the image
    const imageElement = document.getElementById(`product-image-${productId}`);
    if (imageElement) {
        imageElement.src = product.images[currentImageIndex[productId]];
        
        // Add a subtle animation
        imageElement.style.opacity = '0.7';
        setTimeout(() => {
            imageElement.style.opacity = '1';
        }, 150);
    }
}

// View product details (modal)
function viewProduct(productId) {
    var product = products.find(function(p) { return p.id === productId; });
    if (!product) return;

    if (typeof showProductModal === 'function') {
        showProductModal(productId);
    } else {
        alert(product.name + '\n\nPrice: $' + product.price + '\nAge: ' + product.age + '\nDimensions: ' + product.dimensions + '\n\n' + product.description);
    }
}

// Add stagger animation to product cards
function staggerProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
}

// Initialize product functionality
document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedProducts();
    displayAllProducts();
    
    // Initialize animations
    setTimeout(() => {
        staggerProductCards();
    }, 500);
});
