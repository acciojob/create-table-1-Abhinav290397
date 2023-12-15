function insert_Row() {
    //Write your code here
  const tr1 = document.createElement("tr");
	const td1 = document.createElement("td");
	td1.innerText = "New Cell1";
	const td2 = document.createElement("td");
	td2.innerText = "New Cell2";

	tr1.appendChild(td1);
	tr1.appendChild(td2);
	table.insertBefore(tr1,tr);
}
