/* 
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.******
Write the command to remove "Juan" from the array.**********
Write the command to move "Luis" to the front of the array.******
Write the command to add your name to the end of the array.******
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.

*/
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//imprimiendo todos los nombres en consola
console.log(people);//['Maria', 'Dani','Luis', 'Juan', 'Camila']
//eliminando a dani
console.log(people.splice(1,1));
console.log(people); //(4) ['Maria', 'Luis', 'Juan', 'Camila']
//eliminando a juan
console.log(people.splice(2,1));
console.log(people);//(3) ['Maria', 'Luis', 'Camila']
//eliminando a luis
console.log(people.splice(1,1));
//añadiendo al luis al principio del array
people.unshift("Luis");
console.log(people);//(3) ['Luis', 'Maria', 'Camila']
//añadiendo mi nombre al final del array
console.log(people.push("Lorena"));
console.log(people);//(4) ['Luis', 'Maria', 'Camila', 'Lorena']
//ciclo for para iterar los nombres y que se detenga el ciclo en "Maria"
for (let names of people) {
    console.log(names);
    if (names === "Maria") {
        break; 
    }
}
//indexOf para conocer el indice de maria e imprimirlo en la consola
let mariaIndex = people.indexOf("Maria");
console.log(mariaIndex);