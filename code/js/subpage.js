"use strict";
// import {
//   urlParams,
//   currentArray,
//   cat,
//   activeFilter,
//   imgArray
// } from "./index.js";

// get the index of the project from the url
let index = urlParams.get("index");
let imgIndex = 1;
// let image = document.querySelector("img");
const images = document.querySelector(".project--img__sub");

// CLICK ON IMG
images.addEventListener("click", clickedImages);

function clickedImages() {
  if (imgIndex >= imgArray.length) {
    imgIndex = 0;
  } else {
  }
  let activeDot = document.querySelector("#" + "dot" + imgIndex);
  document.querySelectorAll(".point").forEach(dot => {
    dot.classList.remove("dotActive");
  });

  if (imgIndex >= imgArray.length) {
    console.log("go back to first main img");
    images.src = imgArray[0].url;
    imgIndex = 0;
  } else {
    images.src = imgArray[imgIndex].url;
    imgIndex++;
  }
  activeDot.classList.add("dotActive");
}

/* NEXT AND PREVIOUS PROJECT */

document
  .querySelector(".buttons--sub__next")
  .addEventListener("click", nextProject);

document
  .querySelector(".buttons--sub__previous")
  .addEventListener("click", previousProject);

function nextProject() {
  console.log("next");
  closeInfos();
  const thisIndex = currentArray.findIndex(pr => pr.wpid == index);
  console.log(thisIndex);
  let nextIndex = thisIndex + 1;
  // RETURN AT THE BEGINNING
  if (nextIndex >= currentArray.length) {
    nextIndex = 0;
  }
  // IF CAT THEN NEXT WITHIN CAT
  if (cat) {
    console.log("we have a category:" + cat);
    let newUrl =
      "subpage.html?index=" +
      currentArray[nextIndex].wpid +
      "&category=" +
      activeFilter;
    console.log(newUrl);
    document.querySelector(".buttons--sub__next").setAttribute("href", newUrl);
  } else {
    let newUrl = "subpage.html?index=" + currentArray[nextIndex].wpid;
    document.querySelector(".buttons--sub__next").setAttribute("href", newUrl);
  }
}

function previousProject() {
  console.log("previous");
  closeInfos();
  const thisIndex = currentArray.findIndex(pr => pr.wpid == index);
  let nextIndex = thisIndex - 1;
  console.log(nextIndex);
  // RETURN AT THE BEGINNING
  if (nextIndex < 0) {
    nextIndex = currentArray.length - 1;
  }
  // IF CAT THEN NEXT WITHIN CAT
  if (cat) {
    console.log("we have a category:" + cat);
    let newUrl =
      "subpage.html?index=" +
      currentArray[nextIndex].wpid +
      "&category=" +
      activeFilter;
    console.log(newUrl);
    document
      .querySelector(".buttons--sub__previous")
      .setAttribute("href", newUrl);
  } else {
    let newUrl = "subpage.html?index=" + currentArray[nextIndex].wpid;
    console.log(newUrl);
    document
      .querySelector(".buttons--sub__previous")
      .setAttribute("href", newUrl);
  }
}

/* DISPLAY INFOS - OPEN CLOSE MENU INFOS */

document
  .querySelector(".buttons--sub__plus")
  .addEventListener("click", openInfos);
document
  .querySelector(".buttons--cross__sub--infos")
  .addEventListener("click", closeInfos);

const img_container = document.querySelector(".project--wrapper__sub");
const infos_container = document.querySelector(".project--infos__sub");
const infos = document.querySelector(".infos__sub");
console.log(infos_container);

function openInfos() {
  console.log("plus infos");

  //for desktop
  if (window.innerWidth > 1000) {
    infos_container.classList.remove("width0");
    infos_container.classList.add("extend-side");
    img_container.classList.remove("extend");
    img_container.classList.add("shorter");

    setTimeout(function() {
      infos.classList.remove("opacity");
    }, 500);
  }

  //for mobile
  else if (window.innerWidth < 1000) {
    console.log("onMobile");
    infos_container.classList.remove("width0");
    infos_container.classList.add("extendMobileInfos");
    document.querySelector(".buttons--cross__sub--infos").style.opacity = "1";

    setTimeout(function() {
      infos.classList.remove("opacity");
    }, 500);
  }
}

function closeInfos() {
  console.log("close infos");

  //for desktop
  if (window.innerWidth > 1000) {
    infos.classList.add("opacity");

    setTimeout(function() {
      infos_container.classList.add("width0");
      infos_container.classList.remove("extend-side");
      img_container.classList.add("extend");
      img_container.classList.remove("shorter");
    }, 500);
  }

  //for mobile
  if (window.innerWidth < 1000) {
    console.log("on Mobile");

    infos.classList.add("opacity");

    setTimeout(function() {
      infos_container.classList.add("width0");
      infos_container.classList.remove("extendMobileInfos");
      document.querySelector("#crossI").style.opacity = "0";
    }, 500);
  }
}
