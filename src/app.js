import { renderApp, renderContent } from "./functions.js";

document.addEventListener("DOMContentLoaded", renderApp);

document.addEventListener("DOMContentLoaded", () => {
  const homeLink = document.getElementById("homeLink");
  const classesLink = document.getElementById("classesLink");
  const teachersLink = document.getElementById("teachersLink");
  const studentsLink = document.getElementById("studentsLink");

  homeLink.addEventListener("click", () => {
    renderContent("home-content");
  });

  classesLink.addEventListener("click", () => {
    renderContent("classes-content");
  });

  teachersLink.addEventListener("click", () => {
    renderContent("teachers-content");
  });

  studentsLink.addEventListener("click", () => {
    renderContent("students-content");
  });
});
