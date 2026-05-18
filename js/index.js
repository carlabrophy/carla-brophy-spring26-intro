//Create a new footer
const footer = document.createElement("footer");
//anserting the footer before the script tag
document.body.insertBefore(footer, document.body.lastElementChild);

//Append the copyright text directly to your variable
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Carla Brophy ${thisYear}`;
footer.appendChild(copyright);

//Adding skills to skill section
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
const skills = ["JavaScript", "HTML", "CSS", "PHP", "GitHub"];

//looping the skills and adding them to ul as list
for (let x of skills) {
  const skill = document.createElement("li");
  skill.textContent = x;
  skillsList.appendChild(skill);
}
