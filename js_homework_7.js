//  Без А

^(?!.*[Aa])\w{6,}$


// Параноя

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var trustedEmails = arr.filter(function(item) {
    var emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

    return emailRegex.test(item.email) && item.email.indexOf('@') !== -1;
});

console.log(trustedEmails);