import { homeBodyContainerFragment } from "./components/home.data.js";
import { schoolIcon } from "../../components/iconsHTML/icons.js";

export const homeContent = `
  <section id="home-content">
    <div class="container mt-5 mx-5 my-3">
      ${schoolIcon}
    </div>
    ${homeBodyContainerFragment()}
  </section>
`;
