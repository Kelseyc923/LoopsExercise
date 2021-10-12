// LOOPS EXERCISE

// 1 
for (i = 1; i <= 7; i++){
    console.log(i);
}

console.log("=======");

// 2
for (i = 5; i <= 25; i+=4){
    console.log(i);
}
console.log("=======");

// 3a
const wizards = [
    "Harry Potter",
    "Hermoine Granger",
    "Ron Weasley"
];

console.log("=======");

// 3b
for (items of wizards){
    console.log(items);
}

console.log("=======");

// 4a
let harryPotterMovies = 0;

console.log("=======");

// 4b
while (harryPotterMovies < 8){
    harryPotterMovies++;
}

console.log("=======");

// 4c 
console.log(harryPotterMovies);

console.log("=======");

// BONUS
// 5a 
const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
];

console.log("=======");

// 5b 
for (houses of hogwartsHouses){
    for (letters of houses){
        console.log(letters);
    }
}

console.log("=======");

// 6a
const quote = ["Yer", "A", "Wizard", "Harry"];

console.log("=======");

// 6b
let sentence = "";
for (word of quote){
    sentence += `${word} `;
    console.log(sentence);
}
console.log(sentence.trim());

// let sentence = "";
// while (quote !== sentence){