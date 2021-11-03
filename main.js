var money = 50;
var bet = 1;
var lock = false;
var slot1 = 10;
var slot2 = 10;
var slot3 = 10;
var slot4 = 10;

function roll() {
    if (bet <= money) {
        var i = 1;
        while (i <= 4) {
            var d = Math.random();
            if (d <= 0.25) {
                document.getElementById(i).src="img/cherry.png"
                if (i == 1) {
                    slot1 = 1;
                }else if (i == 2) {
                    slot2 = 1;
                }else if (i == 3) {
                    slot3 = 1;
                } else {
                    slot4 = 1;
                }
            } else if (d <= 0.47) {
                document.getElementById(i).src="img/pear.png"
                if (i == 1) {slot1 = 2;}
                else if (i == 2) {slot2 = 2;}
                else if (i == 3) {slot3 = 2;}
                else {slot4 = 2;}
            } else if (d <= 0.7) {
                document.getElementById(i).src="img/watermelon.png"
                if (i == 1) {slot1 = 3;}
                else if (i == 2) {slot2 = 3;}
                else if (i == 3) {slot3 = 3;}
                else {slot4 = 3;}
            } else if (d <= 0.87) {
                document.getElementById(i).src="img/apple.png"
                if (i == 1) {slot1 = 4;}
                else if (i == 2) {slot2 = 4;}
                else if (i == 3) {slot3 = 4;}
                else {slot4 = 4;}
            }else {
                document.getElementById(i).src="img/seven.png"
                if (i == 1) {slot1 = 10;}
                else if (i == 2) {slot2 = 10;}
                else if (i == 3) {slot3 = 10;}
                else {slot4 = 10;}
            }
            i += 1;
        }
        checkWins();
    } else {
        alert("ei tarpeeksi rahaa")
    }
}

function setPanos1() {
    bet = 1;
    document.getElementById("betAmount").innerHTML = "PANOS: " + bet + "€";
}
function setPanos2() {
    bet = 2;
    document.getElementById("betAmount").innerHTML = "PANOS: " + bet + "€";
}
function setPanos3() {
    bet = 3;
    document.getElementById("betAmount").innerHTML = "PANOS: " + bet + "€";
}

function checkWins() {
    alert(slot1 + " "  + slot2 + " "  + slot3 + " "  + slot4)
}
