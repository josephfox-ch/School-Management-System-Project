import { footerLinksFragment } from "./footer.links.js";
import {footerCopyRihgts} from "./footer.copyrights.js"

export function footerNavbarFragment() {
  return ` <nav id="footer-navbar" class="navbar navbar-expand fixed-bottom  p-2 text-center">
    <div class="container-fluid">
      ${footerLinksFragment()}
    
    </div>
    ${footerCopyRihgts}
  </nav> `;
}
