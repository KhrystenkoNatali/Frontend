let input = prompt("Введите целое число:");

if (Number.isFinite(+input) && Number.isInteger(+input)) {
  let digits = input.split('').map(Number);
  document.write("Введено число: " + input + "<br>");
  document.write("Массив цифр: [" + digits.join(", ") + "]");
} else {
  document.write("Ошибка: введите целое число!");
}