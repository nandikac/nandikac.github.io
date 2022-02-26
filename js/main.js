/* Your JS here. */
const sections = document.querySelectorAll("section");
const liItems = document.querySelectorAll("nav .navbar-div ul li");

window.addEventListener("scroll", () => {
    let curr_id = "";
    sections.forEach((section) => {
        if (pageYOffset >= section.offsetTop - section.clientHeight / 3) {
            curr_id = section.getAttribute("id");
        }
    });
    liItems.forEach((li) => {
    li.classList.remove("active");
        if (li.classList.contains(curr_id)) {
            li.classList.add("active");
        }
    });
});

window.onscroll = function() {navResizing()};

var navbar = document.getElementById("navbar");

function navResizing() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.padding = "0px 10px";
        document.getElementById("navbar").style.fontSize = "large";
    } else {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("navbar").style.fontSize = "x-large";
    }
}

var slideNum = 1;
var slides = document.getElementsByClassName("slides");
displaySlide(slideNum);

document.getElementById("nextSlide").addEventListener("click", function() {
    slides[slideNum - 1].style.display = "none";
    slideNum = slideNum + 1;
    if (slideNum > slides.length) {
        slideNum = 1;
    }
    displaySlide(slideNum);
})

document.getElementById("prevSlide").addEventListener("click", function() {
    slides[slideNum - 1].style.display = "none";
    slideNum = slideNum - 1;
    if (slideNum < 1) {
        slideNum = slides.length;
    }
    displaySlide(slideNum);
})

function displaySlide(slideNum) {
    slides[slideNum - 1].style.display = "block";
}
var modal1 = document.getElementById("modal1");
document.getElementById("viewvideo").onclick = function() {
    modal1.style.display = "block";
}
document.getElementById("close1").onclick = function() {
    modal1.style.display = "none";
};
var modal2 = document.getElementById("modal2");
document.getElementById("viewsocials").onclick = function() {
    modal2.style.display = "block";
}
document.getElementById("close2").onclick = function() {
    modal2.style.display = "none";
};
