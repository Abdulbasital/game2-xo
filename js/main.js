let turn = "x";
let title = document.querySelector(".title")
let arr = [];

function end(num1, num2, num3) {
    title.innerHTML =`GOOD ${arr[num1]} Winter`;
    document.getElementById("item" + num1).style.background = "#000"
    document.getElementById("item" + num2).style.background = "#000"
    document.getElementById("item" + num3).style.background = "#000"

    setInterval(function() {title.innerHTML += "."},1000)
    setTimeout(function(){location.reload()},4000)

}

function winner() {
    for (let i = 1; i <= 9; i++) {
        arr[i] = document.getElementById("item" + i).innerHTML
    }
    if (arr[1] === arr[2] && arr[2] === arr[3] && arr[3] != "") {
        end(1,2,3)
    }
    else if(arr[4] === arr[5] && arr[5] === arr[6] && arr[5] != "") {
        end(4,5,6)
    }
    else if(arr[7] === arr[8] && arr[7] === arr[9] && arr[7] != "") {
        end(7,8,9)
    }
    else if(arr[1] === arr[4] && arr[4] === arr[7] && arr[7] != "") {
        end(1,4,7)
    }
    else if(arr[2] === arr[5] && arr[5] === arr[8] && arr[2] != "") {
        end(2,5,8)
    }
    else if(arr[3] === arr[6] && arr[6] === arr[9] && arr[6] != "") {
        end(3,6,9)
    }
    else if(arr[3] === arr[5] && arr[5] === arr[7] && arr[3] != "") {
        end(3,5,7)
    }
    else if(arr[1] === arr[5] && arr[5] === arr[9] && arr[5] != "") {
        end(1,5,9)
    }
}


function game(id) {
    let element = document.getElementById(id)

    if (turn == "x" || element == "") {
        element.innerHTML = "x";
        turn = "o";
        title.innerHTML = "o";
    }
    else if (turn == "o" || element == "") {
        element.innerHTML = "o";
        turn = "x";
        title.innerHTML = "x";
    }
    winner()
}
