const initialState = document.querySelector("#rate-state");
const thanksState = document.querySelector("#thanks-state");
const submit = document.querySelector("#submit");
const rateAgain = document.querySelector("#rate-again");
const rating = document.querySelector("#rate");
const rates = document.querySelectorAll(".btn");

submit.addEventListener("click", () => {
    thanksState.classList.remove("hidden");
    initialState.style.display = "none";
})

rateAgain.addEventListener("click", () => {
    thanksState.classList.add("hidden");
    initialState.style.display = "block";
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})