let naveName = prompt("Piloto, informe qual é o nome da sua nave")
let entry = prompt("Deseja entrar na dobra espacial? \n1 - Sim \n2 - Não")
let dobra = 0

while (entry == 1) {
   entry = prompt("Deseja realizar a próxima dobra? \n 1 - Sim \n 2 - Não ")
   if (entry == 1) {
       dobra += 1
   } else {
       alert("Contagem encerrada!")
   }
}

alert("Nome da Nave: " +naveName +"\nNúmero de dobras realizadas: " + dobra)

// Resolução "Certa"

/*
let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")

chosenOption = prompt("Deseja entrar em dobra espacial? \n1 - Sim\n2 - Não")

while(chosenOption == 1) {
    warpCount == 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1 - Sim\n2 - Não")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount)

*/



