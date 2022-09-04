let input = document.getElementById("card-num");
let index = 4;

input.onkeydown = function () {
    if (input.value.length > 0 && input.value.length < 19) {
        if (input.value.length === index){
            input.value += " ";
            index +=5;
        }
    }
}