var m1, m2, m3;
function display() {
    m1 = document.getElementById("m1").value;
    m2 = document.getElementById("m2").value;
    m3 = document.getElementById("m3").value;
    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");
    const mEntered = document.getElementById("mEntered");


    if (m1.length == 0 || m2.length == 0 || m3.length == 0) {

        mEntered.innerHTML = "Enter all the bits.";
        return;

    }

    else if (m1.length > 1 || m2.length > 1 || m3.length > 1) {

        mEntered.innerHTML = "Enter values from the set {0, 1}.";
        return;

    }

    else if (m1 > 1 || m1 < 0 || m2 > 1 || m2 < 0 || m3 > 1 || m3 < 0) {

        mEntered.innerHTML = "Enter values from the set {0, 1}.";
        return;

    }

    else {

        mEntered.innerHTML = "The entered message is [ " + m1 + " " + m2 + " " + m3 + " ].";
        part1.style.display = "none";
        part2.style.display = "block";
        return;

    }
}

function check() {
    const b1 = document.getElementById("b1").value;
    const b2 = document.getElementById("b2").value;
    const b3 = document.getElementById("b3").value;
    const b4 = document.getElementById("b4").value;
    const b5 = document.getElementById("b5").value;
    const b6 = document.getElementById("b6").value;
    const obs = document.getElementById("observations");
    const cEntered = document.getElementById("cEntered");
    var c1, c2, c3, c4, c5, c6;

    c1 = parseInt(m1);
    c2 = parseInt(m2);
    c3 = parseInt(m3);
    c4 = (c1 + c3) % 2;
    c5 = (c1 + c2) % 2;
    c6 = (c2 + c3) % 2;


    if (b1.length == 0 || b2.length == 0 || b3.length == 0 || b4.length == 0 || b5.length == 0 || b6.length == 0) {

        cEntered.innerHTML = "Enter all the bits.";
        cEntered.style.color = "black";
        return;
    }

    else if (b1.length > 1 || b2.length > 1 || b3.length > 1 || b4.length > 1 || b5.length > 1 || b6.length > 1) {

        cEntered.innerHTML = "Enter values from the set {0, 1}.";
        cEntered.style.color = "black";
        return;

    }

    else if (b1 > 1 || b1 < 0 || b2 > 1 || b2 < 0 || b3 > 1 || b3 < 0 || b4 > 1 || b4 < 0 || b5 > 1 || b5 < 0 || b6 > 1 || b6 < 0) {

        cEntered.innerHTML = "Enter values from the set {0, 1}.";
        cEntered.style.color = "black";
        return;

    }

    else if ((b1 == c1) && (b2 == c2) && (b3 == c3) && (b4 == c4) && (b5 == c5) && (b6 == c6)) {

        cEntered.innerHTML = "<b>Correct Answer!!!</b>";
        cEntered.style.color = "green";
        return;
    }

    else {
        if (cEntered.innerHTML == "<b>Wrong Answer :(</b>") {
            cEntered.innerHTML = "<b>Wrong Again :(</b>";
            cEntered.style.color = "red";
            return;
        }

        else {
            cEntered.innerHTML = "<b>Wrong Answer :(</b>";
            cEntered.style.color = "red";
            return;
        }
    }
}

function initial() {
    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const mEntered = document.getElementById("mEntered");
    const cEntered = document.getElementById("cEntered");

    mEntered.innerHTML = "";
    cEntered.innerHTML = "";

    part1.style.display = "block";
    part2.style.display = "none";
    form1.reset();
    form2.reset();

}
