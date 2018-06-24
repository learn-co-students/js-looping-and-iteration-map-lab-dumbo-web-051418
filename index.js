// Code your solution in this file.
function lowerCaseDrivers(arr){
  const newArr = [];
  for(const name of arr){
    newArr.push(name.toLowerCase());
  }
  return newArr;
}

function nameToAttributes(drivers){
  const newArr = [];
  for(const name of drivers){
    let names = name.split(" ");
    newArr.push(
      {
        'firstName': names[0],
        'lastName': names[1]
      }
    );
  }
  return newArr;
}

function attributesToPhrase(drivers){
  for(let i = 0; i < drivers.length; i++){
    drivers[i] = `${drivers[i].name} is from ${drivers[i].hometown}`;
  }
  return drivers;
}
