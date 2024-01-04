import { addEventListeners } from "./components/event-listeners/add.event.listeners.js";
import { renderApp } from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
  addEventListeners();
  renderApp();
});
