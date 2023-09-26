document.addEventListener('DOMContentLoaded', (event) => {
    const carets = document.querySelectorAll('.caret');
    const subSections = document.querySelectorAll('.sub-section');
    const menuIcon = document.getElementById('menu-icon');
    const leftSidebar = document.getElementById('left-sidebar');
    const backgroundLayer = document.getElementById('background-layer');

    // Initialize sub-sections to be visible
    subSections.forEach(subSection => {
        subSection.style.display = 'block';
    });

    // Initialize carets to be downward
    carets.forEach(caret => {
        caret.innerHTML = '&#9660;'; // Downwards arrow
    });

    carets.forEach(caret => {
        caret.addEventListener('click', function () {
            const subSection = this.parentElement.nextElementSibling;
            if (subSection.style.display === 'none' || subSection.style.display === '') {
                subSection.style.display = 'block';
                this.innerHTML = '&#9660;'; // Downwards arrow
            } else {
                subSection.style.display = 'none';
                this.innerHTML = '&#9654;'; // Rightwards arrow
            }
        });
    });

    menuIcon.addEventListener('click', () => {
        if (leftSidebar.style.display === 'none' || leftSidebar.style.display === '') {
            leftSidebar.style.display = 'block';
            backgroundLayer.style.display = 'block';
        } else {
            leftSidebar.style.display = 'none';
            backgroundLayer.style.display = 'none';
        }
    });

    // Function to handle responsiveness
    function handleResponsiveness() {
        const screenWidth = window.innerWidth;

        if (screenWidth > 768) {
            leftSidebar.style.display = 'block';
            backgroundLayer.style.display = 'block';
            menuIcon.style.display = 'none';
        } else {
            leftSidebar.style.display = 'none';
            backgroundLayer.style.display = 'none';
            menuIcon.style.display = 'block';
        }
    }

    // Listen for window resize events
    window.addEventListener('resize', handleResponsiveness);

    // Call the function initially to set the correct state
    handleResponsiveness();

/* 这是一个JavaScript注释，用于标识右边的主体部分的脚本开始 */



});
