let num1 = 2;
let num2 = 4;

if (typeof num1 === "number" && typeof num2 === "number") {
  // Вычисление степени через цикл
  let resultCycle = 1;
  for (let i = 0; i < num2; i++) {
    resultCycle *= num1;
  }

  // Вычисление степени стандартным способом
  let resultStandard = num1 ** num2;

  // Вывод на страницу
  document.getElementById("output").innerHTML =
    "Результат через цикл: " + resultCycle + "<br>" +
    "Стандартный результат: " + resultStandard + "<br>" +
    "Сравнение: " + (resultCycle === resultStandard ? "совпадают" : "не совпадают");
} else {
  document.getElementById("output").innerHTML =
    "Одна из переменных не является числом.";
}