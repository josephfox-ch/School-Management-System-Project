const header = document.getElementById("header");
const footer = document.getElementById("footer");

export function renderNavbar() {
  return (header.innerHTML = `
    
      <nav class="navbar navbar-expand-sm bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">LMS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-sm-0">
              <li class="nav-item">
                <a id="homeLink" class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a id ="classesLink" class="nav-link" href="#" >Classes</a>
              </li>
              <li class="nav-item">
                <a id="teachersLink" class="nav-link" href="#" >Teachers</a>
              </li>
              <li class="nav-item">
                <a id="studentsLink" class="nav-link" href="#">Students</a>
              </li>
            </ul>
            <a href=""><i class="far fa-user-circle fa-3x"></i></a>
          </div>
        </div>
      </nav> `);
}

export function renderFooter() {
  return (footer.innerHTML = ` <nav class="navbar navbar-expand fixed-bottom bg-secondary">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav> `);
}

export function renderApp() {
  renderNavbar();

  renderContent();

  renderFooter();
}
