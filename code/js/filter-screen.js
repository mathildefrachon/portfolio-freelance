"use strict";

const catArray = [
  {
    name: "FRONTEND DESIGN",
    description:
      "From user-experience until web developpment, Frontend Design is the creation of web interfaces starting with customer searches to create a unique interactive design.",
    keywords: "WEBSITE / UI / WEBAPP / RESPONSIVE DESIGN / DASHBOARDS",
    relatedProject: ["HUSET", "CECCALDI", "FOOBAR", "TREAT A TREE"],
    color: "rgb(106, 151, 147)"
  },
  {
    name: "DIGITAL DESIGN",
    description:
      "Understanding, creation and design of digital concepts within a target group in order to communicate via digital medias.",
    keywords: "SOCIAL MEDIAS, USER EXPERIENCE, USER TESTING, DIGITAL MARKETING",
    relatedProject: ["KIN", "TREAT A TREE", "SCREW WINTER PARTY"],
    color: "rgb(154, 226, 214)"
  },
  {
    name: "PRINT DESIGN",
    description:
      "Creation and design of print concepts including all communication items created through a printing process.",
    keywords: "CATALOGUES, BUSINESS CARDS, POSTERS, FLYERS...",
    relatedProject: [
      "HUSET BIOGRAFEN",
      "MOLINEL CUISINE",
      "MOLINEL BATIMENT",
      "CAFE VIGGO"
    ],
    color: "rgb(109, 204, 194)"
  },
  {
    name: "VISUAL IDENTITY",
    description:
      "Conception of all elements that can be associated to a brand (logotype, colors, font, style...) and that provides an effective recognition to the user.",
    keywords: "LOGOTYPES / LOGOMARK / DESIGN GUIDELINES / BRANDING",
    relatedProject: [
      "CONSTELLATION MOBILIS",
      "MATHILDE FRACHON",
      "BUMBLE & BABY",
      "SNOOPERTROOPS",
      "MA POULE"
    ],
    color: "rgb(74, 165, 154)"
  },
  {
    name: "VIDEOS",
    description: "Coming soon...",
    keywords: "",
    relatedProject: "",
    color: "rgb(8, 47, 43)"
  }
];

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

// GIVE THE CATEGORY HOVERED THE SAME NAME
function giveCatName() {
  console.log(event);
  console.log(event.target.className);
  // clear hover effect
  //   document.querySelectorAll(".wrapper-cat__link").forEach(link => {
  //     link.classList.remove("cat-hovered");
  //   });

  if (event.target.classList[0] == "wrapper-cat__link") {
    // gives hover effect
    // event.target.classList.add("cat-hovered");

    // gives catName
    let catName = event.target.querySelector("h1").textContent;
    console.log("catName :" + catName);
    showCatDesc(catName);
  }
}

let rightCat = [];

// SHOW THE DESCRIPTION OF THIS CATEGORY
function showCatDesc(catName) {
  // return true if right cat
  rightCat = catArray.filter(byName);
  function byName(cat) {
    if (catName === cat.name) {
      return true;
    } else {
      return false;
    }
  }
  console.log(rightCat[0]); // needs to specify the index cause return an array not an object.
  event.target.offsetParent.style.backgroundColor = rightCat[0].color;
  // fetch the content
  document.querySelector(".wrapper-cat__desc").textContent =
    rightCat[0].description;
  document.querySelector(".wrapper-cat__keywords__desk").textContent =
    rightCat[0].keywords;

  let relatedProjectArray = rightCat[0].relatedProject;
  let projectUL = document.querySelector(".wrapper-cat__projects ul");
  // CLEAR THE UL
  projectUL.innerHTML = "";

  // FILL THE UL
  relatedProjectArray.forEach(project => {
    console.log("for each project");
    let projectLink = document.createElement("a");
    let projectList = document.createElement("li");
    projectList.appendChild(projectLink);
    projectLink.innerHTML = project;
    projectUL.appendChild(projectList);
  });
}
