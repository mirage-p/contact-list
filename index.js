// javascript will ask the databse for the informatin about users contact
// it will populate the table in the index.html file with given data from database

// this function can populate the columns of the table displaying the contacts on the home page
// gets the data from the databse, need to hook that up
function populate() {
    const nameValues = ['Miraj', 'Joe', 'Moe'];
    const emailValues = ['miraj@example.com', 'joe@example.com', 'moe@example.com'];
    const phoneValues = ['123-456-7890', '234-567-8901', '345-678-9012'];
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

function hideContacts() {
    const table = document.getElementsByTagName("table");
    table[0].hidden = true;
}

const selectedContacts = document.getElementsByClassName("select")
console.log(selectedContacts)