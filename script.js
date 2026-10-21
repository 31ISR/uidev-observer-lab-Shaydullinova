const cards = document.querySelectorAll(".animate-on-scroll, .service-card, .fade-in, .slide-up, .slide-right, .slide-left, .stagger-item, .scale-up");
const progressBar = document.querySelector(".scroll-progress");
const sidebar = document.querySelector(".scroll-indicator");
const navLinks = document.querySelectorAll(".nav-links a");
const options = {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px"
};
const container = document.querySelector('.particles');
const recipeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = entry.target;

            if (target.classList.contains("stagger-item")) {
                const parentElement = entry.target.parentElement;
                const items = parentElement.querySelectorAll(".stagger-item");
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * 200);
                });
                items.forEach((item) => {
                    recipeObserver.unobserve(item);
                });
            } else {
                target.classList.add("animate");
                recipeObserver.unobserve(target);
            }
        };
    });
}, options);

cards.forEach((card) => {
    recipeObserver.observe(card);
});

for (let i = 0; i < 50; i++) {
    const flake = document.createElement("div");
    flake.classList.add("particle");
    flake.style.left = Math.random() * 100 + "%";
    flake.style.animationDelay = Math.random() * 8 + "s";
    flake.style.animationDuration = Math.random() * 6 + 6 + "s";
    container.appendChild(flake);
}

window.addEventListener("scroll", () => {
    if (progressBar) {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const percent = (scrollY / maxScroll) * 100;
        progressBar.style.width = `${percent}%`;
    };
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
        sidebar.style.background = "rgba(20, 20, 60, 1)";
    } else {
        sidebar.style.background = "rgba(20, 20, 60, 0.5)";
    }
});

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const id = link.getAttribute("href");
        console.log("Клик по ссылке на", id);
    });
});
 
function countUp(element, target, duration = 2000) {
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
        current += step;

        if(current>=target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}



