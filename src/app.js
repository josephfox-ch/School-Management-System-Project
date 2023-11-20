import { renderApp, renderContent } from "./functions.js";

document.addEventListener("DOMContentLoaded", ()=>{
  renderApp();

  document.getElementById("homeLink").addEventListener("click", () => {
    renderContent("home");
  });

  document.getElementById("classesLink").addEventListener("click", () => {
    renderContent("classes");
  });

  document.getElementById("teachersLink").addEventListener("click", () => {
    renderContent("teachers");
  });

  document.getElementById("studentsLink").addEventListener("click", () => {
    renderContent("students");
  });
} );


