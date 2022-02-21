// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str =`hello world`;
let strOne =`lorem ipsum`;
let strTwo = 'javascript is cool';
    console.log(str.length, strOne.length, strTwo.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strThree = 'hello world! ';

let strFive = ' javascript is cool! ';

let strFour = ' lorem ipsum!';

let toUpperCaseHello = strThree.toUpperCase();
console.log(toUpperCaseHello);
document.write(toUpperCaseHello);

let toUpperCaseFour = strFour.toUpperCase();
console.log(toUpperCaseFour);
document.write(toUpperCaseFour);

let toUpperCase = strFive.toUpperCase();
console.log(toUpperCase);
document.write(toUpperCase);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strToBeLow = `HELLO WORLD,`;
let strToBeLowOne = ` LOREM IPSUM,`;
let strToBeLowTwo = ' JAVASCRIPT IS COOL';

let strLow = strToBeLow.toLowerCase();
console.log(strLow);
document.write(strLow);
let strLowOne = strToBeLowOne.toLowerCase();
console.log(strLowOne);
document.write(strLowOne);
let strLowTwo = strToBeLowTwo.toLowerCase();
console.log(strLowTwo);
document.write(strLowTwo);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirty = ' dirty string   ';
let clear = dirty
    .replace(` `,``)
    .replace(`   `,``);
console.log(clear);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

    let string = 'Каждый охотник желает знать';
    let masive = string.split(` `);
    console.log (masive);

let sttr = 'Каждый охотник желает знать';
function stringToarray(sttr) {
    return sttr.trim().split(" ");
}
let arr = stringToarray(sttr);
console.log (arr);
document.write(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//    let strDel = 'Каждый охотник желает знать';
 //    document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, index) => {
    return str.substr(0, index);
}
let strDEL = 'Каждый охотник желает знать';
document.writeln(delete_characters(strDEL, 7));

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.\
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (strInDa) => {
    let splitUpper = strInDa.split(' ').join('-').toUpperCase();
    return splitUpper;
}
let stringHTML = "HTML JavaScript PHP";
console.log(insert_dash(stringHTML));
document.write(insert_dash(stringHTML));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.
let firstIndexUp = (str) => {
    return str[0].toUpperCase() + str.slice(1,10)
};
document.write(firstIndexUp('baranets'));
console.log(firstIndexUp('nazar'));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1,100)).join(' ');
};
document.write(capitalize('html javascript'));
console.log(capitalize('html javascript'));