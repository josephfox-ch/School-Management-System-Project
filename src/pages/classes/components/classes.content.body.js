import { generateClassCardsHTML } from "./class.card.generator.js";

export const classesBodyContainerFragment = () => {
  return `<div class="container d-flex justify-content-center  my-2">
  <div class="row flex-wrap">
    ${generateClassCardsHTML()}
  </div>`;
};
