const Table = document.querySelector("#sampleTable");
function insert_Row() {
    //Write your code here
  const newRow = Table.insertRow(0);

	const cell1 = newRow.insert(0);
	Cell1.innerText = "New Cell1";

	const cell2 = newRow.insert(1);
	cell2.innerText = "New Cell2";
	
}
