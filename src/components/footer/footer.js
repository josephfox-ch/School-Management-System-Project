import { handleFooterNavbar } from "./footer-navbar.js";

export function handleFooter() {
  const footerContainer = document.createElement("footer");
  footerContainer.innerHTML = handleFooterNavbar();
  return footerContainer;
}
