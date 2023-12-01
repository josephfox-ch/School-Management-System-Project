import { Class } from "../../functions.js";

export function saveNewClassData() {
  const radio1 = document.getElementById("flexRadioDefault1");
  const radio2 = document.getElementById("flexRadioDefault2");
  const selectElement = document.querySelector(".form-select");
  const instructorInput = document.querySelector("#instructorNameInput");
  const classDataInput = document.getElementById("classDataTextArea");

  const selectedRadio = radio1.checked ? radio1 : radio2;

  let newClassInput = new Class();

  if (selectedRadio === radio1) {
    newClassInput.className = selectElement.value;
  } else {
    newClassInput.className = document.querySelector(".form-control").value;
  }
  newClassInput.instructor = instructorInput.value;
  newClassInput.data = classDataInput.value;

  let existingData = localStorage.getItem("classes");
  if (existingData) {
    existingData = JSON.parse(existingData);

    if (!Array.isArray(existingData)) {
      existingData = []; 
    }
  } else {
    existingData = [];
  }

  existingData.push(newClassInput);
  localStorage.setItem("classes", JSON.stringify(existingData));
  console.log("checkpoint");
}

