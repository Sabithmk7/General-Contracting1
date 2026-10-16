// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Image Skeleton Loader for Project Section
function initProjectImageSkeletons() {
    const projectContainers = document.querySelectorAll('.project-card .carousel-slide, .project-card .project-image');
    
    projectContainers.forEach(container => {
        const img = container.querySelector('img');
        if (!img) return;

        const handleImageLoad = () => {
            img.classList.add('is-loaded');
            container.classList.remove('skeleton-loading');
        };

        if (img.complete && img.naturalWidth !== 0) {
            handleImageLoad();
        } else {
            container.classList.add('skeleton-loading');
            img.addEventListener('load', handleImageLoad, { once: true });
            img.addEventListener('error', () => {
                container.classList.remove('skeleton-loading');
            }, { once: true });
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectImageSkeletons);
} else {
    initProjectImageSkeletons();
}

