import { studentsBodyContainerFragment } from "./components/students.content.body.js";
import { studentsIcon } from "../../components/iconsHTML/icons.js";

export const studentsContentFragment = () => {
  return `<section id="classes-content">
  <div class="container mt-5 mx-5 my-3">
    ${studentsIcon}
  </div>

${studentsBodyContainerFragment()}


</section>`;
};
