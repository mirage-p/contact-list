function createFile(fileName, data) {
    localStorage.setItem(fileName, data);
}

function createContact() {
    const exitingContacts = JSON.parse(localStorage.getItem("contacts.json")) || [];

    const name = document.getElementsByClassName("name")
    const email = document.getElementsByClassName("email")
    const phone = document.getElementsByClassName("phone")

    const contact = {
        name: name[0].value,
        email: email[0].value,
        phone: phone[0].value,
    }
    
    exitingContacts.push(contact);
    const createdContacts = JSON.stringify(exitingContacts);
    localStorage.setItem("contacts.json", createdContacts);
    location.href = './index.html'
}