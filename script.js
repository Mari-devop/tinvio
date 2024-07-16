// header.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.tp-header__hamburger');
    const mobileNav = document.querySelector('.tp-header__mobile-nav');
    const closeBtn = document.querySelector('.tp-header__mobile-close');
    const langButtons = document.querySelectorAll('.lang__button');
    const langDropdowns = document.querySelectorAll('.lang__dropdown');
    const langFlags = document.querySelectorAll('.lang__flag');

    hamburger.addEventListener('click', () => {
        mobileNav.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        mobileNav.style.display = 'none';
    });

    langButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const dropdown = langDropdowns[index];
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    });

    langFlags.forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.getAttribute('data-lang');
            const button = flag.closest('.tp-header__lang').querySelector('.lang__button');
            button.innerHTML = `${lang} <img src="./images/header-section/Vector.png" alt="arrow" class="lang__button-img"/>`;
            langDropdowns.forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        });
    });

    window.addEventListener('click', (e) => {
        if (!e.target.matches('.lang__button, .lang__button *')) {
            langDropdowns.forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
});



//best section
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tp-best__text-btn.tabs');
    const listItems = document.querySelectorAll('.tp-best__list-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabContent = tab.getAttribute('data-tab');

            listItems.forEach(item => {
                if (item.getAttribute('data-content') === tabContent) {
                    item.style.display = 'flex'; // Use 'flex' to keep the image and text aligned
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// slider section
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.tp-slider__image');
    const paginationItems = document.querySelectorAll('.tp-slider__pagination-item');
    let currentSlide = 0;

    function getImageSrc(baseName, width) {
        if (width <= 375) return `./images/slider-section/${baseName}375.png`;
        if (width <= 768) return `./images/slider-section/${baseName}768.png`;
        if (width <= 1024) return `./images/slider-section/${baseName}1024.png`;
        if (width <= 1440) return `./images/slider-section/${baseName}1440.png`;
        return `./images/slider-section/${baseName}1920.png`;
    }

    function updateSlideImages() {
        const width = window.innerWidth;
        const imageNames = ['cup', 'egg', 'milk', 'spoon'];
        
        slides.forEach((slide, index) => {
            slide.src = getImageSrc(imageNames[index], width);
        });
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        paginationItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    paginationItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    window.addEventListener('resize', updateSlideImages);

    updateSlideImages(); // Update images on load
    showSlide(currentSlide); // Show the first slide initially
});

