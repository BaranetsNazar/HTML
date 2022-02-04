let number4 =123;
console.log (number4);
// alert(number4);
document.write(`<div>${number4}</div>`);
let number5 =3.1;
console.log (number5);
// alert(number5);
document.write(`<div>${number5}</div>`);
let number6 =2.7;
console.log (number6);
// alert(number6);
document.write(`<div>${number6}</div>`);
let number7 =6;
console.log (number7);
// alert(number7);
document.write(`<div>${number7}</div>`);
let T=`true`;
console.log (T);
let F=`false`;
console.log (F);

// - Створити 3 змінних firstName, middleName, lastName,
// наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let firstName = 'Nazar';
let middleName = 'Hryhorovych';
let lastName = 'Baranets';
let person = (lastName + ' ' + firstName + ' ' + middleName);
console.log(person);
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
let name = prompt('Welcome', 'Назар');
let fathername = prompt('Middlename', 'Григорович');
let age = prompt ('Age', '29 років');

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
let a = 100;
console.log (typeof a);
let b = '100'
console.log (typeof b);
let c = true;
console.log (typeof c);


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
let TA =  5 !== 6;
console.log(TA);
let TB =  5 > 6;
console.log(TB);
let TC =  5 === 6;
console.log(TC);
let TD = 5 >=6;
console.log(TD);
let TE = 10===10;
console.log(TE);
let TG = 10>=10;
console.log(TG);
let TH = 10>10;
console.log(TH);
let TX = 10<10;
console.log(TX);
let TY = 10!==10;
console.log(TY);
let TZ = 123>123;
console.log(TZ);
let TW = 123>=123;
console.log(TW);