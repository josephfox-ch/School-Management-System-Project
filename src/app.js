 import { renderNavbar,renderFooter } from './functions.js';
document.getElementById("app").innerHTML = `
    <header>
        ${renderNavbar()} 
    </header>
    <main id="main-content">
    </main>
    <footer>
    ${renderFooter()}
    </footer>
`;
