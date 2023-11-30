import { navbarBrandFragment } from "./navbar-brand.js";
import { navLinksFragment } from "./nav-links.js";
import { userIconFragment } from "./user-login-icon.js";

export const navbarFragment = function () {
  return `
    <nav class="navbar navbar-expand bg-body-tertiary">
      <div class="container-fluid">
        ${navbarBrandFragment()}
       ${navLinksFragment()} 
      </div>
      ${userIconFragment()}
    </nav> `;
};
