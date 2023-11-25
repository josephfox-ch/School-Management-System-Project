import { handleNavbarBrand } from "./navbar-brand.js";
import { handleNavLinks } from "./nav-links.js";
import { handleUserLoginIcon } from "./user-login-icon.js";

export const handleNavbar = function () {
  return `
    <nav class="navbar navbar-expand bg-body-tertiary ">
      <div class="container-fluid">
        ${handleNavbarBrand()}
       ${handleNavLinks()} 
      </div>
      ${handleUserLoginIcon()}
    </nav> `;
};
