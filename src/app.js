import { renderApp, renderContent } from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
  renderApp();

  document.getElementById("app").addEventListener("click", (event) => {
    const target = event.target;

    const linkClass = "nav-link";

    if (target.tagName === "A" && target.classList.contains(linkClass)) {
      const contentId = target.dataset.contentId;
      renderContent(contentId);
    }
  });
});
