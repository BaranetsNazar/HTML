// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = prompt(`To which quarter of hour correspond this number?`);
if (time<=15)
    console.log(`first quarter`);
else if (time<=30 && time>=16)
    console.log(`second quarter`);
else if (time<=45 && time>=31)
    console.log(`third quarter`);
else if (time<=59 && time>=46 )
console.log(`fourth quarter`);
else
console.log(`wrong number`);


// - У змінній day дано якесь число від 1 до 31.
// // Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt(`У яку половину(декаду) місяця потрапляє це число?`);
if (day<=10 && day>=1)
    console.log(`first part`);
else if (day<=20 && day>=11)
    console.log(`second part`);
else if (day<=31 && day>=21)
    console.log(`third part`);
else
    console.log(`wrong number`);


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = prompt ('Напиши слово Вірно');
if (test === 'Вірно')
    console.log('Вірно');
if (test !== 'Вірно')
    console.log('Неправильно');

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте
// скрипт при a, що дорівнює 1, 0, -3
let a = +prompt('Введи цифру');
if (a === 0)
    console.log('невірно');
    else
    console.log('вірно');



// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// //
let schedule = prompt('День тижня Пн.,Вт.,Ср.,....Нд.');
switch (schedule) {
    case 'Пн':
        console.log('Робота + лекція + ДН.Тата');
        break;
    case 'Вт':
        console.log('Робота + домашка');
        break;
    case 'Ср':
        console.log('Робота + лекція');
        break;
    case 'Чт':
        console.log('Робота + домашка');
        break;
    case 'Пт':
        console.log('Робота + лекція');
        break;
    case 'Сб':
        console.log('Англійська');
        break;
    case 'Нд':
        console.log('Пригадати все...');
        break;
}

// // - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// program to check leap year function checkLeapYear(year)
// let year = +prompt('Введіть кількість днів в цьому році');
//
// if (year % 4 === 0)
//     console.log('Рік ВИСОКОСНИЙ');
// else
//     console.log('УРА! Наш рік нормальний');
//
// // - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// // Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
        let js = prompt('Яка «офіційна» назва JavaScript?');{
        if (js === 'ECMAScript')
            alert('Great! You are right!');
         else
            alert('Не знаєте? ECMAScript!');
         console.log('Не знаєте? ECMAScript!');
        }

