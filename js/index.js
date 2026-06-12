//Create a new footer
const footer = document.createElement("footer");
//Inserting the footer before the script tag
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

//Looping the skills and adding them to ul as list
for (let x of skills) {
  const skill = document.createElement("li");
  skill.textContent = x;
  skillsList.appendChild(skill);
}

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function (event) {
  // Prevent page refresh
  event.preventDefault();

  // Get values from form fields
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  //Selecting the messages section
  const messageSection = document.querySelector("#messages");

  //selecting ul inside message section
  const messageList = messageSection.querySelector("ul");

  //selecting the li
  const newMessage = document.createElement("li");

  //Create a variable named newMessage that makes a new list item (li) element
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> ${usersMessage} </span>
  `;

  // Create remove button
  const removeButton = document.createElement("button");

  //set innerText to remove
  removeButton.innerText = "remove";
  //set type to button
  removeButton.type = "button";

  //Add an event listener to the removeButton element that handles the "click" event
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  // Add button to message item
  newMessage.appendChild(removeButton);

  // Add message item to list
  messageList.appendChild(newMessage);

  // Clear the form
  messageForm.reset();
});

fetch("https://api.github.com/users/carlabrophy/repos")
  .then((response) => response.json())
  .then((repositories) => {
    console.log(repositories);

    const projectSection = document.querySelector("#projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.textContent = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);

    const projectSection = document.querySelector("#projects");
    const projectList = projectSection.querySelector("ul");

    const errorMessage = document.createElement("li");
    errorMessage.textContent = "Sorry, projects could not be loaded right now.";
    errorMessage.style.color = "red";

    projectList.appendChild(errorMessage);
  });
