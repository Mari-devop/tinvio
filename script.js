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
    const currentUrl = window.location.pathname;
    const navLinks = document.querySelectorAll('.tp-header__nav-item a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('#')[0];
        if (currentUrl.includes(linkHref)) {
            link.classList.add('active');
        }
    });

    if (currentUrl === '/' || currentUrl.endsWith('index.html')) {
        document.getElementById('home').classList.add('active');
    }
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

//slider section
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.tp-slider__pagination-item').length;

    const showSlide = (index) => {
        const texts = document.querySelectorAll('.tp-slider__text');
        const companies = document.querySelectorAll('.tp-slider__company');
        const mains = document.querySelectorAll('.tp-slider__main');
        const paginationItems = document.querySelectorAll('.tp-slider__pagination-item');
        
        texts.forEach((text) => text.classList.remove('active'));
        companies.forEach((company) => company.classList.remove('active'));
        mains.forEach((main) => main.classList.remove('active'));
        paginationItems.forEach((item) => {
            item.classList.remove('active');
            item.classList.add('inactive');
        });

        document.querySelector(`.tp-slider__text[data-slide="${index}"]`).classList.add('active');
        document.querySelector(`.tp-slider__company[data-slide="${index}"]`).classList.add('active');
        document.querySelector(`.tp-slider__main[data-slide="${index}"]`).classList.add('active');
        document.querySelector(`.tp-slider__pagination-item[data-slide="${index}"]`).classList.add('active');
        document.querySelector(`.tp-slider__pagination-item[data-slide="${index}"]`).classList.remove('inactive');
    };

    document.querySelectorAll('.tp-slider__pagination-item').forEach((item) => {
        item.addEventListener('click', () => {
            currentSlide = parseInt(item.getAttribute('data-slide'));
            showSlide(currentSlide);
        });
    });

    document.querySelector('.tp-slider__button-left').addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
        showSlide(currentSlide);
    });

    document.querySelector('.tp-slider__button-right').addEventListener('click', () => {
        currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});


//faq section
document.addEventListener('DOMContentLoaded', () => {
    const faqIcons = document.querySelectorAll('.tp-faq__icon');

    faqIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            // Prevent event bubbling up to parent elements
            event.stopPropagation();

            const question = icon.parentElement;
            const answerId = question.getAttribute('data-answer');
            const answer = document.getElementById(answerId);

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.textContent = '+';
            } else {
                answer.style.display = 'block';
                icon.textContent = '-';
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


//privite section
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tp-privacy__title-tab');
    const contents = document.querySelectorAll('.tp-privacy__content');

    const showTab = (tabId) => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            }
        });

        contents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabId) {
                content.classList.add('active');
            }
        });
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            showTab(tabId);
            history.replaceState(null, null, `#${tab.id}`);
        });
    });

    // Check if there's a hash in the URL and activate the corresponding tab
    const hash = window.location.hash.substring(1);
    if (hash) {
        const tab = document.querySelector(`.tp-privacy__title-tab#${hash}`);
        if (tab) {
            const tabId = tab.getAttribute('data-tab');
            showTab(tabId);
        }
    } else {
        // Initialize the first tab as active if no hash is present
        tabs[0].classList.add('active');
        contents[0].classList.add('active');
    }
});

