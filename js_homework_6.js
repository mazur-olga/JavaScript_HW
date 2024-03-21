// Перемішуємо масив

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
}
console.log("Початковий масив:", arr);
myBlend(arr);
console.log("Перемішаний масив:", arr);





// BigBoss

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, company) {
    company = company || this;

    if (company.name === companyName) {
        return company;
    }

    if (company.clients) {
        for (let i = 0; i < company.clients.length; i++) {
            const client = company.clients[i];
            const result = findValueByKey(companyName, client);
            if (result) {
                return result;
            }
        }
    }

    return null;
}
const companyInfo = findValueByKey('Клієнт 1.2.3', company);
console.log(companyInfo);
