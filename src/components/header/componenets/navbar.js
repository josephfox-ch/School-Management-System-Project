import { navbarBrandFragment } from "./navbar-brand.js";
import { navLinksFragment } from "./nav-links.js";
import { userIconFragment } from "./user-login-icon.js";

export const navbarFragment = function () {
  return `

    <nav id="header-navbar" class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        ${navbarBrandFragment()}
        <button class="navbar-toggler bg-white text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
       ${navLinksFragment()} 
       ${userIconFragment()}

      </div>
      
    </nav> `;
};
