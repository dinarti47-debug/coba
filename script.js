document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            serviceCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.classList.contains('dropdown-toggle')) return;
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const searchBtn = document.getElementById('searchBtn');
    const searchBox = document.getElementById('searchBox');
    
    if (searchBtn && searchBox) {
        searchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            searchBox.classList.toggle('active');
            if (searchBox.classList.contains('active')) {
                document.getElementById('searchInput').focus();
            }
        });

        searchBox.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

dropdownLinks.forEach(link => {
    link.addEventListener("click", function() {
        const parentDropdown = this.closest('.dropdown');
        if (parentDropdown) {
            parentDropdown.classList.remove('active');
        }
    });
});
   const dropdownMenus = document.querySelectorAll(".dropdown > .nav-link");
    dropdownMenus.forEach(menu => {
        menu.addEventListener("click", function(e) {
            e.stopPropagation();
            const parentDropdown = this.parentElement;
            document.querySelectorAll(".dropdown").forEach(item => {
                if (item !== parentDropdown) {
                    item.classList.remove("active");
                }
            });

            parentDropdown.classList.toggle("active");
        });
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll(".dropdown").forEach(item => {
                item.classList.remove("active");
            });
        }
        if (searchBox && !e.target.closest('.search-wrapper')) {
            searchBox.classList.remove('active');
        }
    });

    const input = document.getElementById("searchInput");
    if (input) {
        input.addEventListener("keyup", function(e) {
            if (e.key === "Enter") {
                const keyword = this.value.toLowerCase().trim();
                if (!keyword) return;

                const elements = document.querySelectorAll("h1, h2, h3, h4, p, span, li");
                let found = false;

                elements.forEach(el => {
                    if (el.textContent.toLowerCase().includes(keyword) && !found) {
                        el.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                        el.style.transition = ".3s";
                        el.style.background = "#4ade80";
                        el.style.color = "#000";

                        setTimeout(() => {
                            el.style.background = "";
                            el.style.color = "";
                        }, 1800);

                        found = true;
                    }
                });

                if (!found) {
                    alert("Data tidak ditemukan.");
                }
            }
        });
    }

    console.log("Perhutani KPH Pemalang Website Loaded Successfully.");
});
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        serviceCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});
/**
 * script_pengumuman.js
 * Logika Kalender Digital untuk Halaman Pengumuman
 */
