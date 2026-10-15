const cards = document.querySelectorAll(".animate-on-scroll, .service-card, .fade-in, .slide-up, .slide-right, .slide-left");
const items = document.querySelectorAll('.stager-item')
const options = {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px"
};

const recipeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, options);

cards.forEach((card) => {
    recipeObserver.observe(card);
});

items.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add('animate');
    }, index * 150);
});

for (let i = 0; i < 50; i++) {;
    flake.classList.add("particles");
    flake.style.left = Math.random() * 100 + "%";
    flake.style.
    container.appendChild(flake);
}


