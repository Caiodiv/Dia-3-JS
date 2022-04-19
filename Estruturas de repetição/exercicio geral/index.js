/* let navName = prompt("Qual é o nome da nave?")
let newName = ""

for (let i = navName.length - 1; i >= 0; i--) {
    if (navName[i] == "e") {
        break
    }
    newName += navName[i] 
}
alert("Nome original da nave é: " + navName + "\nNome reverso com ocultação: " + newName)
*/
let spaceship = prompt("Qual é o nome da sua nave?")
let invertedName = ""

for(let i = spaceship.length - 1; i >= 0; i--) {
    if(spaceship[i] == "e") {
        break
    } invertedName += spaceship[i]
}

alert("Nome original da nave é: " + spaceship + "\nNome reverso com ocultação: " + invertedName)
