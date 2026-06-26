/* ==========================================================
   PORTFOLIO WEBSITE
   File : navigation.js
   Desc : Navigation & Cursor
========================================================== */

function initNavigation() {
    initCursorGlow();
    initNavbar();
    initActiveNav();
    initMobileMenu();
    initSmoothScroll();
}

/* ==========================================================
   CURSOR GLOW
========================================================== */

function initCursorGlow() {

    const glow = document.getElementById("cursorGlow");

    if (!glow) return;

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}

/* ==========================================================
   NAVBAR
========================================================== */

function initNavbar() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(27,30,35,.85)";
            navbar.style.backdropFilter = "blur(16px)";
            navbar.style.borderBottom = "1px solid rgba(255,255,255,.06)";

        } else {

            navbar.style.background = "transparent";
            navbar.style.backdropFilter = "none";
            navbar.style.borderBottom = "none";

        }

    });

}

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

function initActiveNav() {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 100;

            if (window.scrollY >= top) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active-link");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active-link");
            }

        });

    });

}

/* ==========================================================
   MOBILE MENU
========================================================== */

function initMobileMenu() {

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("menuIcon");

    if (!menuBtn) return;

    let menuOpen = false;

    menuBtn.addEventListener("click", () => {

        menuOpen = !menuOpen;

        mobileMenu.classList.toggle("open", menuOpen);

        menuIcon.setAttribute(
            "data-icon",
            menuOpen ? "lucide:x" : "lucide:menu"
        );

        document.body.style.overflow = menuOpen ? "hidden" : "";

    });

    document.querySelectorAll(".mobile-link").forEach(link => {

        link.addEventListener("click", () => {

            menuOpen = false;

            mobileMenu.classList.remove("open");

            menuIcon.setAttribute("data-icon", "lucide:menu");

            document.body.style.overflow = "";

        });

    });

}

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            if (href === "#") return;

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });

}