// Code your solution in this file.
function lowerCaseDrivers(array) {
  const result = array.map(function(element) { return element.toLowerCase()});
  return result
};

function nameToAttributes(array) {
  const obj = array.map(function(element) {
    return {firstName: element.split(" ")[0], lastName: element.split(" ")[1]}
  });
  return obj
};

function attributesToPhrase(array) {
  return array.map((element) => {
    return `${element.name} is from ${element.hometown}`
  });
};
