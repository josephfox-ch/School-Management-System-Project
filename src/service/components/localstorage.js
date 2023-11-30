export function saveNewClassData(newClassData) {
  console.log(newClassData);

  if (localStorage.getItem("allClassesData")) {
    const existingData = JSON.parse(localStorage.getItem("allClassesData"));
    existingData.push(newClassData);
    localStorage.setItem("allClassesData", JSON.stringify(existingData));
  } else {
    localStorage.setItem("allClassesData", JSON.stringify(newClassData));
  }
}

export function getAllClassData() {
  const storedData = localStorage.getItem("allClassesData");

  return storedData ? JSON.parse(storedData) : [];
}
