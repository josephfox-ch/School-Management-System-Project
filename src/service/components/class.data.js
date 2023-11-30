let allClassData = [];

export function getNewClassData() {
  const radio1 = document.getElementById("flexRadioDefault1");
  const radio2 = document.getElementById("flexRadioDefault2");
  const selectElement = document.querySelector(".form-select");
  const instructorInput = document.querySelector("#instructorNameInput");
  const classDataInput = document.getElementById("classDataTextArea");

  const selectedRadio = radio1.checked ? radio1 : radio2;

  let className;
  if (selectedRadio === radio1) {
    className = selectElement.value;
  } else {
    className = document.querySelector(".form-control").value;
  }

  const newClassObject = {
    className: className,
    instructor: instructorInput.value,
    data: classDataInput.value,
  };

  allClassData.push(newClassObject);
  return allClassData;
}
