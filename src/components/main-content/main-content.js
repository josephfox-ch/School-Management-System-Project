import { homeContent } from "/src/pages/home/home.js";
import { classesContent } from "/src/pages/classes/classes.js";
import { teachersContent } from "/src/pages/teachers/teachers.js";
import { studentsContent } from "/src/pages/students/students.js";
import { aboutContent } from "/src/pages/about/about.js";
import { contactContent } from "/src/pages/contact/contact.js";
import { addNewButtonFragment } from "../add-button-section/add-button.js";

const mainContainer = document.createElement("main");

export function mainContentFragment(content) {
  const customizedAddNewButton = addNewButtonFragment(content);

  switch (content) {
    case "home":
      content = homeContent;
      break;
    case "class":
      content = classesContent;
      break;
    case "teacher":
      content = teachersContent;
      break;
    case "student":
      content = studentsContent;
      break;
    case "about":
      content = aboutContent;
      break;
    case "contact":
      content = contactContent;
      break;
  }
  mainContainer.innerHTML = content;

  mainContainer.appendChild(customizedAddNewButton);

  return mainContainer;
}
