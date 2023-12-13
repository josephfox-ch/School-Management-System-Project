export function generateTableElement(tdList){
  const tableRow =  document.createElement("tr");
tdList.forEach((element,index) => 
  tableRow.innerHTML+= `
  <th scope="row">${index+1}</th>
      <td>${element}</td>
      <td></td>
      <td></td>
`);
return tableRow;

}