export function navLinksFragment() {
  return `<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav mx-5">
      <a id="homeLink" class="nav-link text-white fw-bold" data-content-id="home" aria-current="page" href="#"><i class="fa-solid fa-school fa-2x text-white mx-2"></i>School</a>
      <a id="classesLink" class="nav-link text-danger fw-bold" data-content-id="class" href="#"><i class="fa-solid fa-chalkboard fa-2x mx-2"></i>Classes</a>
      <a id="teachersLink" class="nav-link text-warning fw-bold" data-content-id="teacher" href="#"><i class="fa-solid fa-chalkboard-user fa-2x mx-2"></i>Teachers</a>
      <a id="studentsLink" class="nav-link text-info fw-bold" data-content-id="student" href="#"><i class="fa-solid fa-graduation-cap fa-2x mx-2"></i>Students</a> 
    </div>
  </div>`;
}

