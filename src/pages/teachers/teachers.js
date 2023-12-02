import { teachersBodyContainerFragment } from "./components/teachers.content.body.js";

export const teachersContentFragment = () => {
  return `<section id="classes-content">
  <div class="container mt-5 mx-5 my-3">
    <h4 class ="text-warning">Teachers</h4>
  </div>

${teachersBodyContainerFragment()}


</section>`;
};
