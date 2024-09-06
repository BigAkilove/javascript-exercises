const findTheOldest = function(people) {
    let returningArray = []
    
    people.forEach((person,index) => {

        let personNumber = index
        let birthYear = person.yearOfBirth;
        let deathYear = person.yearOfDeath;

        if (!deathYear) {
            deathYear = new Date
            deathYear = deathYear.getFullYear()
        }
        let age = deathYear - birthYear
        returningArray.push(personNumber,age)
    })

    return people[returningArray[returningArray.indexOf(Math.max(...returningArray))-1]]
};

// Do not edit below this line
module.exports = findTheOldest;
