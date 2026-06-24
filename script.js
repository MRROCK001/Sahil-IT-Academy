// ===============================
// SAHIL IT ACADEMY
// ===============================

// EmailJS Initialize
emailjs.init({
    publicKey: "3HPvG3jR9ARJfc_BP",
});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        if (section) {

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// Admission Form
// ===============================

const form = document.getElementById("admissionForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        course: form.course.value,
        message: form.message.value
    };

    emailjs.send(
        "service_o9zgjdt",
        "template_ssq3t8g",
        formData
    )

    .then(function (response) {

        console.log("SUCCESS!", response);

        alert("🎉 Admission Submitted Successfully!\n\nWe will contact you soon.");

        form.reset();

    })

    .catch(function (error) {

        console.error("FAILED...", error);

        alert("❌ Failed to submit.\nCheck Console (F12)");

    });

});

// ===============================
// Active Navbar
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 100;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Fade Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};