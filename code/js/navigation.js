"use strict";
"use strict";
// import {
//   clickedFilter,
//   clickedPost,
//   openSide,
//   closeSide,
//   filterScreen,
//   filterContent,
//   extend,
//   opacity,
//   none
// } from "./index.js";

let contactScreen = document.querySelector(".screen__side__contact");
let contactContent = document.querySelector(".screen__side--wrapper__contact");

// menu links

let menuLinkProjects = document.querySelector("#a-projects");
let menuLinkFilters = document.querySelector("#a-filters");
let menuLinkContact = document.querySelector("#a-contact");

window.addEventListener("DOMContentLoaded", initNav);

function initNav() {
  //BUTTONS CATEGORIES
  document
    .querySelectorAll(".wrapper-cat__link")
    .forEach(element => element.addEventListener("click", clickedFilter));
  //CLICK ON A PROJECT
  gallery.addEventListener("click", clickedPost);
  //SIDE MENU
  menuLinkFilters.addEventListener("click", function() {
    openSide(filterScreen, filterContent);
  });
  document
    .querySelector(".buttons--cross__filter")
    .addEventListener("click", function() {
      closeSide(filterScreen, filterContent);
    });
  // CONTACT
  menuLinkContact.addEventListener("click", function() {
    openSide(contactScreen, contactContent);
  });
  document
    .querySelector(".buttons--cross__contact")
    .addEventListener("click", function() {
      closeSide(contactScreen, contactContent);
    });
}

/* ABOUT PAGE FOR MOBILE */

let aboutSlidesM = document.querySelectorAll(".about-slides-mob");
let aboutSlidesD = document.querySelectorAll(".about-slides-desk");

if (window.innerWidth < 1000) {
  console.log("onMobile");
  aboutSlidesM.forEach(slideM => {
    slideM.classList.remove("none");
  });

  aboutSlidesD.forEach(slideD => {
    slideD.classList.add("none");
  });
}

/* HORIZONTAL SCROLL GALLERY */

let containerGal = document.querySelector(".gallery");
var xInterval = 1;

var doScrollLeft = function() {
  console.log("little by little");
  containerGal.scrollBy(-2, 0);
  // containerGal.scroll(xInterval, 0);
  // xInterval = xInterval - 2;
  // console.log(xInterval);
};

var doScrollRight = function() {
  // containerGal.scroll(xInterval, 0);
  containerGal.scrollBy(2, 0);
  // xInterval = xInterval + 2;
};

var myInterval;

var startScrollLeft = function() {
  console.log("Scroooooll");
  myInterval = setInterval(doScrollLeft, 1);
};

var startScrollRight = function() {
  console.log("Scroooooll");
  myInterval = setInterval(doScrollRight, 1);
};

var stopScroll = function() {
  console.log("DONT Scroooooll");
  clearInterval(myInterval);
  //containerGal.style.scrollBehavior = "inherit";
};
