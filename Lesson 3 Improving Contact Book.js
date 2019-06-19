var Contact = function (firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.displayContact = function () {console.log(this.firstName + ' ' + this.lastName);};
};

var johnDoe = new Contact('John', 'Doe', '(512) 355-0453', 'johndoe@email.com');
var janeDoe = new Contact('Jane', 'Doe', '(312) 641-2203', 'janedoe@email.com');
var suzieSmith = new Contact('Suzie', 'Smith', '(415) 604-4219', 'suziesmith@email.com');

var contacts = [johnDoe, janeDoe, suzieSmith];

johnDoe.displayContact();

var listContacts = function() { 
    for (var i = 0; i < contacts.length; i++) {contacts[i].displayContact(); } 
};

listContacts();


var addContact = function(newContact) {contacts.push(newContact);};

var mattKlaus = new Contact('Matt', 'Klaus', '(555) 234-0453', 'mattklaus@email.com');


addContact(mattKlaus);
listContacts();