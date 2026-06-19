const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }

    return death - birth;
}

const findTheOldest = function (arr) {
  let oldest = 0;

  for (let i = 0; i < arr.length; i++) {
    const current = getAge(arr[i].yearOfBirth, arr[i].yearOfDeath);

    if (current > oldest) {
      oldest = current;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const age = getAge(arr[i].yearOfBirth, arr[i].yearOfDeath);

    if(age === oldest){
        return arr[i];
    }
  }
};

// Do not edit below this line
module.exports = findTheOldest;
