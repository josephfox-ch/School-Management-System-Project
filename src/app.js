import { renderApp, renderContent, editItem, removeItem } from "./functions.js";
import { generateNewObjectModal } from "./components/add-new-object/generate.new.object.js";

document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("app");

  appElement.addEventListener("click", (event) => {
    const target = event.target;
    const linkClass = "nav-link";

    if (
      (target.tagName === "A" && target.classList.contains(linkClass)) ||
      target.tagName === "I"
    ) {
      const contentId = target.dataset.contentId;
      renderContent(contentId);

      document
        .getElementById("add-new-button")
        .addEventListener("click", () => {
          generateNewObjectModal();
        });
    }

    if (target.classList.contains("edit-button")) {
      console.log("Event target", target);
      editItem(target.id);
    }
    if (target.classList.contains("remove-button")) {
      console.log("Event target", target);
      removeItem(target.id);
    }
  });

  renderApp();
});
