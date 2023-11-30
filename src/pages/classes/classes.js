import { classesBodyContainerFragment } from "./components/classes.content.body.js";

export const classesContentFragment = () => {
  return `<section id="classes-content">
  <div class="container mt-5 mx-5 my-3">
    <h4 class ="text-danger">Classes</h4>
  </div>

${classesBodyContainerFragment()}


</section>`;
};
