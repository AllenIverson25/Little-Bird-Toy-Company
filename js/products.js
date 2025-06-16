/**
 * Products JavaScript for Little Bird Toy Company
 * This file contains all product data and functions for displaying products
 * High School Level JavaScript - Uses modern let declarations and basic functions
 */

// Product Data Array - Contains all our toy products with their information
// Each product has: id, name, price, age group, images, description, and dimensions
let products = [
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

/**
 * Display featured products on the home page
 * This function shows the first 3 products in a special featured section
 */
function displayFeaturedProducts() {
    // Find the container where featured products should go
    let featuredContainer = document.getElementById('featured-products');

    // If container doesn't exist, stop here
    if (!featuredContainer) return;

    // Get the first 3 products to show as featured
    let featuredProducts = products.slice(0, 3);

    // Loop through each featured product and create HTML for it
    for (let i = 0; i < featuredProducts.length; i++) {
        let product = featuredProducts[i];

        // Create HTML card for this product
        let productCard = '<div class="col-lg-4 col-md-6 mb-4">' +
            '<div class="card product-card h-100 shadow-sm">' +
                '<img src="' + product.image + '" class="card-img-top product-image" alt="' + product.name + '">' +
                '<div class="card-body d-flex flex-column">' +
                    '<div class="d-flex justify-content-between align-items-start mb-2">' +
                        '<h5 class="card-title">' + product.name + '</h5>' +
                        '<span class="product-age">' + product.age + '</span>' +
                    '</div>' +
                    '<p class="card-text flex-grow-1">' + product.description + '</p>' +
                    '<div class="d-flex justify-content-between align-items-center mt-auto">' +
                        '<span class="product-price">$' + product.price + '</span>' +
                        '<button class="btn btn-primary btn-sm" onclick="viewProduct(' + product.id + ')">' +
                            'Learn More' +
                        '</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

        // Add this product card to the container
        featuredContainer.innerHTML += productCard;
    }
}

/**
 * Display all products on the products page
 * This function shows every product in our catalog with full details
 */
function displayAllProducts() {
    // Find the container where all products should go
    let productsContainer = document.getElementById('all-products');

    // If container doesn't exist, stop here
    if (!productsContainer) return;

    // Loop through every product in our catalog
    for (let i = 0; i < products.length; i++) {
        let product = products[i];

        // Create HTML card for this product (more detailed than featured products)
        let productCard = '<div class="col-lg-4 col-md-6 mb-4">' +
            '<div class="card product-card h-100 shadow-sm">' +
                '<img src="' + product.image + '" class="card-img-top product-image" alt="' + product.name + '" id="product-image-' + product.id + '">' +
                '<div class="card-body d-flex flex-column">' +
                    '<div class="d-flex justify-content-between align-items-start mb-2">' +
                        '<h5 class="card-title">' + product.name + '</h5>' +
                        '<span class="product-age">' + product.age + '</span>' +
                    '</div>' +
                    '<p class="card-text flex-grow-1" id="product-desc-' + product.id + '">' + product.description + '</p>' +
                    '<div class="mb-3">' +
                        '<small class="text-muted">Dimensions: ' + product.dimensions + '</small>' +
                    '</div>' +
                    '<div class="d-flex justify-content-between align-items-center mt-auto">' +
                        '<span class="product-price">$' + product.price + '</span>' +
                        '<div class="btn-group">' +
                            '<button class="btn btn-outline-primary btn-sm" onclick="changeProductImage(' + product.id + ')">' +
                                '<i class="bi bi-images"></i> View More' +
                            '</button>' +
                            '<button class="btn btn-primary btn-sm" onclick="viewProduct(' + product.id + ')">' +
                                'Details' +
                            '</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

        // Add this product card to the container
        productsContainer.innerHTML += productCard;
    }
}

/**
 * Product image cycling feature
 * This allows users to see different images of the same product
 */

// Keep track of which image is currently showing for each product
let currentImageIndex = {};

/**
 * Change to the next image for a specific product
 * This function cycles through all available images for a product
 * @param {number} productId - The ID of the product to change image for
 */
function changeProductImage(productId) {
    // Find the product in our array
    let product = products.find(function(p) { return p.id === productId; });

    // If product doesn't exist or has no extra images, stop here
    if (!product || !product.images) return;

    // If this is the first time clicking for this product, start at image 0
    if (!currentImageIndex[productId]) {
        currentImageIndex[productId] = 0;
    }

    // Move to the next image (loop back to 0 if we reach the end)
    currentImageIndex[productId] = (currentImageIndex[productId] + 1) % product.images.length;

    // Find the image element on the page and update it
    let imageElement = document.getElementById('product-image-' + productId);
    if (imageElement) {
        // Change to the new image
        imageElement.src = product.images[currentImageIndex[productId]];

        // Add a subtle fade effect for smooth transition
        imageElement.style.opacity = '0.7';
        setTimeout(function() {
            imageElement.style.opacity = '1';
        }, 150); // Wait 150 milliseconds then fade back in
    }
}

/**
 * View detailed information about a product
 * This function shows product details in a modal popup
 * @param {number} productId - The ID of the product to view
 */
function viewProduct(productId) {
    // Find the product in our array
    let product = products.find(function(p) { return p.id === productId; });

    // If product doesn't exist, stop here
    if (!product) return;

    // If modal system is available, use it (preferred)
    if (typeof showProductModal === 'function') {
        showProductModal(productId);
    } else {
        // Fallback to simple alert if modal system isn't loaded
        alert(product.name + '\n\nPrice: $' + product.price + '\nAge: ' + product.age + '\nDimensions: ' + product.dimensions + '\n\n' + product.description);
    }
}

/**
 * Add stagger animation to product cards - DISABLED
 * This function was used to animate product cards but is disabled to prevent bugs
 */
function staggerProductCards() {
    // Find all product cards on the page
    let productCards = document.querySelectorAll('.product-card');

    // Disable animations to prevent visual bugs
    for (let i = 0; i < productCards.length; i++) {
        productCards[i].style.animationDelay = '0s';
    }
}

/**
 * Initialize all product functionality when page loads
 * This is the main function that starts everything
 */
document.addEventListener('DOMContentLoaded', function() {
    // Make products array available globally for other files
    window.products = products;

    // Display products on the appropriate pages
    displayFeaturedProducts();  // Show featured products on home page
    displayAllProducts();       // Show all products on products page

    // Set up animations (currently disabled)
    staggerProductCards();
});
