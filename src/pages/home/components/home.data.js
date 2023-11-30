import { homePageClassesDataFragment } from "./home.page.class.data.js"
import { homePageTeaachersDataFragment } from "./home.page.teacher.data.js"
import { homePageStudentsDataFragment } from "./home.page.student.data.js"


export const homeBodyContainerFragment = ()=>{
   return` <div class="container d-flex justify-content-center  my-2">
   <div class="row flex-wrap">
     ${homePageClassesDataFragment()}
     ${homePageTeaachersDataFragment()}
     ${homePageStudentsDataFragment()}
   </div>`
  
  }