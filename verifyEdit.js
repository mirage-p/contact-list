function verify() {
    const table = document.getElementById("table1");

    const jsonString = localStorage.getItem("edits.json");
    const edit = JSON.parse(jsonString)
    console.log(typeof(edit.length))
    
    if (edit.length === 1) {
        location.href = './editContact.html'
    } 
    else {window.alert('Select one contact to edit')}
}

//useful when submitting changes
function goHome() {
    localStorage.removeItem("edits.json");
    console.log("Contacts removed from local storage");
    location.href = './index.html'
}