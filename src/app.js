import { renderApp, renderContent } from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
  renderApp();

  document.getElementById("homeLink").addEventListener("click", () => {
    renderContent("home");
  });

  document.getElementById("classesLink").addEventListener("click", () => {
    renderContent("class");
  });

  document.getElementById("teachersLink").addEventListener("click", () => {
    renderContent("teacher");
  });

  document.getElementById("studentsLink").addEventListener("click", () => {
    renderContent("student");
  });

  document.getElementById("aboutLink").addEventListener("click", () => {
    renderContent("about");
  });

  document.getElementById("contactLink").addEventListener("click", () => {
    renderContent("contact");
  });
});
