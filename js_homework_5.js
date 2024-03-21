// Метод getInfo(), що виводить всі властивості об'єкта

let company = {
    name: 'Lohika',
    country: 'Ukraine',
    users: 250,
  
    getInfo: function() {
      for (let key in company) {
        if (key !== 'getInfo' && company.hasOwnProperty(key)) {
          console.log(`${key}: ${company[key]}`);
        }
      }
    }
  };
  
  company.city = 'Odesa';

  company.getInfo(); 




  
   // Сума вартості послуг

   let services = {
    "Oil Change": "200 UAN",
    "Tire Rotation": "300 UAN",
    "Wheel Alignment": "700 UAN",
    price: function() {
        let totalPrice = 0;
        for (let service in this) {
            if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) {
                totalPrice += parseInt(this[service]);
            }
        }
        return totalPrice + ' UAN';
    },
    minPrice: function() {
        let prices = [];
        for (let service in this) {
            if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) {
                prices.push(parseInt(this[service]));
            }
        }
        return Math.min(...prices) + ' UAN';
    },
    maxPrice: function() {
        let prices = [];
        for (let service in this) {
            if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) {
                prices.push(parseInt(this[service]));
            }
        }
        return Math.max(...prices) + ' UAN';
    }
};

// Додавання нової послуги
services['Car Wash'] = "400 UAN";

console.log("Total price: " + services.price());
console.log("Min price: " + services.minPrice());
console.log("Max priceг: " + services.maxPrice());