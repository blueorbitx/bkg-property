// Contact Form

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for contacting BKG Property. We will contact you soon.");

    this.reset();

});


// Property Enquiry

function enquireProperty(propertyName){

    let message =
`Hello BKG Property,

I am interested in:

🏡 ${propertyName}

Please provide more details.`;

    let whatsapp =
`https://wa.me/919032133920?text=${encodeURIComponent(message)}`;

    window.open(whatsapp,"_blank");

}


// Site Visit Form

document.getElementById("visitForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let phone =
    document.getElementById("phone").value;

    let property =
    document.getElementById("property").value;

    let date =
    document.getElementById("date").value;

    let time =
    document.getElementById("time").value;

    let notes =
    document.getElementById("notes").value;

    let message =
`🏡 New Site Visit Request

👤 Name: ${name}

📞 Phone: ${phone}

📍 Property: ${property}

📅 Date: ${date}

⏰ Time: ${time}

📝 Notes:
${notes}`;

    let whatsapp =
`https://wa.me/919032133920?text=${encodeURIComponent(message)}`;

    window.open(whatsapp,"_blank");

    this.reset();

});


// Scroll Animation

const cards =
document.querySelectorAll(
'.card,.property-card,.review-box,.faq-item,.stat-box'
);

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="all 0.6s ease";

});

window.addEventListener("scroll",()=>{

    cards.forEach(card=>{

        const top =
        card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.opacity="1";
            card.style.transform="translateY(0)";

        }

    });

});

// Trigger once on load

window.dispatchEvent(new Event("scroll"));

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
