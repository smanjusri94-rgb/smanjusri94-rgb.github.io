// Smooth scroll behavior enhancement
document.addEventListener('DOMContentLoaded', function() {
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Add smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: prefersReducedMotion ? 'auto' : 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Text Flip Animation for Portfolio
    // Order: GALLERY → ARCHIVE → CANVAS → STUDIO
    const flipWords = ["GALLERY", "ARCHIVE", "CANVAS", "STUDIO"];
    const flipTextElement = document.getElementById('flip-text');
    let currentFlipIndex = 0; // Start with "GALLERY"
    
    if (flipTextElement) {
        function flipToNextWord() {
            // Remove previous animation classes
            flipTextElement.classList.remove('flip-out', 'flip-in');
            
            // Trigger reflow
            void flipTextElement.offsetWidth;
            
            // Add flip-out animation
            flipTextElement.classList.add('flip-out');
            
            // After flip-out completes, change text and flip-in
            setTimeout(() => {
                // Move to next word in sequence
                currentFlipIndex = (currentFlipIndex + 1) % flipWords.length;
                flipTextElement.textContent = flipWords[currentFlipIndex];
                flipTextElement.classList.remove('flip-out');
                flipTextElement.classList.add('flip-in');
            }, 175); // Half of animation duration (0.35s / 2)
        }
        
        // Start the flip animation after initial load
        setTimeout(() => {
            setInterval(flipToNextWord, 3000); // Change word every 3 seconds
        }, 1000); // Wait 1 second before starting
    }

    // Back to Top Button functionality
    const backToTopButton = document.querySelector('#back-to-top');
    if (backToTopButton) {
        // Function to check scroll position and show/hide button
        function toggleBackToTopButton() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            // Show button after scrolling - lower threshold on mobile
            const threshold = window.innerWidth <= 768 ? 150 : 300;
            if (scrollTop > threshold) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }
        
        // Check on scroll
        window.addEventListener('scroll', toggleBackToTopButton, { passive: true });
        
        // Check on load - ensure it runs after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                toggleBackToTopButton();
                // Force a re-check after a brief delay
                setTimeout(toggleBackToTopButton, 100);
            });
        } else {
            toggleBackToTopButton();
            setTimeout(toggleBackToTopButton, 100);
        }
        
        // Check on resize (for mobile orientation changes)
        window.addEventListener('resize', toggleBackToTopButton, { passive: true });
        
        // Force check on mobile after multiple delays to ensure visibility
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                toggleBackToTopButton();
            }, 200);
            setTimeout(() => {
                toggleBackToTopButton();
            }, 500);
            setTimeout(() => {
                toggleBackToTopButton();
            }, 1000);
        }

        // Scroll to top on click
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    }

    // Randomize project masonry items order (once per page load)
    const masonry = document.querySelector('[data-projects-masonry="true"]');
    if (masonry) {
        const items = Array.from(masonry.children);
        // Fisher–Yates shuffle
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
        // Re-append in new order
        items.forEach(el => masonry.appendChild(el));
    }
});

