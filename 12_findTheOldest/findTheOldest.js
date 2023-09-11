const findTheOldest = function(people) {
    let oldest = 0;
    let oldestIndex = -1;
    for(i = 0; i < people.length; i++){
        let age = 0;
        if(people[i].hasOwnProperty("yearOfDeath")){
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        } else{
            age = 2023 - people[i].yearOfBirth;
        }

        if(age > oldest){
            oldest = age;
            oldestIndex = i;
        }
    }
    return people[oldestIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
