var contacts = [
  
  {
  'firstName' : 'John',
  'lastName' : 'Doe',
  'phone' : '(512) 355-0453',
  'email' : 'johndoe@email.com'
  },
  
  {
  'firstName' : 'Jane',
  'lastName' : 'Doe',
  'phone' : '(312) 641-2203',
  'email' : 'janedoe@email.com'
  },
  
  {
  'firstName' : 'Suzie',
  'lastName' : 'Smith',
  'phone' : '(415) 604-4219',
  'email' : 'suziesmith@email.com'
  }
  
];


var listContacts = function() {
  
  for (var i = 0; i < contacts.length; i++) {console.log(contacts[i].firstName + ' ' + contacts[i].lastName);}
      
};

listContacts();