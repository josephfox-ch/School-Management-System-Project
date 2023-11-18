export function renderNavbar() {
  return `
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
<div class="container-fluid">
<a class="navbar-brand" href="#">LMS</a>
<button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>

</button>
<div class="collapse navbar-collapse" id="navbarText">
<ul class="navbar-nav me-auto mb-2 mb-sm-0">
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="#">Home</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Classes</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Teachers</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Students</a>
</li>
</ul>
<a href=""><i class="far fa-user-circle fa-3x"></i></a>
</div>
</div>
</nav>
`;
}
