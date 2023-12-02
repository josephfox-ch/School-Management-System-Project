import { studentsBodyContainerFragment } from "./components/students.content.body.js";

export const studentsContentFragment = () => {
  return `<section id="classes-content">
  <div class="container mt-5 mx-5 my-3">
    <h4 class ="text-info">Students</h4>
  </div>

${studentsBodyContainerFragment()}


</section>`;
};
