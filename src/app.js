import { renderApp, renderContent } from "./functions.js";
import { generateNewObjectModal } from "./components/add-new-object/generate.new.object.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("app").addEventListener("click", (event) => {
    const target = event.target;

    const linkClass = "nav-link";

    if (target.tagName === "A" && target.classList.contains(linkClass) || target.tagName === "I" ) {
      const contentId = target.dataset.contentId;
      renderContent(contentId);

      document
        .getElementById("add-new-button")
        .addEventListener("click", () => {
          generateNewObjectModal();
        });
    }
  });

  renderApp();
});
