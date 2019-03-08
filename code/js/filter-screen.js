"use strict";

const catArray = [
  {
    name: "FRONTEND DESIGN",
    description: "coucou c'est moi frontend",
    keywords: "truc",
    relatedProject: "des trucs"
  },
  {
    name: "DIGITAL DESIGN",
    description: "coucou c'est moi digital",
    keywords: "truc",
    relatedProject: "des trucs"
  },
  {
    name: "PRINT DESIGN",
    description: "coucou c'est moi print",
    keywords: "truc",
    relatedProject: "des trucs"
  },
  {
    name: "VISUAL IDENTITY",
    description:
      "Conception of all elements that can be associated to a brand (logotype, colors, font, style...) and that provides an effective recognition to the user.",
    keywords: "LOGOTYPES / LOGOMARK / DESIGN GUIDELINES",
    relatedProject:
      "CONSTELLATION MOBILIS, MATHILDE FRACHON, BUMBLE & BABY, SNOOPERTROOPS, MA POULE"
  },
  {
    name: "VIDEOS",
    description: "coucou c'est moi videos",
    keywords: "truc",
    relatedProject: "des trucs"
  }
];

let wrapperDesc = document.querySelector(".wrapper-cat__desc");
window.addEventListener("DOMContentLoaded", initFilter);

function initFilter() {
  console.log("init Filter");
  // HOVER THE CATEGORY
  document
    .querySelector(".cat__link--frontend")
    .addEventListener("mouseover", giveCatName);
  document
    .querySelector(".cat__link--digital")
    .addEventListener("mouseover", giveCatName);
  document
    .querySelector(".cat__link--print")
    .addEventListener("mouseover", giveCatName);
  document
    .querySelector(".cat__link--visualID")
    .addEventListener("mouseover", giveCatName);
  document
    .querySelector(".cat__link--videos")
    .addEventListener("mouseover", giveCatName);
}

let h1 = document.getElementsByTagName("h1");
// GIVE THE CATEGORY HOVERED THE SAME NAME
function giveCatName() {
  let catName = event.target.querySelector("h1").textContent;
  console.log("catName :" + catName);
  showCatDesc(catName);
}

let rightCat = [];

// SHOW THE DESCRIPTION OF THIS CATEGORY
function showCatDesc(catName) {
  rightCat = catArray.filter(byName);
  function byName(cat) {
    if (catName === cat.name) {
      //   console.log("YOU GOT THE RIGHT CAT");
      return true;
    } else {
      //   console.log("YOU GOT THE WRONG CAT");
      return false;
    }
  }
  console.log(rightCat[0].name); // needs to specify the index cause return an array not an object.
  wrapperDesc.textContent = rightCat[0].description;
}
