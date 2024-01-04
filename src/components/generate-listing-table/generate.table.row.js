export function generateTableElement(tdList){
  const tableBody = document.createElement("tbody");

  tdList.forEach((element, index) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
      <th scope="row">${index+1}</th>
      <td>${element}</td>
      <td></td>
    `;
    tableBody.appendChild(tableRow);
  });

  return tableBody;
}