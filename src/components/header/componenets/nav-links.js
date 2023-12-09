export function navLinksFragment() {
  return `<div class="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav mx-5 ">
      <a id="homeLink" class="nav-link" data-content-id ="home" aria-current="page" href="#">Home</a>
      <a id ="classesLink" class="nav-link" data-content-id ="class" href="#">Classes</a>
      <a id="teachersLink" class="nav-link" data-content-id ="teacher" href="#">Teachers</a>
      <a id="studentsLink" class="nav-link"data-content-id ="student" href="#">Students</a> 
    </div>
  </div> `;
}
