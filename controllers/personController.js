const Person = require('../models/person');

const newPerson = new Person({
    name: 'John Doe',
    age: 25,
    favoriteFoods: ['Pizza', 'Burger']
  });
  // Saving the new person to the database
  newPerson.save(function(err, data) {
    if (err) return console.error(err);
    console.log('New person saved:', data);
  });

  // An array of people data
const arrayOfPeople = [
    { name: 'Alice', age: 30, favoriteFoods: ['Sushi', 'Pasta'] },
    { name: 'Bob', age: 28, favoriteFoods: ['Steak', 'Salad'] },
    // Add more people as needed
  ];
  
  // Create several people using model.create()
  Person.create(arrayOfPeople, function(err, people) {
    if (err) return console.error(err);
    console.log('Multiple people created:', people);
  });

  
  // Find all people with the name 'Alice'
Person.find({ name: 'Alice' }, function(err, people) {
    if (err) return console.error(err);
    console.log('People named Alice:', people);
  });

  
  // Find one person who likes 'Burger'
Person.findOne({ favoriteFoods: 'Burger' }, function(err, person) {
    if (err) return console.error(err);
    console.log('Person who likes Burger:', person);
  });

  
  // Find a person by _id
const personId = '...'; // Replace with the actual ID
Person.findById(personId, function(err, person) {
  if (err) return console.error(err);
  console.log('Person found by ID:', person);
});


// Find a person by ID and update their favoriteFoods
Person.findById(personId, function(err, person) {
    if (err) return console.error(err);
    
    person.favoriteFoods.push('Hamburger');
    person.save(function(err, updatedPerson) {
      if (err) return console.error(err);
      console.log('Updated person:', updatedPerson);
    });
  });

  
  // Find a person by Name and update their age to 20
const personName = 'Alice';
Person.findOneAndUpdate(
  { name: personName },
  { age: 20 },
  { new: true },
  function(err, updatedPerson) {
    if (err) return console.error(err);
    console.log('Updated person:', updatedPerson);
  }
);


// Delete a person by _id
Person.findByIdAndRemove(personId, function(err, removedPerson) {
    if (err) return console.error(err);
    console.log('Removed person:', removedPerson);
  });

  
  // Delete all people with the name 'Mary'
Person.remove({ name: 'Mary' }, function(err, result) {
    if (err) return console.error(err);
    console.log('Deleted people named Mary:', result);
  });
  
