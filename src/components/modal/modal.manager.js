export function modalFragment(objectModal) {
  const modal = document.createElement("section");
  modal.innerHTML = `
    <div class="modal" tabindex="-1">
    <div class="modal-dialog">
    <div class="modal-content">
${objectModal.innerHTML}
    </div>
    </div>
    </div>
    `;
  return modal;
}


