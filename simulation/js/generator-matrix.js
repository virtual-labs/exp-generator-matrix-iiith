var array = [];
var cnt = 0;
function change(id) {
    const background = document.getElementById(id).style.backgroundColor;
    const display = document.getElementById("display");
    const ans = document.getElementById("ans");
    const comment = document.getElementById("comment");


    display.style.display = "none";
    ans.style.display = "none";
    comment.style.display = "none";


    if (background == "rgb(26, 255, 0)") {
        document.getElementById(id).style.background = "rgb(200, 200, 200)";

        for (var i = 0; i < array.length; i++) {
            // console.log(array);
            if (array[i] === id) {
                array.splice(i, 1);
                cnt--;
            }
        }
    }

    else {
        if (cnt < 3) {
            document.getElementById(id).style.background = "rgb(26,255,0)";
            array.push(id);
            cnt++;
        }
    }

}

function check() {
    // console.log(cnt);
    if (cnt < 3) {
        comment.style.display = "block";
        comment.innerHTML = "Select 3 codewords."
    }

    else {

        const display = document.getElementById("display");
        const ans = document.getElementById("ans");
        const comment = document.getElementById("comment");
        const r1 = document.getElementById("r1");
        const r2 = document.getElementById("r2");
        const r3 = document.getElementById("r3");


        var row1 = document.getElementById(array[0]).innerText;
        var row2 = document.getElementById(array[1]).innerText;
        var row3 = document.getElementById(array[2]).innerText;


        display.style.display = "block";

        row1 = row1.substring(2, 13);
        row2 = row2.substring(2, 13);
        row3 = row3.substring(2, 13);

        r1.textContent = row1;
        r2.textContent = row2;
        r3.textContent = row3;

        var flag1 = 0;
        var flag2 = 0;
        var flag3 = 0;
        var flag4 = 0;
        var flag5 = 0;
        var flag6 = 0;
        var flag7 = 0;


        if (array[0] == "w1" || array[1] == "w1" || array[2] == "w1") {
            ans.style.display = "block";
            comment.style.display = "block";
            ans.innerHTML = "<b>Wrong Answer :(</b>";
            ans.style.color = "red";
            comment.innerHTML = "<i>Comment</i>: Generator matrix cannot have an all zero row.";
        }

        else {
            for (var i = 0; i < array.length; i++) {
                if (array[i] == "w2" || array[i] == "w3" || array[i] == "w4") {
                    flag1++;
                }
            }

            for (var i = 0; i < array.length; i++) {
                if (array[i] == "w2" || array[i] == "w5" || array[i] == "w6") {
                    flag2++;
                }
            }

            for (var i = 0; i < array.length; i++) {
                if (array[i] == "w2" || array[i] == "w7" || array[i] == "w8") {
                    flag3++;
                }
            }

            for (var i = 0; i < array.length; i++) {
                if (array[i] == "w3" || array[i] == "w5" || array[i] == "w7") {
                    flag4++;
                }
            }

            for (var i = 0; i < array.length; i++) {
                if (array[i] == "w3" || array[i] == "w6" || array[i] == "w8") {
                    flag5++;
                }
            }

            for (var i = 0; i < array.length; i++) {
                if (array[i] == "w4" || array[i] == "w5" || array[i] == "w8") {
                    flag6++;
                }
            }

            for (var i = 0; i < array.length; i++) {
                if (array[i] == "w4" || array[i] == "w6" || array[i] == "w7") {
                    flag7++;
                }
            }

            if (flag1 == 3 || flag2 == 3 || flag3 == 3 || flag4 == 3 || flag5 == 3 || flag6 == 3 || flag7 == 3) {
                ans.style.display = "block";
                comment.style.display = "block";
                ans.innerHTML = "<b>Wrong Answer :(</b>";
                ans.style.color = "red";
                comment.innerHTML = "<i>Comment</i>: Generator matrix cannot have linearly dependent rows.";
            }

            else if (array[0] == "w5" && array[1] == "w3" && array[2] == "w2") {
                ans.style.display = "block";
                comment.style.display = "block";
                ans.innerHTML = "<b>Correct Answer!!!</b>";
                ans.style.color = "green";
                comment.innerHTML = "<i>Comment</i>: This is the systematic generator matrix.";
            }

            else {
                ans.style.display = "block";
                comment.style.display = "block";
                ans.innerHTML = "<b>Correct Answer!!!</b>";
                ans.style.color = "green";
                comment.innerHTML = "<i>Comment</i>: This is a valid generator matrix";
            }
        }


    }

}

function deselect() {

    const display = document.getElementById("display");
    const ans = document.getElementById("ans");
    const comment = document.getElementById("comment");


    display.style.display = "none";
    ans.style.display = "none";
    comment.style.display = "none";

    document.getElementById("w1").style.background = "rgb(200, 200, 200)";
    document.getElementById("w2").style.background = "rgb(200, 200, 200)";
    document.getElementById("w3").style.background = "rgb(200, 200, 200)";
    document.getElementById("w4").style.background = "rgb(200, 200, 200)";
    document.getElementById("w5").style.background = "rgb(200, 200, 200)";
    document.getElementById("w6").style.background = "rgb(200, 200, 200)";
    document.getElementById("w7").style.background = "rgb(200, 200, 200)";
    document.getElementById("w8").style.background = "rgb(200, 200, 200)";
    cnt = 0;
    array = [];
}