// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numbers = [1, 2, 3, 4, 5];
for (let temp of numbers){
    console.log (temp);
}
let string = [`one`,`two`,`three`,`four`,`five`];
for (let temp of string){
    console.log(temp);
}
let mix = [1, `two`, 3, `four`, 5, true, false];
for (let temp of mix) {
    console.log(temp);
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями
// звертаючись до конкретного індексу. Вивести в консоль
let masuv =[];
masuv [0] = 14;
masuv [1] = 02;
masuv [2] = 2022;
masuv [3] = `Be my Valentine`;
masuv [4] = true;
masuv [5] =`or`;
masuv [6] = false;
console.log(masuv)

// - За допомогою циклу for і document.write() вивести 10 блоків div c
// довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Be my Valentine</div>`)
}

// - За допомогою циклу for і document.write() вивести
// 10 блоків div c довільним текстом і індексом всередині
for (let i = 1; i <= 10; i++) {
    document.write(`<div>${i} will you be my Valentine?</div>`)
}
// // - За допомогою циклу while вивести в документ 20 блоків h1
// // c довільним текстом всередині.
let h1 = 0;
while (h1 < 20) {
    document.write(`<h1>everything gonna be alright</h1>`);
    h1++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1
// c довільним текстом і індексом всередині.
let h2 = 1;
while (h2 < 21) {
    document.write(`<h2>${h2}everything gonna be alright!!!!!</h2>`);
    h2++;
}
// - Створити масив з 10 числових елементів.
// Вивести в консоль всі його елементи в циклі.
let masuv1 = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
for (let a = 0; a < masuv1.length; a++) {
    console.log(masuv1[a])
}
// - Створити масив з 10 строкрових елементів.
// Вивести в консоль всі його елементи в циклі.
let masuv2 = [`my`, `life`, `is`,`diveded`,`for`,`two`,`parts`, `before`, `and`, `after`  ];
for (let a = 0; a <masuv2.length; a++) {
    console.log(masuv2[a])
}
// - Створити масив з 10 елементів будь-якого типу.
// Вивести в консоль всі його елементи в циклі.
let masuv3 =[2, 3, `one`, `=`, `one`,`is`, `it`, true, `or`, false]
for (let a=0; a<masuv3.length; a++) {
    console.log(masuv3[a])
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let masuv4 = [2, 4, 5, true, false, `my`,`life`, `my`, `rules`, 10]
for (a = 0; a < masuv4.length; a++) {
    if (typeof masuv4[a] === 'boolean') {
        console.log(masuv4[a])
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let masuv5 = [2, 4, 5, true, false, `my`,`life`, `my`, `rules`, 10]
for (a = 0; a < masuv5.length; a++) {
    if (typeof masuv5[a] === 'number') {
        console.log(masuv5[a])
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
let masuv6 = [2, 4, 5, true, false, `my`,`life`, `my`, `rules`, 10]
for (a = 0; a < masuv6.length; a++) {
    if (typeof masuv6[a] === 'string') {
        console.log(masuv6[a])
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let masuv7 =[];
masuv7 [0] = 16;
masuv7 [1] = 17;
masuv7 [2] = `string`;
masuv7 [3] = `Ok?`;
masuv7 [4] = false;
masuv7 [5] =`or`;
masuv7 [6] = `better`;
masuv7 [7] = `metter`;
masuv7 [8] = `your life`;
masuv7 [9] = true;
for (a = 0; a < masuv7.length; a++) {
    console.log(masuv7[a])
}
// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
for (let a = 0; a < 10; a++){
    console.log(`step :`, a );
    document.write(`step :`, a);
}
// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++){
    console.log(`step :`, i );
    document.write(`step :`, i);
}
// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
for (let w = 0; w < 100; w+2){
    console.log(`step :`, w );
    document.write(`step :`, w);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if(i % 2 === 0){
        console.log('step : ' + i + ' ');
        document.write('step : ' + i + ' ');
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log('step : ' + i + ' ');
        document.write('step : ' + i + ' ');
    }
}