let spaceship = "Helmet"
let newSpaceship = ""

for(let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == "e") {
        newSpaceship += "i"
    } else {
        newSpaceship += spaceship
    }
}

console.log(newSpaceship)