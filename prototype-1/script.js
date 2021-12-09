document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var work = readwork();
    insertNewRow(work);
})


function readwork() {

    var work = {};
    work["Titre"] = document.getElementById("inputTitre").value;
    work["Auteur"] = document.getElementById("inputAuteur").value;
    work["Prix"] = parseFloat(document.getElementById("inputPrix").value);
    work["date"] = document.getElementById("inputDate").value;
    work["langue"] = document.getElementById("inputLangue").value;
    var cheackValues = document.getElementsByName("workType");
    for (var i = 0; i < cheackValues.length; i++) {
        if (cheackValues[i].checked) {
            work["type"] = cheackValues[i].value;
            break;
        }
    }
    return work;
}



function insertNewRow(work) {
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = work.Titre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = work.Auteur;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = work.Prix;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = work.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = work.language
    cell6 = newRow.insertCell(5)
    cell6.innerHTML = work.type
    cell7 = newRow.insertCell(6)


}