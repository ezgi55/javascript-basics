const createPerson = (name, age) => {
  return { name : name ,
         age : age 
        }
};

const getName = object => {
  return object.name 
};

const getProperty = (property, object) => {
 return object [property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property) ;
};

const isOver65 = person => {
 if (person.age > 65) {
   return true
 } else {
   return false
 }
};

const getAges = people => {
  return people.map(
    function (person) {
        return person.age;
    }
  )
};

const findByName = (name, people) => {
  return people.find(
    function(person){
      return person.name === name ;
    })
};

const findHondas = cars => {
  return cars.filter(
    function(car){
      return car.manufacturer === 'Honda' ;
    })
};

const averageAge = people => {
  let count = people.length
  let sum = 0

    people.map(person => {
        sum = sum + person.age;
    })

   return sum / count ;
};

const createTalkingPerson = (name, age) => {
  let person = {
    name: name,
    age: age,
    introduce: function(){
      return "Hi Fred, my name is Bill and I am 40!"
     }
  }
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
