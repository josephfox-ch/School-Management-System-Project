import { handleNavbar } from "./componenets/navbar.js";

export function handleHeader() {

  const headerContainer = document.createElement("header")
  headerContainer.innerHTML = handleNavbar()
  return headerContainer;
}
