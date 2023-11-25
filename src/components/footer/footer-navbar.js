 import { handleFooterLinks } from "./footer-links.js"
 
 export function handleFooterNavbar(){
    return ` <nav class="navbar navbar-expand fixed-bottom bg-secondary p-3">
    <div class="container-fluid">
      ${handleFooterLinks()}
    </div>
  </nav> `
 }