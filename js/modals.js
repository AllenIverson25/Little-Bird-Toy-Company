/**
 * Simple Modal Functions for Little Bird Toy Company
 */

// Show product details modal
function showProductModal(productId) {
    var product = products.find(function(p) { return p.id === productId; });
    if (!product) return;
    
    document.getElementById('productModalTitle').textContent = product.name;
    document.getElementById('productModalName').textContent = product.name;
    document.getElementById('productModalImage').src = product.image;
    document.getElementById('productModalPrice').textContent = '$' + product.price;
    document.getElementById('productModalAge').textContent = product.age;
    document.getElementById('productModalDimensions').textContent = product.dimensions;
    document.getElementById('productModalDescription').textContent = product.description;
    
    // Store product ID for add to cart
    document.getElementById('addToCartBtn').setAttribute('data-product-id', productId);
    
    var modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

// Add to cart function
function addToCart(productId) {
    var product = products.find(function(p) { return p.id === productId; });
    if (!product) return;
    
    // Close product modal first
    var modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    if (modal) {
        modal.hide();
    }
    
    // Simple alert for now
    alert(product.name + ' has been added to your cart!');
}

// Handle add to cart button click
document.addEventListener('DOMContentLoaded', function() {
    var addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            var productId = this.getAttribute('data-product-id');
            if (productId) {
                addToCart(parseInt(productId));
            }
        });
    }
});
