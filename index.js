// javascript will ask the databse for the informatin about users contact
// it will populate the table in the index.html file with given data from database

// this function can populate the columns of the table displaying the contacts on the home page
// gets the data from the databse, need to hook that up
function populate() {
    const jsonString = localStorage.getItem("contacts.json");
    if (jsonString) {
        const contacts = JSON.parse(jsonString);
        // Process or display the contacts data however you need here
        console.log(contacts); // Example: Log the parsed contacts
        console.log(contacts.name)
    } else {
        console.log("No contacts found in local storage");
    }

    console.log(contacts[0].name)

    const name = document.getElementsByClassName("name");
    const email = document.getElementsByClassName("email");
    const phone = document.getElementsByClassName("phone");
    const table = document.getElementsByTagName("table");

    for (let i = 0; i < name.length; i++) {
        name[i].innerHTML = nameValues[i]
        email[i].innerHTML = emailValues[i]
        phone[i].innerHTML = phoneValues[i]
    };

    table[0].hidden = false;
}

function getContacts() {

}

function hideContacts() {
    const table = document.getElementsByTagName("table");
    table[0].hidden = true;
}