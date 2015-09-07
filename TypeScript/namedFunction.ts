var droidNames: Array<string> = ["C3-PO", "R2-D2"];

function vadersOrders(droids: Array<string>): void {
	console.log("Find the following droids:");
	droids.forEach(element => {
		console.log(element);
	});
}

vadersOrders(droidNames);