let inputForm = document.querySelector("#tableForm");
let input = document.querySelector("#Inp");
let table = document.querySelector(".time-table");



inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let tableOf = input.value;  // user value

  table.innerHTML = "";   //html

  for (let i = 1; i <= 12; i++) {
    
    const Ans = `${tableOf} x ${i} = ${tableOf * i}`;

    table.innerHTML += `${Ans} <br>`;
  }
});