import { handleNavbar } from "./componenets/navbar.js";

export function handleHeader() {
  return ` <header>  ${handleNavbar()} </header>`;
}
