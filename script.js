// ==========================================
// ECHO MEDIA PRODUCTION
// script.js
// ==========================================

// ==========================
// Typing Effect
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const text = "Creating stories through Sound, Film & Motion.";
    const description = document.querySelector(".description");

    if (description) {

        description.innerHTML = "";

        let i = 0;

        function typingEffect() {

            if (i < text.length) {

                description.innerHTML += text.charAt(i);
                i++;

                setTimeout(typingEffect, 50);

            }

        }

        typingEffect();

    }

});


// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.clientHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// About Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".about").forEach(section => {

    observer.observe(section);

});


// ==========================
// Portfolio Filter
// ==========================

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// ==========================
// Navbar Shadow
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    header.style.boxShadow =
        window.scrollY > 40
            ? "0 5px 20px rgba(0,0,0,.4)"
            : "none";

});


// ==========================
// Contact Form
// ==========================

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        // If EmailJS is not loaded
        if (typeof emailjs === "undefined") {

            alert("EmailJS is not connected yet.");
            return;

        }

        emailjs.send(
            "SERVICE_echo media",
            "TEMPLATE_Iazuhnmh",
            {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value
            }

        )

        .then(() => {

            alert("Message sent successfully!");

            form.reset();

        })

        .catch((error) => {

            console.error(error);

            alert("Failed to send message.");

        });

    });

}


window.addEventListener("load", function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 500);

    }, 2000);
});


// ==========================
// Back To Top
// ==========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        topBtn.style.display =
            window.scrollY > 400 ? "flex" : "none";

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}