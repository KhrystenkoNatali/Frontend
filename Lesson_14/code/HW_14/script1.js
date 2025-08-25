// Исходный массив с числами и строками
let mixedArray = [1, "яблоко", 3, "банан", 5, "вишня", 42];

// Функция для фильтрации строк
function extractStrings(arr) {
  let result = [];
  for (let item of arr) {
    if (typeof item === "string") {
      result.push(item);
    }
  }
  return result;
}

// Получаем массив строк
let stringsOnly = extractStrings(mixedArray);

// Выводим результат на экран
document.write("<p>Исходный массив: " + JSON.stringify(mixedArray) + "</p>");
document.write("<p>Только строки: " + JSON.stringify(stringsOnly) + "</p>");