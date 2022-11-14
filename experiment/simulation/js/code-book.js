function check1() {

    const b11 = document.getElementById("b11").value;
    const b12 = document.getElementById("b12").value;
    const b13 = document.getElementById("b13").value;
    const b14 = document.getElementById("b14").value;
    const b15 = document.getElementById("b15").value;
    const b16 = document.getElementById("b16").value;
    const ans1 = document.getElementById("ans1");
    const obs = document.getElementById("observations");

    if (b11.length == 0 || b12.length == 0 || b13.length == 0
        || b14.length == 0 || b15.length == 0 || b16.length == 0) {
        obs.innerHTML = "<b>C0.</b> Enter all the bits."
        obs.style.color = "black";
        ans1.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b11.length > 1 || b12.length > 1 || b13.length > 1
        || b14.length > 1 || b15.length > 1 || b16.length > 1) {
        obs.innerHTML = "<b>C0.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans1.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b11 > 1 || b11 < 0 || b12 > 1 || b12 < 0 || b13 > 1 || b13 < 0
        || b14 > 1 || b14 < 0 || b15 > 1 || b15 < 0 || b16 > 1 || b16 < 0) {
        obs.innerHTML = "<b>C0.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans1.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b11 == 0 && b12 == 0 && b13 == 0 &&
        b14 == 0 && b15 == 0 && b16 == 0) {
        ans1.innerHTML = "\u2714";
        obs.innerHTML = "<b>C0. Correct Answer!!!</b>";
        obs.style.color = "green";
    }

    else {
        ans1.innerHTML = "\u2716";
        obs.style.color = "red";
        if (obs.innerHTML == "<b>C0. Wrong Answer :(</b>") {
            obs.innerHTML = "<b>C0. Wrong Again :(</b>";
        }
        else {
            obs.innerHTML = "<b>C0. Wrong Answer :(</b>";
        }
    }

}

function check2() {

    const b21 = document.getElementById("b21").value;
    const b22 = document.getElementById("b22").value;
    const b23 = document.getElementById("b23").value;
    const b24 = document.getElementById("b24").value;
    const b25 = document.getElementById("b25").value;
    const b26 = document.getElementById("b26").value;
    const ans2 = document.getElementById("ans2");
    const obs = document.getElementById("observations");


    if (b21.length == 0 || b22.length == 0 || b23.length == 0
        || b24.length == 0 || b25.length == 0 || b26.length == 0) {
        obs.innerHTML = "<b>C1.</b> Enter all the bits."
        obs.style.color = "black";
        ans2.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b21.length > 1 || b22.length > 1 || b23.length > 1
        || b24.length > 1 || b25.length > 1 || b26.length > 1) {
        obs.innerHTML = "<b>C1.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans2.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b21 > 1 || b21 < 0 || b22 > 1 || b22 < 0 || b23 > 1 || b23 < 0
        || b24 > 1 || b24 < 0 || b25 > 1 || b25 < 0 || b26 > 1 || b26 < 0) {
        obs.innerHTML = "<b>C1.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans2.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b21 == 1 && b22 == 1 && b23 == 0 &&
        b24 == 0 && b25 == 1 && b26 == 1) {
        ans2.innerHTML = "\u2714";
        obs.innerHTML = "<b>C1. Correct Answer!!!</b>";
        obs.style.color = "green";
    }

    else {
        ans2.innerHTML = "\u2716";
        obs.style.color = "red";
        if (obs.innerHTML == "<b>C1. Wrong Answer :(</b>") {
            obs.innerHTML = "<b>C1. Wrong Again :(</b>";
        }
        else {
            obs.innerHTML = "<b>C1. Wrong Answer :(</b>";
        }
    }

}

