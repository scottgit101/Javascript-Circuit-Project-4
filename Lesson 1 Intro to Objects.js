var cat = {
    name: 'Felix',
  
    breed: 'Calico',
    age: 10,
    makeNoise: function() {console.log('Meow!');},
  
    exercise: function() {console.log('Felix chases the mouse.');}
};

cat.makeNoise();

cat.exercise();






var book = {
    author: 'Harper Lee',
   
    title: 'To Kill A Mockingbird',
    year: 1960,
    rating: 4.2,
    startReading: function() {console.log('Reading begins!');},
    
    stopReading: function() {console.log('Reading ends.');}
};

book.startReading();

book.stopReading();


var car = {
    make: 'Volkswagen',
    
    model: 'Samba Bus',

   
    year: 1951,
    start: function() {console.log('Vroom!!!');},
  
    stop: function() {console.log('Screeech!!');
                     }
};

car.start();

car.stop();

console.log(car.make);

console.log(car.model);