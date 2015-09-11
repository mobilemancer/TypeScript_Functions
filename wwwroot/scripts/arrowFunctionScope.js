function wompRatBlaster() {
    var _this = this;
    this.hit = 0;
    this.miss = 0;
    setInterval(function () {
        var hit = Math.random() > 0.5;
        if (hit) {
            console.log("hits: " + ++_this.hit);
        }
        else {
            console.log("misses: " + ++_this.miss);
        }
    }, 500);
}
var game = new wompRatBlaster();
