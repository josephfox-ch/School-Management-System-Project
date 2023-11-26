import { headerFragment } from "./components/header/header.js";
import { footerFragment } from "./components/footer/footer.js";
import { mainContentFragment } from "./components/main-content/main-content.js";
import { additionalContainer } from "./components/additional-content/additional-content.js";

const app = document.getElementById("app");

function renderHeader() {
  app.appendChild(headerFragment());
}

export function renderContent(content = "home") {
  app.appendChild(mainContentFragment(content));
  app.appendChild(additionalContainer);
}

function renderFooter() {
  app.appendChild(footerFragment());
}

export function renderApp() {
  renderHeader();

  renderContent();

  renderFooter();
}
