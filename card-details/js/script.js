let input = document.getElementById("card-num");
let index = 4;

input.onkeydown = function () {
    if (input.value.length > 0 && input.value.length < 19) {
        if (input.value.length === index){
            input.value += " ";
            index +=5;
        }
    }else {
        index = 4;
    }
}

/*let submitBtn = document.getElementById("confirm-btn");

submitBtn.onclick = function() {
    let name = document.getElementById("name").value;
    let card = document.getElementById("card-num").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let cvc = document.getElementById("cvc").value;

    document.getElementsByClassName("card-num").innerHTML = card;
    document.getElementsByClassName("name").innerHTML = name;
    document.getElementsByClassName("date").innerHTML = month + "\\" + year;
    document.getElementsByClassName("cvc").innerHTML = cvc;
}*/