function createFile(fileName, data) {
    localStorage.setItem(fileName, data);
}

function clearChecked() {
    localStorage.removeItem("edits.json");
    console.log("Contacts removed from local storage");
}

function readContact() {
    const table = document.getElementById("table1");
    const tableRows = table.getElementsByTagName("input")
    const json = [];

    for (let i = 0; i < tableRows.length; i++) {
        if (tableRows[i].checked) {
            const name = document.getElementsByClassName("name")
            const email = document.getElementsByClassName("email")
            const phone = document.getElementsByClassName("phone")
            const contact = {
                name: name[i].innerHTML,
                email: email[i].innerHTML,
                phone: phone[i].innerHTML,
            }
            json.push(contact);
        }
    }
    const jsonString = JSON.stringify(json);
    createFile("edits.json", jsonString);
}