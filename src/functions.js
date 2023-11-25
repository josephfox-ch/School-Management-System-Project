import { homeContent } from "./pages/home/home.js";
import { classesContent } from "./pages/classes/classes.js";
import { teachersContent } from "./pages/teachers/teachers.js";
import { studentsContent } from "./pages/students/students.js";
import { aboutContent } from "./pages/about/about.js";
import { contactContent } from "./pages/contact/contact.js";

const header = document.getElementById("header");
const mainContent = document.getElementById("main-content");
const footer = document.getElementById("footer");

export function renderNavbar() {
  return (header.innerHTML = `

  <nav class="navbar navbar-expand bg-body-tertiary ">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">LMS</span>
      <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav mx-5 ">
      <a id="homeLink" class="nav-link" aria-current="page" href="#">Home</a>
      <a id ="classesLink" class="nav-link" href="#">Classes</a>
      <a id="teachersLink" class="nav-link" href="#">Teachers</a>
      <a id="studentsLink" class="nav-link" href="#">Students</a> 
    </div>
  </div>
    </div>
    <a id="userLink" href ="#" class ="mx-2"> <i class="far fa-user-circle fa-2x"></i></a>
  </nav> `);
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
  return (footer.innerHTML = ` <nav class="navbar navbar-expand fixed-bottom bg-secondary p-3">
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
  renderNavbar();

  renderContent();

  renderFooter();
}
