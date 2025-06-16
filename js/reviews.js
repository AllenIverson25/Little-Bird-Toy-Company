/**
 * Customer Reviews JavaScript for Little Bird Toy Company
 * This file handles displaying and managing customer reviews
 * High School Level JavaScript - Uses simple let declarations and basic functions
 */

// Customer Reviews Data Array - Contains reviews from our customers
let reviews = [
    {
        name: "Sarah Johnson",
        review: "Beautiful craftsmanship! My daughter loves her wooden train set. It's built to last and so much better than plastic toys.",
        rating: 5
    },
    {
        name: "Mike Chen",
        review: "Excellent quality and fast shipping. The wooden airplane is perfect for my toddler - safe and engaging.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        review: "Love supporting this local business! The block set has provided hours of creative play for my kids.",
        rating: 5
    },
    {
        name: "David Thompson",
        review: "Outstanding customer service and beautiful toys. The wooden boat is a hit during bath time!",
        rating: 4
    },
    {
        name: "Lisa Park",
        review: "These toys are worth every penny. Sustainable, safe, and my children absolutely love them.",
        rating: 5
    },
    {
        name: "James Wilson",
        review: "High-quality wooden toys that will last for generations. Great investment for any family.",
        rating: 5
    }
];

// Function to generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="bi bi-star-fill"></i>';
        } else {
            stars += '<i class="bi bi-star"></i>';
        }
    }
    return stars;
}

// Function to display customer reviews
function displayReviews() {
    const reviewsContainer = document.getElementById('customer-reviews');
    if (!reviewsContainer) return;

    // Show first 3 reviews on home page, all on other pages
    const reviewsToShow = window.location.pathname.includes('home.html') || window.location.pathname === '/' ? reviews.slice(0, 3) : reviews;
    
    reviewsToShow.forEach(review => {
        const reviewCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card review-card h-100 shadow-sm">
                    <div class="card-body">
                        <div class="star-rating mb-3">
                            ${generateStars(review.rating)}
                        </div>
                        <p class="review-text">"${review.review}"</p>
                        <div class="reviewer-name mt-auto">
                            - ${review.name}
                        </div>
                    </div>
                </div>
            </div>
        `;
        reviewsContainer.innerHTML += reviewCard;
    });
}

// Add stagger animation to review cards - DISABLED
function staggerReviewCards() {
    // Disabled animations to prevent bugs
    let reviewCards = document.querySelectorAll('.review-card');
    for (let i = 0; i < reviewCards.length; i++) {
        reviewCards[i].style.animationDelay = '0s';
    }
}

// Initialize reviews functionality
document.addEventListener('DOMContentLoaded', function() {
    displayReviews();

    // Disabled animations to prevent bugs
    staggerReviewCards();
});
