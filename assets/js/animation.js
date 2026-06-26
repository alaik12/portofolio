/* ==========================================================
   PORTFOLIO WEBSITE
   File : animation.js
   Desc : Animation & Intersection Observer
========================================================== */

function initAnimation() {
    initReveal();
    initSkillBars();
    initCounter();
}

/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initReveal() {

    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-scale"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));

}

/* ==========================================================
   SKILL BAR ANIMATION
========================================================== */

function initSkillBars() {

    const skillBars = document.querySelectorAll(".skill-fill");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const width = entry.target.dataset.width;

            entry.target.style.width = width;

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        });

    }, {
        threshold: 0.3
    });

    skillBars.forEach(bar => observer.observe(bar));

}

/* ==========================================================
   COUNTER ANIMATION
========================================================== */

function initCounter() {

    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));

}

/* ==========================================================
   COUNTER FUNCTION
========================================================== */

function animateCounter(element) {

    const target = parseInt(element.dataset.target);

    let current = 0;

    const increment = target / 40;

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            element.textContent = target + "+";

            clearInterval(timer);

        } else {

            element.textContent = Math.floor(current) + "+";

        }

    }, 40);

}