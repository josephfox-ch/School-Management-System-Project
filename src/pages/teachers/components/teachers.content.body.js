import { generateTeacherCardsHTML } from "./teacher.card.generator.js";

export const teachersBodyContainerFragment = () => {
  return `<div class="container d-flex justify-content-center  my-2">
  <div class="row flex-wrap">
    ${generateTeacherCardsHTML()}
  </div>`;
};
