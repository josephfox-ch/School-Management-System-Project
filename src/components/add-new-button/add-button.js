export function createAddNewButtonContainer(content) {
  const addNewButtonContainer = document.createElement("div");
  if (content == "class" || content == "teacher" || content == "student") {
    addNewButtonContainer.classList.add("container", "text-center", "my-3");

    addNewButtonContainer.innerHTML = `
          <div>
            <a href="#">
              <img class="text-white" src="./assets/images/plus-circle-icon.png" alt="Add New Class"></img>
            </a>
          </div>
          <p>Add New ${capitalizeFirstLetter(content)}</p>
        `;
  }
  return addNewButtonContainer;
}



function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
