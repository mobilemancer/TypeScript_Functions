function jediFreeForAll(firstCombatant: string, secondCombatant: string, ...additionalBrawlers: Array<string>) {
	var numberOfCombatants = (additionalBrawlers.length + 2);
	var winner = Math.floor((Math.random() * numberOfCombatants) + 1);
	console.log(numberOfCombatants + " Jedi's enter the ring, and the winner is:");
	if (winner === 1) {
		console.log(firstCombatant);
	} else if (winner === 2) {
		console.log(secondCombatant);
	} else {
		console.log(additionalBrawlers[winner - 3]);
	}
}

jediFreeForAll("Yoda", "Darth Maul");
jediFreeForAll("Yoda", "Darth Maul", "Ben Kenobi", "Luke Skywalker");
