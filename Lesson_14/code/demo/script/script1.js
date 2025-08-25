/* При преобразование в boolean дают false

    0,
    null,
    undefined,
    NaN,
    ""
*/

let str = "false";
if (str) {   // выполнит преобразование str -> boolean и выполнит if
    console.log(`Значение есть ${str}`);
} else {
    console.log("нет (корректного) значения ")
}
