"use strict";

let FileList = {
    searchFines: searchFines
};

let data = {
    finesData: [
        { номер: '001', тип: 'Перевищення швидкості', сума: 100, дата: '2024-01-15' },
        { номер: '002', тип: 'Невірне паркування', сума: 150, дата: '2024-02-20' },
        { номер: '003', тип: 'Їзда у не тверезому стані', сума: 200, дата: '2024-03-25' }
    ]
};

function searchFines(searchKey) {

    if (searchKey === "Пошук за номером") {
        return data.finesData.filter(fine => fine.номер === searchKey);
    } else if (searchKey === "Пошук за типом штрафу") {
        return data.finesData.filter(fine => fine.тип === searchKey);
    } else {
        return [];
    }
}

let finesByNumber = FileList.searchFines("Пошук за номером");
console.log("Штрафи за номером:", finesByNumber);

let finesByType = FileList.searchFines("Пошук за типом штрафу");
console.log("Штрафи за типом:", finesByType);
