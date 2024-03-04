function createFile(fileName, data) {
    localStorage.setItem(fileName, data);
}

function postContact() {
    const editContact = localStorage.getItem("edits.json");
    const updateContact = localStorage.getItem("contacts.json")
    
    if (editContact) {
        const nameHTML = document.getElementsByClassName("name");
        const emailHTML = document.getElementsByClassName("email");
        const phoneHTML = document.getElementsByClassName("phone");
        const needEdit = JSON.parse(editContact);
        const needUpdate = JSON.parse(updateContact);

        for (let i = 0; i < updateContact.length; i++) {
            if (needEdit[0].name = needUpdate[i].name)  {
                needUpdate[i].name = nameHTML[0].value
                needUpdate[i].email = emailHTML[0].value
                needUpdate[i].phone = phoneHTML[0].value
                
                localStorage.removeItem("contacts.json");
                console.log("Contacts removed from local storage");
                
                const updatedContact = JSON.stringify(needUpdate);
                createFile("contacts.json", updatedContact);
                break
            } else {
                continue
            }
        }
    }
    else {
        console.log("No contacts found in local storage");
    }

    localStorage.removeItem("edits.json");
    console.log("Contacts removed from local storage");
    location.href = './index.html'
}