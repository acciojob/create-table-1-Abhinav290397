const Table = document.querySelector("#sampleTable");
function insert_Row() {
    //Write your code here
  const newRow = Table.insertRow(0);

	const cell1 = newRow.insertCell(0);
	cell1.textContent = "New Cell1";

	const cell2 = newRow.insertCell(1);
	cell2.textContent = "New Cell2";
	
}
