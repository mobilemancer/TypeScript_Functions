function bestowRoyalAward(droidId) {
    if (typeof droidId === "string") {
        return droidId + " says Thanks!";
    }
    else if (typeof droidId === "number") {
        var droidName = getDroidName(droidId);
        if (droidName !== "") {
            return droidName + " says Thanks!";
        }
        else {
            return "No such droid!";
        }
    }
}
function getDroidName(droidSerial) {
    switch (droidSerial) {
        case 12345:
            return "MSE-6";
        default:
            return "";
    }
}
console.log(bestowRoyalAward(12345));
console.log(bestowRoyalAward("R2-D2"));
console.log(bestowRoyalAward(555));