function check3() {

    const b31 = document.getElementById("b31").value;
    const b32 = document.getElementById("b32").value;
    const b33 = document.getElementById("b33").value;
    const b34 = document.getElementById("b34").value;
    const b35 = document.getElementById("b35").value;
    const b36 = document.getElementById("b36").value;
    const ans3 = document.getElementById("ans3");
    const obs = document.getElementById("observations");


    if (b31.length == 0 || b32.length == 0 || b33.length == 0
        || b34.length == 0 || b35.length == 0 || b36.length == 0) {
        obs.innerHTML = "<b>C2.</b> Enter all the bits."
        obs.style.color = "black";
        ans3.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b31.length > 1 || b32.length > 1 || b33.length > 1
        || b34.length > 1 || b35.length > 1 || b36.length > 1) {
        obs.innerHTML = "<b>C2.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans3.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b31 > 1 || b31 < 0 || b32 > 1 || b32 < 0 || b33 > 1 || b33 < 0
        || b34 > 1 || b34 < 0 || b35 > 1 || b35 < 0 || b36 > 1 || b36 < 0) {
        obs.innerHTML = "<b>C2.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans3.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b31 == 1 && b32 == 0 && b33 == 0 &&
        b34 == 1 && b35 == 1 && b36 == 0) {
        ans3.innerHTML = "\u2714";
        obs.innerHTML = "<b>C2. Correct Answer!!!</b>";
        obs.style.color = "green";
    }

    else {
        ans3.innerHTML = "\u2716";
        obs.style.color = "red";
        if (obs.innerHTML == "<b>C2. Wrong Answer :(</b>") {
            obs.innerHTML = "<b>C2. Wrong Again :(</b>";
        }
        else {
            obs.innerHTML = "<b>C2. Wrong Answer :(</b>";
        }
    }

}

function check4() {

    const b41 = document.getElementById("b41").value;
    const b42 = document.getElementById("b42").value;
    const b43 = document.getElementById("b43").value;
    const b44 = document.getElementById("b44").value;
    const b45 = document.getElementById("b45").value;
    const b46 = document.getElementById("b46").value;
    const ans4 = document.getElementById("ans4");
    const obs = document.getElementById("observations");


    if (b41.length == 0 || b42.length == 0 || b43.length == 0
        || b44.length == 0 || b45.length == 0 || b46.length == 0) {
        obs.innerHTML = "<b>C3.</b> Enter all the bits."
        obs.style.color = "black";
        ans4.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b41.length > 1 || b42.length > 1 || b43.length > 1
        || b44.length > 1 || b45.length > 1 || b46.length > 1) {
        obs.innerHTML = "<b>C3.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans4.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b41 > 1 || b41 < 0 || b42 > 1 || b42 < 0 || b43 > 1 || b43 < 0
        || b44 > 1 || b44 < 0 || b45 > 1 || b45 < 0 || b46 > 1 || b46 < 0) {
        obs.innerHTML = "<b>C3.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans4.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b41 == 0 && b42 == 1 && b43 == 0 &&
        b44 == 1 && b45 == 0 && b46 == 1) {
        ans4.innerHTML = "\u2714";
        obs.innerHTML = "<b>C3. Correct Answer!!!</b>";
        obs.style.color = "green";
    }

    else {
        ans4.innerHTML = "\u2716";
        obs.style.color = "red";
        if (obs.innerHTML == "<b>C3. Wrong Answer :(</b>") {
            obs.innerHTML = "<b>C3. Wrong Again :(</b>";
        }
        else {
            obs.innerHTML = "<b>C3. Wrong Answer :(</b>";
        }
    }

}

function check5() {

    const b51 = document.getElementById("b51").value;
    const b52 = document.getElementById("b52").value;
    const b53 = document.getElementById("b53").value;
    const b54 = document.getElementById("b54").value;
    const b55 = document.getElementById("b55").value;
    const b56 = document.getElementById("b56").value;
    const ans5 = document.getElementById("ans5");
    const obs = document.getElementById("observations");


    if (b51.length == 0 || b52.length == 0 || b53.length == 0
        || b54.length == 0 || b55.length == 0 || b56.length == 0) {
        obs.innerHTML = "<b>C4.</b> Enter all the bits."
        obs.style.color = "black";
        ans5.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b51.length > 1 || b52.length > 1 || b53.length > 1
        || b54.length > 1 || b55.length > 1 || b56.length > 1) {
        obs.innerHTML = "<b>C4.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans5.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b51 > 1 || b51 < 0 || b52 > 1 || b52 < 0 || b53 > 1 || b53 < 0
        || b54 > 1 || b54 < 0 || b55 > 1 || b55 < 0 || b56 > 1 || b56 < 0) {
        obs.innerHTML = "<b>C4.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans5.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b51 == 1 && b52 == 1 && b53 == 1 &&
        b54 == 0 && b55 == 0 && b56 == 0) {
        ans5.innerHTML = "\u2714";
        obs.innerHTML = "<b>C4. Correct Answer!!!</b>";
        obs.style.color = "green";
    }

    else {
        ans5.innerHTML = "\u2716";
        obs.style.color = "red";
        if (obs.innerHTML == "<b>C4. Wrong Answer :(</b>") {
            obs.innerHTML = "<b>C4. Wrong Again :(</b>";
        }
        else {
            obs.innerHTML = "<b>C4. Wrong Answer :(</b>";
        }
    }

}

