///<reference path="../typings/globals/jquery/index.d.ts" />

// -------------- Select select Elements -----------------------
let imageInterval //interval image
let landingPage = document.querySelector(".landing-page")//landingpage
let selectSetting = document.querySelector(".settings-Box")//setting
let icon = document.querySelector(".settings-Box .icon i")//setting icon
let colorsLi = document.querySelectorAll(".colors-list li")//colors
let randombackground = document.querySelectorAll(".random-background span")//span background image
let imagesContainer = document.querySelector(".images")//select background image
let selectBackgroundImage = document.querySelectorAll(".images img")//select background image
let homeSection = document.querySelector(".header")//skills section
let aboutSection = document.querySelector("#about")//skills section
let SkillsSection = document.querySelector("#skills")//skills section
let gallerySection = document.querySelector("#gallery")//skills section
let timelineSection = document.querySelector("#timeline-sec")//skills section
let contactSection = document.querySelector("#skills")//skills section
let SkillsProgress = document.querySelectorAll(".skill-box .skill-progress span")//progress skills
let galleryImages = document.querySelectorAll(".gallery img")//gallery images
let popup = document.querySelector(".popup-overlay")//popup
let popupImage = document.querySelector(".popup-overlay img")//popup Image selected
let galleryImagesArray = galleryImages = Array.from(galleryImages);
let popupClose = document.querySelector(".close")//popupClose
let popupNext = document.querySelector(".next")//popupNext
let popupPrev = document.querySelector(".prev")//popupPrev
let imageSelectedIndex;
let allBullets = document.querySelectorAll(".nav-bullets .bullet")//bullets
let navLinks = document.querySelectorAll(".links li")//nav li
let toggleBtn = document.querySelector(".toggle-menu")//popupPrev
let checkToggle="open"



//----------------------- open menu -----------------
icon.addEventListener('click', function () {

    if (selectSetting.style.left == "0px") {

        selectSetting.style.left = '-200px'
        icon.classList.add("fa-spin")

    }
    else {
        selectSetting.style.left = '0px'
        icon.classList.remove("fa-spin")
    }
})
// toggle menu
toggleBtn.addEventListener('click', () => {

    if(checkToggle=="open")
    {
        navLinks[0].parentElement.classList.add("open")
        checkToggle="close"
    }
    else
    {
        navLinks[0].parentElement.classList.remove("open")
        checkToggle="open"
    }
   
})

// ------------------------Select Colors ------------------------

let mainColor = localStorage.getItem("mainColor")
if (mainColor != null) {
    let colorStored = localStorage.getItem("mainColor")
    document.documentElement.style.setProperty('--main-color', colorStored)
    colorsLi.forEach(li => {

        if (li.dataset.color == colorStored) {
            li.classList.add("active")
        }
        else {
            li.classList.remove("active")
        }
    })

}
//--------------- change color -----------------
colorsLi.forEach(li => {
    li.addEventListener('click', (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem("mainColor", e.target.dataset.color)
        e.target.parentElement.querySelectorAll(".active").forEach(li => {
            li.classList.remove("active")

        })
        localStorage.addItem
        e.target.classList.add("active")

    })
});

//------------------ active class background change -----------------
randombackground.forEach(span => {
    span.addEventListener('click', (e) => {
        randombackground.forEach(span => {
            span.classList.remove("active")
        })
        let checkButtonRandom = e.target.dataset.background;
        randomImages(checkButtonRandom)
        e.target.classList.add("active")
    })
})

