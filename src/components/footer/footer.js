import { footerNavbarFragment } from "./components/footer.navbar.js";

export function footerFragment() {
  const footerContainer = document.createElement("footer");
  footerContainer.innerHTML = footerNavbarFragment();
  return footerContainer;
}
