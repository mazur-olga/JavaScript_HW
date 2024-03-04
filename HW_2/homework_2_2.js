let quantity = parseFloat(prompt("Введіть кількість:"));
let unitmeasurementUnit = prompt("Введіть одиницю вимірювання (км, год, кг):");

let result;

switch (unitmeasurementUnit.toLowerCase()) {
    case 'км':
        result = `${quantity} км це ${quantity * 1000} м.`;
        break;
    case 'год':
        result = `${quantity} год це ${quantity * 60} хв.`;
        break;
    case 'кг':
        result = `${quantity} кг це ${quantity * 1000} г.`;
        break;
    default:
        result = "Ви ввели некорректну одиницю вимірювання. Будь ласка, введіть 'км', 'год' або 'кг'.";
}

console.log(result);