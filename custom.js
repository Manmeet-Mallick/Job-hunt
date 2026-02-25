//Aos Initialization
AOS.init({duration:1000,once:true});
//menu toggle
function toggleMenu(){
    const nav =document.getElementById('nav');
    nav.classList.toggle('active');
}
function loadMore() {
    alert("More jobs will be loaded here!");
}

// ===== Counter Start When Visible =====

document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".counter");
    const counterSection = document.querySelector(".counter-section");
    let started = false;

    if (!counterSection) return;

    const startCounter = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const speed = 200;

            const updateCount = () => {
                const increment = target / speed;

                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target + "+";
                }
            };

            updateCount();
        });
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                startCounter();
                started = true;
            }
        });
    }, {
        threshold: 0.4
    });

    observer.observe(counterSection);

});

function subscribe() {
    let email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email!");
    } else {
        alert("Subscribed successfully!");
        document.getElementById("email").value = "";
    }
}
document.querySelectorAll('.bookmark').forEach(icon => {
    icon.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
// Sticky Header on Scroll
window.addEventListener("scroll", function () {
    const header = document.getElementById("mainHeader");

    if (window.scrollY > 100) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

