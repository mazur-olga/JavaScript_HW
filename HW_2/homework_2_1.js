let userYearsInput = prompt(" Скільки Вам років? ");

if (!isNaN(userYearsInput) && userYearsInput >= 0 && userYearsInput <= 100) {
    let years = parseInt(userYearsInput);
    let result;

    switch (true) {
        case years === 0:
            result = "0 років";
            break;
        case years === 11 || years === 12 || years === 13:
            result = years + " років";
            break;
        case (years % 10 === 1):
            result = years + " рік";
            break;
        case (years % 10 >= 2 && years % 10 <= 4):
            result = years + " роки";
            break;
        default:
            result = years + " років";
    }
    console.log(result);
} else {
    console.log("Будь ласка, введіть невід'ємне число в діапазоні від 0 до 100.");
}