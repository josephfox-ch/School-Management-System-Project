export function navLinksFragment() {
  return `<div class="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav mx-5 ">
      <a id="homeLink" class="nav-link text-black fw-bold" data-content-id ="home" aria-current="page" href="#">Home</a>
      <a id ="classesLink" class="nav-link text-danger fw-bold " data-content-id ="class" href="#">Classes</a>
      <a id="teachersLink" class="nav-link text-warning fw-bold" data-content-id ="teacher" href="#">Teachers</a>
      <a id="studentsLink" class="nav-link text-info fw-bold"data-content-id ="student" href="#">Students</a> 
    </div>
  </div> `;
}
