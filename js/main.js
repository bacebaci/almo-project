/* CAROUSEL */

$('.carousel-reinforcement-plans').carousel({
    interval: 2000
});

$('.carousel-formwork-plans').carousel({
    interval: 2000
});

/* LIGHTBOX 123  45 6   */

lightbox.option({
    'albumLabel': "",
    'wrapAround': true,
});

/* ANIMATIONS */
let observer = new IntersectionObserver((intersectionObserverEntry) => {
    intersectionObserverEntry.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            if (typeof entry.target.dataset.animationDelay != 'undefined') {
                let delay = entry.target.dataset.animationDelay;
                setTimeout(() => entry.target.classList.add('show'), delay);
            } else {
                entry.target.classList.add('show');
            }
        } else {
            entry.target.classList.remove('show');
        }
    });
});

let observer2 = new IntersectionObserver((intersectionObserverEntry) => {
    intersectionObserverEntry.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            if (typeof entry.target.dataset.animationDelay != 'undefined') {
                let delay = entry.target.dataset.animationDelay;
                setTimeout(() => entry.target.classList.add('show'), delay);
            } else {
                entry.target.classList.add('show');
            }
        } else {
            entry.target.classList.remove('show');
        }
    });
});

function createObservers() {
    let animationClasses = [
        '.left-animation-slide-in',
        '.left-animation-slide-in',
        '.right-animation-slide-in',
        '.bottom-animation-slide-in',
        '.animation-fade-in',
        '.animation-font-in',
        '.animation-right-slide-in-medium',
        '.animation-right-slide-in-small',
        '.animation-typewriter',
        '.animation-arrow'
    ];

    // Attach observers
    document.querySelectorAll(animationClasses.join(',')).forEach((element) => observer.observe(element));
}

function createObservers2() {
    let animationClassesAlways = [
        '.bottom-animation-slide-in-always',
        '.animation-typewriter',
        '.animation-arrow'
    ];

    // Attach observers
    document.querySelectorAll(animationClassesAlways.join(',')).forEach((element) => observer2.observe(element));
}

function removeObservers() {
    observer.disconnect();
}

// Create event listener
window.addEventListener("load", (event) => {
    if (window.innerWidth >= 1200) {
        createObservers();
    }

    createObservers2();
}, false);

window.addEventListener("resize", (event) => {
    if (window.innerWidth >= 1200) {
        createObservers();
    } else {
        removeObservers();
    }

}, false);
/* PARALLAX PLUGIN */

$('.parallax-window').parallax({
    naturalWidth: 1920,
    naturalHeight: 959,
});

$('.parallax-window-big').parallax({
    naturalWidth: 1705,
    naturalHeight: 1920,
});

/* MENU ACTIVE */

new ActiveMenuLink(".scroll-to", {
    activeClass: "navbar-active",
    headerHeight: 84,
});
