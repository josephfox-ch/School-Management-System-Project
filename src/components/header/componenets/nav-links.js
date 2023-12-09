import {
  schoolIcon,
  classessIcon,
  teachersIcon,
  studentsIcon,
} from "../../iconsHTML/icons.js";

export function navLinksFragment() {
  return `<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav mx-5">
      <a id="homeLink" class="nav-link text-white fw-bold" data-content-id="home" aria-current="page" href="#">${schoolIcon}School</a>
      <a id="classesLink" class="nav-link text-danger fw-bold" data-content-id="class" href="#">${classessIcon}Classes</a>
      <a id="teachersLink" class="nav-link text-warning fw-bold" data-content-id="teacher" href="#">${teachersIcon}Teachers</a>
      <a id="studentsLink" class="nav-link text-info fw-bold" data-content-id="student" href="#">${studentsIcon}Students</a> 
    </div>
  </div>`;
}
