import { generateStudentCardsHTML } from "./student.card.generator.js";

export const studentsBodyContainerFragment = () => {
  return `<div class="container d-flex justify-content-center  my-2">
  <div class="row flex-wrap">
    ${generateStudentCardsHTML()}
  </div>`;
};
