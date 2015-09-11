function droidName(droidSerial: number): string {
    switch (droidSerial) {
        case 12345:
            return "MSE-6";
        default:
            return "Error!";
    }
}

var a = (x) => droidName(x);
var b = x => droidName(x);
var c = (x) => { return droidName(x) };
var d = x => { return droidName(x) };

console.log(a(12345));
console.log(b(12345));
console.log(c(12345));
console.log(d(12345));