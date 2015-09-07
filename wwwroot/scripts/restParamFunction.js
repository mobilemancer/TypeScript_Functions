function jediFreeForAll(firstCombatant, secondCombatant) {
    var additionalBrawlers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalBrawlers[_i - 2] = arguments[_i];
    }
    var numberOfCombatants = (additionalBrawlers.length + 2);
    var winner = Math.floor((Math.random() * numberOfCombatants) + 1);
    console.log(numberOfCombatants + " Jedi's enter the ring, and the winner is:");
    if (winner === 1) {
        console.log(firstCombatant);
    }
    else if (winner === 2) {
        console.log(secondCombatant);
    }
    else {
        console.log(additionalBrawlers[winner - 3]);
    }
}
jediFreeForAll("Yoda", "Darth Maul");
jediFreeForAll("Yoda", "Darth Maul", "Ben Kenobi", "Luke Skywalker");
