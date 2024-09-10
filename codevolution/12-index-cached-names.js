const name = require("./11-cached-names-module")

const master = new Name("Master Blaster")
console.log(master.getName())
master.setName("Mastah Blastah")
console.log(master.getName())



/* const name = require("./11-cached-names-module")
console.log(name.getName())
name.setName("Mastah Blastah")
console.log(name.getName())

const newName = require("./11-cached-names-module")
console.log(newName.getName()) */