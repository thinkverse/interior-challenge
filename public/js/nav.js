window.addEventListener('DOMContentLoaded', event => {
    const documentBody = document.querySelector('body'),
        navToggle = document.querySelector('#mobile-toggle');
    let navIsOpen = false;

    function toggleNavigation() {
        if (navIsOpen) {
            documentBody
                .classList
                .toggle('nav--open');

            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.children[0].textContent = 'menu';

            return navIsOpen = !navIsOpen
        }

        documentBody
            .classList
            .toggle('nav--open');

        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.children[0].textContent = 'close';

        return navIsOpen = !navIsOpen
    }

    navToggle.onclick = toggleNavigation;
});