// ------------------------ random images ------------------------
const imgsArray = ["landing-1.jpg", "landing-2.jpg", "landing-3.jpg", "landing-4.jpg", "landing-5.jpg"]
function randomImages(checkButtonRandom) {
    if (checkButtonRandom == "yes") {

        imageInterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length)
            landingPage.style.backgroundImage = `url(images/${imgsArray[randomNumber]})`
        }, 3000);
        imagesContainer.style.display = "none"
        localStorage.setItem("randomImage", "yes")

    }
    else {
        clearInterval(imageInterval)
        imagesContainer.style.display = "block"
        localStorage.setItem("randomImage", "no")

    }
}
let localbackgroundSelected = localStorage.getItem("randomImage")
if (localbackgroundSelected == "no") {
    randomImages("no")
    randombackground[1].classList.add("active")
    randombackground[0].classList.remove("active")
    selectBackgroundImage[0].classList.add("active")

}
else {
    randomImages("yes")
}
//----------------------- select Background image -----------------
selectBackgroundImage.forEach(image => {
    image.addEventListener('click', (e) => {
        landingPage.style.backgroundImage = `url(${e.target.getAttribute("src")})`
        selectBackgroundImage.forEach(image => {
            if (image == e.target) {
                image.classList.add("active")
            }
            else {

                image.classList.remove("active")

            }
        })

    })

})


//----------------------- typing js -----------------

var typed = new Typed(".typed", {
    strings: ["Creative", "Vibrant", "Dynamic", "Inventive", "passionate"],
    typeSpeed: 130,
    backDelay: 2000,
    backSpeed: 60,
    smartBackspace: true,
    loop: true,
});

//----------------------- Skills --------------------

window.onscroll = function () {
    let homeoffsetTop = homeSection.offsetTop;
    let skillsoffsetTop = SkillsSection.offsetTop;
    let aboutoffsetTop = aboutSection.offsetTop;
    let galleryoffsetTop = gallerySection.offsetTop;
    let timelineoffsetTop = timelineSection.offsetTop;
    let contactoffsetTop = contactSection.offsetTop;

    if (scrollY > skillsoffsetTop - 200) {

        SkillsProgress.forEach(skill => {
            skill.style.width = skill.dataset.progress
        })
    }
    console.log(aboutoffsetTop);
    console.log(scrollY);
    if (scrollY > aboutoffsetTop) {
        console.log("heheh");
    }



}

//----------------------- galleryy image --------------------

galleryImages.forEach(image =>
    image.addEventListener('click', (e) => {
        popup.style.display = "flex"
        popupImage.setAttribute("src", e.target.getAttribute("src"))
        imageSelectedIndex = galleryImagesArray.indexOf(e.target)

    })

)
popupClose.addEventListener('click', () => {
    closePopup()
})
function closePopup() {
    popup.style.display = "none"
}
// --------- next btn -------- 
popupNext.addEventListener('click', () => {

    if (imageSelectedIndex == galleryImagesArray.length - 1) {
        imageSelectedIndex = 0
    }
    else {
        imageSelectedIndex++

    }

    nextPopupImage()
})
function nextPopupImage() {
    popupImage.setAttribute("src", galleryImagesArray[imageSelectedIndex].getAttribute("src"))

}


popupPrev.addEventListener('click', () => {

    if (imageSelectedIndex == 0) {
        imageSelectedIndex = galleryImagesArray.length - 1
    }
    else {
        imageSelectedIndex--

    }


    prevPopupImage()
})
function prevPopupImage() {
    popupImage.setAttribute("src", galleryImagesArray[imageSelectedIndex].getAttribute("src"))

}

//---------Bullets & navbar ------------------
navLinks.forEach(li => {
    li.addEventListener("click", (e) => {
        e.preventDefault()
        e.target.parentElement.parentElement.querySelectorAll(".active").forEach(li => {
            li.classList.remove("active")
        })
        e.target.classList.add("active")

        scrollTo(e.target.dataset.section)

    })
})
allBullets.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(li => {
            li.classList.remove("active")
        })
        e.target.classList.add("active")
        scrollTo(e.target.dataset.section)

    })
})

function scrollTo(section) {
    document.querySelector(`${section}`).scrollIntoView({
        behavior: "smooth"
    })
}



