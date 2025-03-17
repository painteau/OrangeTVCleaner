(function () {
    'use strict';

    function hideSpecificLi() {
        const allListItems = document.querySelectorAll('li');
        allListItems.forEach(function (listItem) {
            if (listItem.querySelector('a img[src*="icone-50x50-buy-white.png"]')) {
                listItem.style.display = 'none';
            }
        });
    }

    function observeDOMChanges() {
        const observer = new MutationObserver(() => {
            hideSpecificLi();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function init() {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            hideSpecificLi();
            observeDOMChanges();
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                hideSpecificLi();
                observeDOMChanges();
            });
        }
    }

    init();
})();
