import { handleHeader } from "./components/header/header.js";
import { handleFooter } from "./components/footer/footer.js";
import { homeContent } from "./pages/home/home.js";
import { classesContent } from "./pages/classes/classes.js";
import { teachersContent } from "./pages/teachers/teachers.js";
import { studentsContent } from "./pages/students/students.js";
import { aboutContent } from "./pages/about/about.js";
import { contactContent } from "./pages/contact/contact.js";
import { handleAdditionalContent } from "./components/additional-content/additional-content.js";

const app = document.getElementById("app");
const mainContent = document.getElementById("main-content");

function renderHeader() {
  app.appendChild(handleHeader());
}

export function renderContent(content = "home") {
  switch (content) {
    case "home":
      content = homeContent;
      break;
    case "classes":
      content = classesContent;
      break;
    case "teachers":
      content = teachersContent;
      break;
    case "students":
      content = studentsContent;
      break;
    case "about":
      content = aboutContent;
      break;
    case "contact":
      content = contactContent;
      break;
  }
  mainContent.innerHTML = content;
}
function renderAdditionalContent() {
  app.appendChild(handleAdditionalContent());
}

function renderFooter() {
  app.appendChild(handleFooter());
}

export function renderApp() {
  renderHeader();

  renderContent();

  renderAdditionalContent();

  renderFooter();
}
