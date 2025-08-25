let array = [1, "яблоко", ["груша", 5], "банан", [7, "слива"], "вишня", 42];

function extractStrings(input) {
  let result = [];

  for (let item of input) {
    if (typeof item === "string") {
      result.push(item);
    } else if (Array.isArray(item)) {
      for (let nested of item) {
        if (typeof nested === "string") {
          result.push(nested);
        }
      }
    }
  }

  return result;
}

document.write("Исходный массив: " + JSON.stringify(array) + "<br>");
document.write("Только строки: " + JSON.stringify(extractStrings(array)) + "<br>");