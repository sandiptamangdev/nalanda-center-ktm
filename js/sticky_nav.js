function stickyNav() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const headerHeight = header.offsetHeight;
    let ticking = false;
    window.addEventListener('scroll', () => {
        if(!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > headerHeight) {
                    nav.classList.add("sticky");
                } else {
                    nav.classList.remove('sticky');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    stickyNav();
});




