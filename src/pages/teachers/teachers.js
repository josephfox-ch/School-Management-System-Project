import { teachersBodyContainerFragment } from "./components/teachers.content.body.js";
import { teachersIcon } from "../../components/iconsHTML/icons.js";

export const teachersContentFragment = () => {
  return `<section id="classes-content">
  <div class="container mt-5 mx-5 my-3">
    ${teachersIcon}
  </div>

${teachersBodyContainerFragment()}


</section>`;
};
