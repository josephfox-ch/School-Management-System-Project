import { generateClassCardsHTML } from "./class.card.generator.js";

let classesCards = generateClassCardsHTML();

export const classesBodyContainerFragment = () => {
  return `<div class="container d-flex justify-content-center  my-2">
  <div class="row flex-wrap">
    ${classesCards}
  </div>`;
};
