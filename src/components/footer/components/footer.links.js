import { footerAboutIcon,footerContactIcon } from "../../iconsHTML/icons.js";

export function footerLinksFragment() {
  return `<div class="collapse navbar-collapse">
    <div class="navbar-nav ">
      <a id="aboutLink" class="nav-link text-white" data-content-id="about" href="#">
      ${footerAboutIcon}
      About Us
      </a>
      <a id="contactLink" class="nav-link text-white" data-content-id="contact" href="#">
      ${footerContactIcon}
        Contact
      </a>
    </div>
  </div>`;
}
