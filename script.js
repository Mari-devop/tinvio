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
                    item.style.display = 'flex'; 
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

    updateSlideImages(); 
    showSlide(currentSlide); 
});

//faq section
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.tp-faq__question');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answerId = item.getAttribute('data-answer');
            const answer = document.getElementById(answerId);

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                item.querySelector('.tp-faq__icon').textContent = '+';
            } else {
                answer.style.display = 'block';
                item.querySelector('.tp-faq__icon').textContent = '-';
            }
        });
    });
});


//popup
document.addEventListener('DOMContentLoaded', function () {
    const openPopup = document.getElementById('openPopup');
    const closePopup = document.getElementById('closePopup');
    const popupForm = document.getElementById('popupForm');
    const cheerForm = document.getElementById('cheerForm');
    const closeCheer = document.getElementById('closeCheer');
    const closeCheerButton = document.getElementById('closeCheerButton');
    const form = document.getElementById('popupFormElement');
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');

    openPopup.addEventListener('click', function () {
        popupForm.classList.remove('hidden');
    });

    closePopup.addEventListener('click', function () {
        popupForm.classList.add('hidden');
    });

    closeCheer.addEventListener('click', function () {
        cheerForm.classList.add('hidden');
    });

    closeCheerButton.addEventListener('click', function () {
        cheerForm.classList.add('hidden');
    });

    window.addEventListener('click', function (e) {
        if (e.target === popupForm) {
            popupForm.classList.add('hidden');
        }
        if (e.target === cheerForm) {
            cheerForm.classList.add('hidden');
        }
    });

    form.addEventListener('submit', function (e) {
        const phonePattern = /^\d{2}\s\d{4}\s\d{4}$/;
        if (!phonePattern.test(phoneInput.value) || /[a-zA-Z]/.test(phoneInput.value)) {
            phoneError.style.display = 'block';
            e.preventDefault();
        } else {
            phoneError.style.display = 'none';
            e.preventDefault(); 
            popupForm.classList.add('hidden');
            cheerForm.classList.remove('hidden');
        }
    });

    phoneInput.addEventListener('input', function () {
        phoneError.style.display = 'none';
    });
});



