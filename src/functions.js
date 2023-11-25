import { homeContent } from "./pages/home/home.js";
import { classesContent } from "./pages/classes/classes.js";
import { teachersContent } from "./pages/teachers/teachers.js";
import { studentsContent } from "./pages/students/students.js";
import { aboutContent } from "./pages/about/about.js";
import { contactContent } from "./pages/contact/contact.js";
import { handleHeader } from "./components/header/header.js";

const app = document.getElementById("app");
const mainContent = document.getElementById("main-content");


function renderHeader() {
  return (app.innerHTML = `${handleHeader()}`);
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

export function renderFooter() {
  return (app.innerHTML += ` <nav class="navbar navbar-expand fixed-bottom bg-secondary p-3">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a id="aboutLink" class="nav-link" href="#">
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a id="contactLink" class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav> `);
}

export function renderApp() {
  renderHeader();

  renderContent();

  renderFooter();
}
