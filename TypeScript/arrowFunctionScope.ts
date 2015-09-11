function wompRatBlaster() {
    this.hit = 0;
    this.miss = 0;

    // setInterval(function startGame() {
    setInterval(() => {
        var hit = Math.random() > 0.5;
        if (hit) {
            console.log("hits: " + ++this.hit);
        } else {
            console.log("misses: " + ++this.miss);
        }
    }, 500);
}

var game = new wompRatBlaster();