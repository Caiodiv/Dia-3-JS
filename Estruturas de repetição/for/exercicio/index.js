let navName = prompt("Digite o nome de sua espaçonave")
let caracter = prompt("Qual caractere você deseja substituir? ")
let subCaracter = prompt("Por qual caractere você desejaria substituir? ")
let newName = ""

for(let i = 0; i < navName.length; i++) {
    if (navName[i] == caracter) {
        newName += subCaracter
    } else {
        newName += navName[i]
    }
}

alert("O novo nome da nave é " + newName)

// Resolução "Certa"

/*

let spaceship = prompt("Digite o nome da nave")

let charToReplace = prompt("Qual caracter você deseja substituir?")

let replacementChar = prompt("Por qual caracter você deseja substituir?")

let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == charToReplace) {
        newSpaceship += replacementChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert("O novo nome da nave é " + newSpaceship) 
*/

// Elemental
// e
// h

// pos = 0     E     e    newSpaceShip = E
// pos = 1     l     e    newSpaceShip = El
// pos = 2     e     e    newSpaceShip = Elh

// ...

// pos = 8     l     e    newSpaceShip = Elhmhntal