//Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.
let numbers = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
result = prompt(numbers, [4]);
console.log(numbers)

// Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book1 = {
    book: 'Три товариші',
    pages: 130,
    genre: 'Пригодницький роман',
    author: 'Еріх Марія Ремарк'
}
console.log(book1);
let book2 = {
    name: 'Маленький принц',
    pages: 505,
    genre: 'Дитяча література',
    author: 'Антуан де Сент-Екзюпер'
}
console.log(book2);
let book3 = {
    name: 'Чорний Ворон',
    pages: 504,
    genre: 'Історичний твір',
    author: 'Василь Шкляр'
}
console.log(book3);

// Створити масив об'єктів book з наступними полями  - назва,
// кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт
let books = [
    {book4: 'name: Маленький принц', pages: 505, genre: 'Дитяча література', author: 'Антуан де Сент-Екзюпер'},
    {book5: 'name: Чорний Ворон', pages: 504,  genre: 'Історичний твір',  author: 'Василь Шкляр'},
];
console.log(books);
//Напишіть код, який вираховує площу прямокутника висотою 23см.
// (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10
let s = (height*width);
console.log('Площа =', s);

//Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна
// heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 100;
let dC = 4;
let rC = dC/2;
let PI = 3.14;
let v = PI * (rC*2) * heightC;
console.log(v);

//У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь).
let n = 3;
let m = 4;
let k = Math.pow(3, 4);
console.log(k);