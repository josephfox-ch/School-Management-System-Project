
export const StudentListModal = document.createElement("div");

 studentListModal.innerHTML = `
  <div class="modal-header bg-info">
    <h5 class="modal-title text-white">Student List of Teacher</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        
   
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
      Close
    </button>
    <button data-action ="class" type="button" class="btn btn-outline-success saveChanges"data-bs-dismiss="modal">
      Save changes
    </button>
  </div>
`;
