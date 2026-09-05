/* =========================================
   SWIFTTRACK PACKAGE DATA
========================================= */

const packageData = {

    trackingNumber: "ST-2026-4296",

    packageName: "1 000 000,00 € v hotovosti a biele Mercedes Benz, Model 2024 AMG GLE 63 S 4MATIC+ COUPE",

    weight: "10.5kg + 2 505.00kg = 2 515.5 kg",

    deliveryFee: "1 050,00 €",

    estimatedDelivery: "8. september 2026",

    currentLocation: "Dubaj",

    status: "Na ceste",

    progress: 0,

    latestUpdate:
        "Vaša zásielka sa momentálne spracováva na doručenie. Preprava sa začne po zaplatení poplatku za doručenie.",


    /* CUSTOMER */

    customerName:
        "František Pažitný",

    customerAddress:
        "Slovenská republika, Sekule č. 840, okres Senica, Slovensko",

    customerPhone:
        "+421 904 833 226",

    customerPhoto:
        "Frantisekp.jpeg",


    /* DESTINATION */

    deliveryDestination:
        "Slovenská republika, Sekule č. 840, okres Senica, Slovensko",


    /* CONTACT */

    zangiLink:
        "https://services.zangi.com/dl/conversation/3549336473",

    telegramLink:
        "YOUR_TELEGRAM_LINK_HERE"

};


/* =========================================
   SLIDER
========================================= */

let currentSlide = 0;

const totalSlides = 3;


function updateSlider() {

    const sliderTrack =
        document.getElementById(
            "sliderTrack"
        );

    const dots =
        document.querySelectorAll(
            ".photo-dot"
        );


    if (!sliderTrack) {
        return;
    }


    sliderTrack.style.transform =
        `translateX(-${currentSlide * 100}%)`;


    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        }
    );

}


function nextSlide() {

    currentSlide++;

    if (
        currentSlide >=
        totalSlides
    ) {

        currentSlide = 0;

    }

    updateSlider();

}


function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            totalSlides - 1;

    }

    updateSlider();

}


function goToSlide(slideNumber) {

    if (
        slideNumber < 0 ||
        slideNumber >= totalSlides
    ) {

        return;

    }

    currentSlide =
        slideNumber;

    updateSlider();

}


/* =========================================
   MOBILE SWIPE
========================================= */

let touchStartX = 0;

let touchEndX = 0;


const packageSlider =
    document.getElementById(
        "packageSlider"
    );


if (packageSlider) {

    packageSlider.addEventListener(
        "touchstart",
        function(event) {

            touchStartX =
                event.changedTouches[0]
                    .screenX;

        },
        {
            passive: true
        }
    );


    packageSlider.addEventListener(
        "touchend",
        function(event) {

            touchEndX =
                event.changedTouches[0]
                    .screenX;

            handleSwipe();

        },
        {
            passive: true
        }
    );

}


function handleSwipe() {

    const distance =
        touchEndX - touchStartX;


    if (
        Math.abs(distance) < 50
    ) {

        return;

    }


    if (distance < 0) {

        nextSlide();

    } else {

        previousSlide();

    }

}


/* =========================================
   TRACK PACKAGE
========================================= */

function trackPackage() {

    const input =
        document.getElementById(
            "trackingInput"
        );


    const enteredNumber =
        input.value.trim();


    if (enteredNumber === "") {

        alert(
            "Zadajte prosím vaše sledovacie číslo."
        );

        return;

    }


    if (
        enteredNumber.toUpperCase() !==
        packageData.trackingNumber.toUpperCase()
    ) {

        alert(
            "Sledovacie číslo sa nenašlo."
        );

        return;

    }


    /* PACKAGE INFORMATION */

    document.getElementById(
        "trackingNumber"
    ).textContent =
        packageData.trackingNumber;


    document.getElementById(
        "packageName"
    ).textContent =
        packageData.packageName;


    document.getElementById(
        "weight"
    ).textContent =
        packageData.weight;


    document.getElementById(
        "deliveryFee"
    ).textContent =
        packageData.deliveryFee;


    document.getElementById(
        "estimatedDelivery"
    ).textContent =
        packageData.estimatedDelivery;


    document.getElementById(
        "status"
    ).textContent =
        packageData.status;


    /* LOCATION */

    document.getElementById(
        "currentLocation"
    ).textContent =
        packageData.currentLocation;


    document.getElementById(
        "latestUpdate"
    ).textContent =
        packageData.latestUpdate;


    document.getElementById(
        "headingTo"
    ).textContent =
        packageData.deliveryDestination;


    /* CUSTOMER */

    document.getElementById(
        "customerName"
    ).textContent =
        packageData.customerName;


    document.getElementById(
        "customerAddress"
    ).textContent =
        packageData.customerAddress;


    document.getElementById(
        "deliveryDestination"
    ).textContent =
        packageData.deliveryDestination;


    /* PHONE */

    const phoneElement =
        document.getElementById(
            "customerPhone"
        );


    phoneElement.textContent =
        packageData.customerPhone;


    phoneElement.href =
        "tel:" +
        packageData.customerPhone.replace(
            /[^0-9+]/g,
            ""
        );


    /* CUSTOMER PHOTO */

    document.getElementById(
        "customerPhoto"
    ).src =
        packageData.customerPhoto;


    /* PROGRESS */

    document.getElementById(
        "progressFill"
    ).style.width =
        packageData.progress + "%";


    document.getElementById(
        "progressText"
    ).textContent =
        packageData.progress + "%";


    /* CONTACT LINKS */

    const contactLinks =
        document.querySelectorAll(
            ".contact-option"
        );


    if (contactLinks[0]) {

        contactLinks[0].href =
            packageData.zangiLink;

    }


    if (contactLinks[1]) {

        contactLinks[1].href =
            packageData.telegramLink;

    }


    /* SHOW DETAILS */

    document.getElementById(
        "trackingSection"
    ).style.display =
        "none";


    document.getElementById(
        "packageSection"
    ).style.display =
        "block";


    /* RESET SLIDER */

    currentSlide = 0;

    updateSlider();


    /* GO TO TOP */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   CONTACT MODAL
========================================= */

function openContactModal() {

    document.getElementById(
        "contactModal"
    ).style.display =
        "flex";

}


function closeContactModal(event) {

    const modal =
        document.getElementById(
            "contactModal"
        );


    if (
        event &&
        event.target !== modal
    ) {

        return;

    }


    modal.style.display =
        "none";

}


/* =========================================
   BACK
========================================= */

function goBack() {

    document.getElementById(
        "packageSection"
    ).style.display =
        "none";


    document.getElementById(
        "trackingSection"
    ).style.display =
        "block";


    document.getElementById(
        "trackingInput"
    ).value =
        "";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   ENTER KEY
========================================= */

document
    .getElementById("trackingInput")
    .addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                trackPackage();

            }

        }
    );


/* =========================================
   INITIALIZE
========================================= */

updateSlider();
