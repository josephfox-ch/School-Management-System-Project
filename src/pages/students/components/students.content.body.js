import { studentsCards } from "./student.card.generator.js";

export const studentsBodyContainer = `<div class="container d-flex justify-content-center  my-2">
<div class="row flex-wrap">
  ${studentsCards}
</div>`;
