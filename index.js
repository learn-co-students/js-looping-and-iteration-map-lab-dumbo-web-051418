// Code your solution in this file.
function lowerCaseDrivers(arr){
  return arr.map(function(element){
    return element.toLowerCase();
  });
}

function nameToAttributes(arr){
  return arr.map(function(element){
    let splitName = element.split(" ");
    let driverFirst = splitName[0];
    let driverLast = splitName[1];
    return {firstName: driverFirst, lastName: driverLast};
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(element){
    return `${element.name} is from ${element.hometown}`;
  })
}
