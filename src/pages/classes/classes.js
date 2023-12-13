import { classesBodyContainerFragment } from "./components/classes.content.body.js";
import { classessIcon } from "../../components/iconsHTML/icons.js";

export const classesContentFragment = () => {
  return `<section id="classes-content">
  <div class="container mt-5 mx-5 my-3">
    ${classessIcon}
  </div>

${classesBodyContainerFragment()}


</section>`;
};