function check6() {

    const b61 = document.getElementById("b61").value;
    const b62 = document.getElementById("b62").value;
    const b63 = document.getElementById("b63").value;
    const b64 = document.getElementById("b64").value;
    const b65 = document.getElementById("b65").value;
    const b66 = document.getElementById("b66").value;
    const ans6 = document.getElementById("ans6");
    const obs = document.getElementById("observations");


    if (b61.length == 0 || b62.length == 0 || b63.length == 0
        || b64.length == 0 || b65.length == 0 || b66.length == 0) {
        obs.innerHTML = "<b>C5.</b> Enter all the bits."
        obs.style.color = "black";
        ans6.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b61.length > 1 || b62.length > 1 || b63.length > 1
        || b64.length > 1 || b65.length > 1 || b66.length > 1) {
        obs.innerHTML = "<b>C5.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans6.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b61 > 1 || b61 < 0 || b62 > 1 || b62 < 0 || b63 > 1 || b63 < 0
        || b64 > 1 || b64 < 0 || b65 > 1 || b65 < 0 || b66 > 1 || b66 < 0) {
        obs.innerHTML = "<b>C5.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans6.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b61 == 0 && b62 == 0 && b63 == 1 &&
        b64 == 0 && b65 == 1 && b66 == 1) {
        ans6.innerHTML = "\u2714";
        obs.innerHTML = "<b>C5. Correct Answer!!!</b>";
        obs.style.color = "green";
    }

    else {
        ans6.innerHTML = "\u2716";
        obs.style.color = "red";
        if (obs.innerHTML == "<b>C5. Wrong Answer :(</b>") {
            obs.innerHTML = "<b>C5. Wrong Again :(</b>";
        }
        else {
            obs.innerHTML = "<b>C5. Wrong Answer :(</b>";
        }
    }

}

function check7() {

    const b71 = document.getElementById("b71").value;
    const b72 = document.getElementById("b72").value;
    const b73 = document.getElementById("b73").value;
    const b74 = document.getElementById("b74").value;
    const b75 = document.getElementById("b75").value;
    const b76 = document.getElementById("b76").value;
    const ans7 = document.getElementById("ans7");
    const obs = document.getElementById("observations");


    if (b71.length == 0 || b72.length == 0 || b73.length == 0
        || b74.length == 0 || b75.length == 0 || b76.length == 0) {
        obs.innerHTML = "<b>C6.</b> Enter all the bits."
        obs.style.color = "black";
        ans7.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b71.length > 1 || b72.length > 1 || b73.length > 1
        || b74.length > 1 || b75.length > 1 || b76.length > 1) {
        obs.innerHTML = "<b>C6.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans7.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b71 > 1 || b71 < 0 || b72 > 1 || b72 < 0 || b73 > 1 || b73 < 0
        || b74 > 1 || b74 < 0 || b75 > 1 || b75 < 0 || b76 > 1 || b76 < 0) {
        obs.innerHTML = "<b>C6.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans7.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b71 == 0 && b72 == 1 && b73 == 1 &&
        b74 == 1 && b75 == 1 && b76 == 0) {
        ans7.innerHTML = "\u2714";
        obs.innerHTML = "<b>C6. Correct Answer!!!</b>";
        obs.style.color = "green";
    }

    else {
        ans7.innerHTML = "\u2716";
        obs.style.color = "red";
        if (obs.innerHTML == "<b>C6. Wrong Answer :(</b>") {
            obs.innerHTML = "<b>C6. Wrong Again :(</b>";
        }
        else {
            obs.innerHTML = "<b>C6. Wrong Answer :(</b>";
        }
    }

}

