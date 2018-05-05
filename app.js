var inq = require("inquirer");
var pmpt = inq.createPromptModule();

function CharacterArr(name, hp, strength, defense) {
    this.name = name;
    this.hp = hp;
    this.strenth = strength;
    this.defense = defense;
}

var playyer = {}
var monsterNum = 0;
var monsterArr = [
    new CharacterArr('Preston the Woodland Nymp', 10, 1, 2),
    new CharacterArr('Evil Lord Marisol', 60, 6, 6),
    new CharacterArr('Quinnie The Pool', 100, 10, 10),
    new CharacterArr('Erbtosol', 70, 7, 7),
    new CharacterArr('John the Legend', 99999, 9999, 9999),
]

//console.log(monsterArr);

var playerQS = [{
        type: "input",
        name: "name",
        message: "Choose your name: ",
        default: function () {
            return "Jacob the Ominiscent"
        }
    },
    {
        type: "input",
        name: "hp",
        message: "Choose your HP: ",
        default: function () {
            return 50;
        },
        validate: function (value) {
            if (parseInt(value) <= 50) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "strength",
        message: "Choose your strength: ",
        default: function () {
            return 5;
        },
        validate: function (value) {
            if (parseInt(value) <= 5) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "defense",
        message: "Choose your defense: ",
        default: function () {
            return 5;
        },
        validate: function (value) {
            if (parseInt(value) <= 5) {
                return true;
            } else {
                return false;
            }
        }
    }
]

pmpt(playerQS).then(function (r) {
    player = new CharacterArr(r.name, r.hp, r.strength, r.defense);
    console.log(player);
    game();
})

var gameplayQS = [{
    type: "list",
    name: "choice",
    message: "What do you want to do?",
    choices: ["FIGHT", "SHOP", "DIE", "ITEMS"]
}]

function game() {
    pmpt(gameplayQS).then(function (r) {
        switch (r.choice) {
            case "FIGHT":
                fight();
                break;
            case "SHOP":
                //shop();
                break;
            case "DIE":
                process.exit()
                break;
            case "ITEMS":
                //openBag();
                break;
        }
    })
}

function fight(){
    console.log("hi")
}
