// Реалізація функції isNaN

function IsNaN(value) {
    return value !== value;
  }
  
  console.log(IsNaN('some string'));
  console.log(IsNaN(123)); 
  console.log(IsNaN(NaN)); 






// Реалізація функції "pad"

function pad(str, symbol, num, boolean) {
    // Перевірка на вхідні дані
    if (typeof str !== 'string' || typeof symbol !== 'string' || typeof num !== 'number' || typeof boolean !== 'boolean') {
      return "Невірні вхідні дані!";
    }
  
    // Перевірка, скільки символів треба додати
   
    const diff = num - str.length; 

    if (diff <= 0) {
        return str;
      }
    
    if (boolean) {
        return symbol.repeat(diff) + str;
    } else {
        return str + symbol.repeat(diff);
    }
  }
  
  console.log(pad('hillel', '+', 4, true)); // "hillel"
  console.log(pad('hillel', '+', 7, true)); // "+hillel"
  console.log(pad('hillel', '+', 9, false)); // "hillel+++"





  //Перевірка теорії ймовірності

  function checkProbabilityTheory(count) {
    let generatedNumbers = [];
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        generatedNumbers.push(randomNumber);
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log("Кількість згенерованих чисел:" + count);
    console.log("Кількість парних чисел:" + evenCount);
    console.log("Кількість непарних чисел:" +  oddCount);

    // Відсоток парних та непарних чисел
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;
    console.log("Відсоток парних до не парних:", evenPercentage.toFixed(0) + "%", "-", oddPercentage.toFixed(0) + "%");
}

checkProbabilityTheory(100);
