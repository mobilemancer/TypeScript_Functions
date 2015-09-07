function mostAnnoyingGungan(topDog: string, goodSecond?: string){
	console.log("Really annoying Gungan: " + topDog );
	if (goodSecond !== undefined) {
		console.log("And don't forget " + goodSecond);
	}
}

mostAnnoyingGungan("Jar Jar Binks");
mostAnnoyingGungan("Jar Jar Binks", "Rugor Nass");