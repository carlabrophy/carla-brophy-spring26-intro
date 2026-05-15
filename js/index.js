const newFooter = document.createElement("footer");
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");

//I dont' know I still have to:
// Create a variable named footer and assign it the footer element by using "DOM Selection" to select the <footer> element from the DOM
//hint: querySelector method or similar and I am getting an error If i use thos to appendChild.
const footer = document.querySelector("footer");

const skills = ["JavaScript", "HTML", "CSS", "PHP", "GitHub"];

// newFooter.textContent = "test";

//inserting the footer before the script tag
document.body.insertBefore(newFooter, document.body.lastElementChild);
copyright.innerHTML = `\u00A9 Carla Brophy ${thisYear}`;
newFooter.appendChild(copyright);

for (let x of skills) {
  const skill = document.createElement("li");
  skill.textContent = x;
  skillsList.appendChild(skill);
}
