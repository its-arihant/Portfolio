const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header')
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    },1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    },1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navLinks.forEach((link,idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);


        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

// Resume button functionality
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        // Remove 'active' class from all buttons
        resumeBtns.forEach(button => {
            button.classList.remove('active');
        });
        // Add 'active' class to the clicked button
        btn.classList.add('active');

        // Remove 'active' class from all resume details
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        // Add 'active' class to the corresponding resume detail
        resumeDetails[idx].classList.add('active');
    });
});

// Portfolio carousel functionality
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    portfolioDetails.forEach(detail => {
        detail.classList.remove('active')
    });
    portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < 1) {
        index++;
        arrowLeft.classList.remove('disabled')
    }
    else {
        index=2;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index=0;
        arrowLeft.classList.add('disabled')
    }
    activePortfolio();
});

// function sendMail() {
//     let parms = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value,
//     };

//     emailjs
//         .send("service_dvmrzcx","template_97oniea", parms)
//         .then((response) => {
//             alert("Email sent successfully!");
//             console.log("SUCCESS!", response.status, response.text);
//         })
//         .catch((error) => {
//             alert("Failed to send email. Please try again later.");
//             console.error("FAILED...", error);
//         });
// }

function sendMail() {
    // Get input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Check if any field is empty
    if (!name || !email || !subject || !message) {
        alert("Please fill in all the fields.");
        return; // Stop the function execution if any field is empty
    }

    // Prepare parameters for the email
    let parms = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    // Send the email using emailjs
    emailjs
        .send("service_dvmrzcx", "template_97oniea", parms)
        .then((response) => {
            alert("Email sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch((error) => {
            alert("Failed to send email. Please try again later.");
            console.error("FAILED...", error);
        });
}

