import { headerFragment } from "./components/header/header.js";
import { footerFragment } from "./components/footer/footer.js";
import { mainContentFragment } from "./components/main-content/main-content.js";
import { additionalContainer } from "./components/additional-content/additional-content.js";

const app = document.getElementById("app");

function renderHeader() {
  app.innerHTML = headerFragment().innerHTML;
}

export function renderContent(content = "home") {
  renderHeader();
  app.innerHTML +=
    mainContentFragment(content).innerHTML + additionalContainer.innerHTML;
  renderFooter()
}

function renderFooter() {
  app.innerHTML += footerFragment().innerHTML;
}

export function renderApp() {
  renderHeader();

  renderContent();

  renderFooter();
}
