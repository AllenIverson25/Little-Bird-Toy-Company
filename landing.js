// Landing page functionality for Little Bird Toy Company

document.addEventListener('DOMContentLoaded', function() {
    let skipBtn = document.getElementById('skipBtn');
    let landingPage = document.getElementById('landingPage');
    let landingLogo = document.getElementById('landingLogo');
    let countdown = document.getElementById('countdown');
    let progressFill = document.getElementById('progressFill');
    
    let timeLeft = 5;
    let autoTransition = true;
    
    // Countdown timer
    let timer = setInterval(() => {
        if (!autoTransition) return;
        
        timeLeft--;
        countdown.textContent = timeLeft > 0 ? `Starting in ${timeLeft} seconds...` : 'Starting now...';
        progressFill.style.width = ((5 - timeLeft) / 5) * 100 + '%';
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            startTransition();
        }
    }, 1000);
    
    // Skip button
    skipBtn.addEventListener('click', function() {
        autoTransition = false;
        clearInterval(timer);
        window.location.href = 'home.html';
    });
    
    function startTransition() {
        // Hide countdown and progress immediately
        countdown.style.display = 'none';
        document.querySelector('.progress-bar').style.display = 'none';
        
        // Move logo directly to navbar position
        landingLogo.classList.add('move-to-navbar');
        
        // Fade out page content after logo starts moving
        setTimeout(() => {
            landingPage.classList.add('fade-out');
        }, 800);
        
        // Navigate to home page after animation completes
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000);
    }
});
