import { headerFragment } from "./components/header/header.js";
import { footerFragment } from "./components/footer/footer.js";
import { mainContentFragment } from "./components/main-content/main-content.js";
import { additionalContainer } from "./components/additional-content/additional-content.js";
import { saveDataToLocalStorage } from "./utils.js";

const app = document.getElementById("app");

function renderHeader() {
  app.innerHTML = headerFragment().innerHTML;
}

export function renderContent(contentId = "home") {
  renderHeader();
  app.innerHTML +=
    mainContentFragment(contentId).innerHTML + additionalContainer.innerHTML;
  renderFooter();
}

function renderFooter() {
  app.innerHTML += footerFragment().innerHTML;
}

export function renderApp() {
  renderHeader();

  renderContent();
}

export function manageSavingEvents() {
  const saveChangesButtons = [
    ...document.getElementsByClassName("saveChanges"),
  ];

  saveChangesButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const dataType = event.target.id;
      saveDataToLocalStorage(dataType);
      // location.reload();
    });
  });
}
