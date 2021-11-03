var money = 50;
var bet = 1;
var lock = true;
var lockedSlot = 0;
var lockedSlotValue = 0;
var slot1 = 10;
var slot2 = 10;
var slot3 = 10;
var slot4 = 10;


function hedelmapeli() {
    if (bet <= money) {
        if (lockedSlot != 1) {
            roll(1)
        }
        if (lockedSlot != 2) {
            roll(2)
        }
        if (lockedSlot != 3) {
            roll(3)
        }
        if (lockedSlot != 4) {
            roll(4)
        }
        checkWins();
    } else {
        alert("Ei ole tarpeeksi rahaa!")
    }
}


function roll(i) {
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
    var keijo = slot1 + slot2 + slot3 + slot4;
    if (slot1 + slot2 + slot3 + slot4 == 4) {
        alert("Voitit " + bet * 3 + " euroa!")
        money += bet*3;
        lock = true;
    } else if (slot1 == 2 && slot2 == 2 && slot3 == 2 && slot4 == 2) {
        alert("Voitit " + bet * 4 + " euroa!")
        money += bet*4;
        lock = true;
    } else if (slot1 == 3 && slot2 == 3 && slot3 == 3 && slot4 == 3) {
        alert("Voitit " + bet * 5 + " euroa!")
        money += bet*5;
        lock = true;
    } else if (slot1 == 4 && slot2 == 4 && slot3 == 4 && slot4 == 4) {
        alert("Voitit " + bet * 6 + " euroa!")
        money += bet*6;
        lock = true;
    } else if (keijo == 31 || keijo ==  32 || keijo ==  33 || keijo ==  34) {
        alert("Voitit " + bet * 5 + " euroa!")
        money += bet*5;
        lock = true;
    } else if (slot1 + slot2 + slot3 + slot4 == 40){
        alert("Voitit " + bet * 10 + " euroa!")
        money += bet*10;
        lock = true;
    } else {
        money -= bet;
        lock = false;
    } 
    document.getElementById("money2").innerHTML = "RAHAA: " + money + "€";
    document.getElementById("5").src = "img/unlocked.png";
    document.getElementById("6").src = "img/unlocked.png";
    document.getElementById("7").src = "img/unlocked.png";
    document.getElementById("8").src = "img/unlocked.png";
    lockedSlot = 0;
}

function locked(i) {
    if (lock == false) {
        if (i == 1) {
            lockedSlot = 1;
            document.getElementById("5").src = "img/locked.png";
        } else if (i == 2) {
            lockedSlot = 2;
            document.getElementById("6").src = "img/locked.png";
        } else if (i == 3) {
            lockedSlot = 3;
            document.getElementById("7").src = "img/locked.png";
        } else if (i == 4) {
            lockedSlot = 4;
            document.getElementById("8").src = "img/locked.png";
        }
        lock = true;
    } else {
        alert("yksi lukko on lukossa jo tai et pysty käyttämään sitä tällä hetkellä!");
    }
}