const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const increase = document.querySelector("#increase");
const number = document.querySelector("#number");

let contador = 0;
decrease.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        number.textContent = contador;
    }
});

increase.addEventListener("click", () => {
    contador++;
    number.textContent = contador;
});

reset.addEventListener("click", () => {
    contador = 0;
    number.textContent = contador;
});
