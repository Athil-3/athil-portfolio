$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Athil | Portfolio";
            $("#favicon").attr("href", "https://cdn.simpleicons.org/robotframework/168CFF");
        }
        else {
            document.title = "Athil | Portfolio";
            $("#favicon").attr("href", "https://cdn.simpleicons.org/robotframework/168CFF");
        }
    });


// <!-- typing effect starts -->
const typingWords = [
    "Automation Testing",
    "Robot Framework & Selenium",
    "Test Script Development",
    "Test Execution & Analysis",
    "Defect Tracking",
    "Test Script Maintenance"
];
const typingElement = document.querySelector(".typing-text");
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeNext() {
    if (!typingElement) return;

    const word = typingWords[wordIndex];
    typingElement.textContent = word.substring(0, charIndex);

    if (!deleting && charIndex < word.length) {
        charIndex++;
        setTimeout(typeNext, 75);
    } else if (!deleting) {
        deleting = true;
        setTimeout(typeNext, 1200);
    } else if (charIndex > 0) {
        charIndex--;
        setTimeout(typeNext, 35);
    } else {
        deleting = false;
        wordIndex = (wordIndex + 1) % typingWords.length;
        setTimeout(typeNext, 250);
    }
}

typeNext();
// <!-- typing effect ends -->

const portfolioRevealTargets = document.querySelectorAll(
    ".portfolio-section-heading, .project-feature, .experience-feature, .workflow-cards > div, .award-grid article"
);
portfolioRevealTargets.forEach((element, index) => {
    element.classList.add("portfolio-fade");
    element.style.transitionDelay = `${(index % 4) * 100}ms`;
});

if ("IntersectionObserver" in window) {
    const portfolioObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                entry.target.classList.remove("is-visible");
            }
        });
    }, { threshold: 0.12 });
    portfolioRevealTargets.forEach(element => portfolioObserver.observe(element));
} else {
    portfolioRevealTargets.forEach(element => element.classList.add("is-visible"));
}

async function fetchSkills() {
    const response = await fetch("skills.json?v=7");
    return response.json();
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        const skillIcon = skill.iconType === "fontawesome"
            ? `<i class="fas ${skill.icon}" style="color: ${skill.iconColor};" aria-hidden="true"></i>`
            : `<img src="${skill.icon}" alt="${skill.name} logo" />`;
        skillHTML += `
        <div class="bar">
              <div class="info">
                ${skillIcon}
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;

    const skillCards = skillsContainer.querySelectorAll(".bar");
    skillCards.forEach((card, index) => {
        card.classList.add("skill-fade");
        card.style.transitionDelay = `${(index % 8) * 90}ms`;
    });

    if ("IntersectionObserver" in window) {
        const skillObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                } else {
                    entry.target.classList.remove("is-visible");
                }
            });
        }, { threshold: 0.15 });
        skillCards.forEach(card => skillObserver.observe(card));
    } else {
        skillCards.forEach(card => card.classList.add("is-visible"));
    }
}

fetchSkills().then(data => {
    showSkills(data);
});

// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

