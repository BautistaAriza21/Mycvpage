document.addEventListener('DOMContentLoaded', function() {
    // Check if elements exist before proceeding
    const slides = document.querySelectorAll('.carousel-slide');
    const slidesContainer = document.querySelector('.carousel-slides');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    // Validate if all required elements are present
    if (!slides.length || !slidesContainer || !prevBtn || !nextBtn) {
        console.error('Missing carousel elements');
        return;
    }

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Add transition for smooth sliding
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';

    function showSlide(index) {
        // Ensure index is within bounds
        if (index < 0 || index >= totalSlides) return;
        
        // Hide all slides first
        slides.forEach(slide => {
            slide.style.display = 'none';
            slide.style.opacity = '0';
        });

        // Show only the current slide
        slides[index].style.display = 'block';
        slides[index].style.opacity = '1';

        currentIndex = index;
    }

    function updateSlideVisibility() {
        // Update ARIA attributes for accessibility
        slides.forEach((slide, index) => {
            slide.setAttribute('aria-hidden', index !== currentIndex);
        });
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        showSlide(currentIndex);
        updateSlideVisibility();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
        updateSlideVisibility();
    });

    // Auto-slide functionality with pause on hover
    let autoSlideInterval;

    function startAutoSlide() {
        autoSlideInterval = setInterval(function() {
            nextBtn.click();
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Pause auto-slide when hovering over carousel
    slidesContainer.addEventListener('mouseenter', stopAutoSlide);
    slidesContainer.addEventListener('mouseleave', startAutoSlide);

    // Initialize carousel
    showSlide(currentIndex);
    updateSlideVisibility();
    startAutoSlide();
});
