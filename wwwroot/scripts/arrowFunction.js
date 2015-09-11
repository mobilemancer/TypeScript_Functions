function droidName(droidSerial) {
    switch (droidSerial) {
        case 12345:
            return "MSE-6";
        default:
            return "Error!";
    }
}
var a = function (x) { return droidName(x); };
var b = function (x) { return droidName(x); };
var c = function (x) { return droidName(x); };
var d = function (x) { return droidName(x); };
console.log(a(12345));
console.log(b(12345));
console.log(c(12345));
console.log(d(12345));
