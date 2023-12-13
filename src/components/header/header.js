import { navbarFragment } from "./componenets/navbar.js";

export function headerFragment() {
  const headerContainer = document.createElement("header");
  headerContainer.innerHTML = navbarFragment();
  return headerContainer;
}
