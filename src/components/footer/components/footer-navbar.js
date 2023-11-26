import { footerLinksFragment } from "./footer-links.js";

export function footerNavbarFragment() {
  return ` <nav class="navbar navbar-expand fixed-bottom bg-secondary p-3">
    <div class="container-fluid">
      ${footerLinksFragment()}
    </div>
  </nav> `;
}
