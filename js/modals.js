/**
 * Simple Modal Functions for Little Bird Toy Company
 * This file handles showing product details in popup windows (modals)
 * High School Level JavaScript - Uses modern let declarations and basic functions
 */

/**
 * Show product details in a modal popup
 * This function takes a product ID and displays all the product information
 * @param {number} productId - The ID of the product to show
 */
function showProductModal(productId) {
    // Find the product in the products array (defined in products.js)
    let product = products.find(function(p) { return p.id === productId; });

    // If product doesn't exist, stop here
    if (!product) return;

    // Fill in all the modal elements with product information
    document.getElementById('productModalTitle').textContent = product.name;
    document.getElementById('productModalName').textContent = product.name;
    document.getElementById('productModalImage').src = product.image;
    document.getElementById('productModalPrice').textContent = '$' + product.price;
    document.getElementById('productModalAge').textContent = product.age;
    document.getElementById('productModalDimensions').textContent = product.dimensions;
    document.getElementById('productModalDescription').textContent = product.description;

    // Store the product ID on the "Add to Cart" button so we know which product to add
    document.getElementById('addToCartBtn').setAttribute('data-product-id', productId);

    // Create and show the Bootstrap modal
    let modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

/**
 * Add a product to the shopping cart
 * This function handles when someone clicks "Add to Cart"
 * @param {number} productId - The ID of the product to add to cart
 */
function addToCart(productId) {
    // Find the product in the products array (defined in products.js)
    let product = products.find(function(p) { return p.id === productId; });

    // If product doesn't exist, stop here
    if (!product) return;

    // Close the product modal first
    let modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    if (modal) {
        modal.hide();
    }

    // Show a simple alert confirming the item was added
    // In a real store, this would add to a shopping cart database
    alert(product.name + ' has been added to your cart!');
}

/**
 * Set up the "Add to Cart" button when page loads
 * This function runs when the page is ready and adds click handling
 */
document.addEventListener('DOMContentLoaded', function() {
    // Find the "Add to Cart" button
    let addToCartBtn = document.getElementById('addToCartBtn');

    // If the button exists, add a click event listener
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // Get the product ID from the button's data attribute
            let productId = this.getAttribute('data-product-id');

            // If we have a product ID, add it to cart
            if (productId) {
                addToCart(parseInt(productId)); // Convert string to number
            }
        });
    }
});
