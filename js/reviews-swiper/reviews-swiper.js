// js/reviews-swiper/swiper.js
let reviewsSwiper = null;

export function initReviewsSwiper() {
    const el = document.querySelector('.reviews-swiper');

    if (!el || typeof Swiper === 'undefined') return;

    const slides = el.querySelectorAll('.swiper-slide');

    // Do not initialize until the slides actually exist.
    if (slides.length < 2) {
        console.warn(
            `Reviews Swiper: only ${slides.length} slide(s) found. Skipping initialization.`
        );
        return;
    }

    if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
        reviewsSwiper = null;
    }

    reviewsSwiper = new Swiper(el, {
        slidesPerView: 1,
        loop: true,
        speed: 200,

        grabCursor: true,
        allowTouchMove: true,

        threshold: 10,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        }
    });
}