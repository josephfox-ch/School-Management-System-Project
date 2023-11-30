import { getNewClassData } from "./class.data.js";
import { generateClassCardsHTML } from "../../pages/classes/components/class.card.generator.js";

export function saveNewClassData() {
  let newClassData = getNewClassData();

  if (localStorage.getItem("allClassesData")) {
    const existingData = JSON.parse(localStorage.getItem("allClassesData"));
    console.log(existingData);
    existingData.push(newClassData[0]);
    localStorage.setItem("allClassesData", JSON.stringify(existingData));
  } else {
    localStorage.setItem("allClassesData", JSON.stringify(newClassData));
  }
  generateClassCardsHTML();
}

export function getAllClassData() {
  const storedData = localStorage.getItem("allClassesData");

  return storedData ? JSON.parse(storedData) : [];
}