function check8() {

    const b81 = document.getElementById("b81").value;
    const b82 = document.getElementById("b82").value;
    const b83 = document.getElementById("b83").value;
    const b84 = document.getElementById("b84").value;
    const b85 = document.getElementById("b85").value;
    const b86 = document.getElementById("b86").value;
    const ans8 = document.getElementById("ans8");
    const obs = document.getElementById("observations");


    if (b81.length == 0 || b82.length == 0 || b83.length == 0
        || b84.length == 0 || b85.length == 0 || b86.length == 0) {
        obs.innerHTML = "<b>C7.</b> Enter all the bits."
        obs.style.color = "black";
        ans8.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b81.length > 1 || b82.length > 1 || b83.length > 1
        || b84.length > 1 || b85.length > 1 || b86.length > 1) {
        obs.innerHTML = "<b>C7.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans8.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b81 > 1 || b81 < 0 || b82 > 1 || b82 < 0 || b83 > 1 || b83 < 0
        || b84 > 1 || b84 < 0 || b85 > 1 || b85 < 0 || b86 > 1 || b86 < 0) {
        obs.innerHTML = "<b>C7.</b> Enter values from {0, 1}.";
        obs.style.color = "black";
        ans8.innerHTML = "&nbsp;&nbsp;&nbsp;";
        return;
    }

    else if (b81 == 1 && b82 == 0 && b83 == 1 &&
        b84 == 1 && b85 == 0 && b86 == 1) {
        ans8.innerHTML = "\u2714";
        obs.innerHTML = "<b>C7. Correct Answer!!!</b>";
        obs.style.color = "green";
    }

    else {
        ans8.innerHTML = "\u2716";
        obs.style.color = "red";
        if (obs.innerHTML == "<b>C7. Wrong Answer :(</b>") {
            obs.innerHTML = "<b>C7. Wrong Again :(</b>";
        }
        else {
            obs.innerHTML = "<b>C7. Wrong Answer :(</b>";
        }
    }

}

function reset1() {
    const form1 = document.getElementById("form1");
    const ans1 = document.getElementById("ans1");
    const obs = document.getElementById("observations");

    form1.reset();
    ans1.innerHTML = "&nbsp;&nbsp;&nbsp;";
    obs.innerHTML = "";
}

function reset2() {
    const form2 = document.getElementById("form2");
    const ans2 = document.getElementById("ans2");
    const obs = document.getElementById("observations");

    form2.reset();
    ans2.innerHTML = "&nbsp;&nbsp;&nbsp;";
    obs.innerHTML = "";
}

function reset3() {
    const form3 = document.getElementById("form3");
    const ans3 = document.getElementById("ans3");
    const obs = document.getElementById("observations");

    form3.reset();
    ans3.innerHTML = "&nbsp;&nbsp;&nbsp;";
    obs.innerHTML = "";
}

function reset4() {
    const form4 = document.getElementById("form4");
    const ans4 = document.getElementById("ans4");
    const obs = document.getElementById("observations");

    form4.reset();
    ans4.innerHTML = "&nbsp;&nbsp;&nbsp;";
    obs.innerHTML = "";
}

function reset5() {
    const form5 = document.getElementById("form5");
    const ans5 = document.getElementById("ans5");
    const obs = document.getElementById("observations");

    form5.reset();
    ans5.innerHTML = "&nbsp;&nbsp;&nbsp;";
    obs.innerHTML = "";
}

function reset6() {
    const form6 = document.getElementById("form6");
    const ans6 = document.getElementById("ans6");
    const obs = document.getElementById("observations");

    form6.reset();
    ans6.innerHTML = "&nbsp;&nbsp;&nbsp;";
    obs.innerHTML = "";
}

function reset7() {
    const form7 = document.getElementById("form7");
    const ans7 = document.getElementById("ans7");
    const obs = document.getElementById("observations");

    form7.reset();
    ans7.innerHTML = "&nbsp;&nbsp;&nbsp;";
    obs.innerHTML = "";
}

function reset8() {
    const form8 = document.getElementById("form8");
    const ans8 = document.getElementById("ans8");
    const obs = document.getElementById("observations");

    form8.reset();
    ans8.innerHTML = "&nbsp;&nbsp;&nbsp;";
    obs.innerHTML = "";
}





