import { homePageClassesDataFragment } from "./home.page.class.data.js";
import { homePageTeachersDataFragment } from "./home.page.teacher.data.js";
import { homePageStudentsDataFragment } from "./home.page.student.data.js";

export const homeBodyContainerFragment = () => {
  return `
    <div class="container d-flex justify-content-center my-2">
      <div class="row flex-wrap">
        ${homePageClassesDataFragment()}
        ${homePageTeachersDataFragment()}
        ${homePageStudentsDataFragment()}
      </div>
    </div>
  `;
};
