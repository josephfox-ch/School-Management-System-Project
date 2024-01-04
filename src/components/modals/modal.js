const modal = document.createElement("section");
document.body.appendChild(modal);

export function generateModalFragment(modalElement) {
  return (modal.innerHTML = `
  <div class="modal fade" id="dynamicModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="dynamicModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    ${modalElement.innerHTML}

</div>
</div>
</div>`);
}
