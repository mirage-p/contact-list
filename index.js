// javascript will ask the databse for the informatin about users contact
// it will populate the table in the index.html file with given data from database

// this function can populate the columns of the table displaying the contacts on the home page
// gets the data from the databse, need to hook that up
function getContacts() {

    const jsonString = localStorage.getItem("contacts.json");
    if (jsonString) {
        const nameHTML = document.getElementsByClassName("name");
        const emailHTML = document.getElementsByClassName("email");
        const phoneHTML = document.getElementsByClassName("phone");
        const table = document.getElementsByTagName("table");
        const contacts = JSON.parse(jsonString);

        for (let i = 0; i < contacts.length; i++) {
            nameHTML[i].innerHTML = contacts[i].name
            emailHTML[i].innerHTML = contacts[i].email
            phoneHTML[i].innerHTML = contacts[i].phone
            table[0].hidden = false;
        }
    } else {
        console.log("No contacts found in local storage");
    }
}

function getEdit() {
    
}

function hideContacts() {
    const table = document.getElementsByTagName("table");
    table[0].hidden = true;
}