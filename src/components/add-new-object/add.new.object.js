const addNewObjectButton = document.getElementById("add-new-button");

addNewObjectButton.addEventListener("click", () => {
  const action = addButton.getAttribute("data-action");
  switch (action) {
    case "addNewClass":
      createNewClass();
      break;
    case "addNewTeacher":
      createNewTeacher();
      break;

    case "addNewStudent":
      createNewStudent();
      break;

    default:
      break;
  }
});
