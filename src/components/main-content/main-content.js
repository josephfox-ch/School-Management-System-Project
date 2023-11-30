import { homeContent } from "/src/pages/home/home.js";
import { classesContentFragment } from "/src/pages/classes/classes.js";
import { teachersContent } from "/src/pages/teachers/teachers.js";
import { studentsContent } from "/src/pages/students/students.js";
import { aboutContent } from "/src/pages/about/about.js";
import { contactContent } from "/src/pages/contact/contact.js";
import { addNewButtonFragment } from "../add-button-section/add.button.js";

const mainContainer = document.createElement("main");

export function mainContentFragment(content) {
  const customizedAddNewButton = addNewButtonFragment(content);

  let contentHTML;

  switch (content) {
    case "home":
      contentHTML = homeContent;
      break;
    case "class":
      contentHTML = classesContentFragment();
      break;
    case "teacher":
      contentHTML = teachersContent;
      break;
    case "student":
      contentHTML = studentsContent;
      break;
    case "about":
      contentHTML = aboutContent;
      break;
    case "contact":
      contentHTML = contactContent;
      break;
  }

  mainContainer.innerHTML = contentHTML + customizedAddNewButton.innerHTML;

  return mainContainer;
}
