// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['name', 11, 3.14, 'age', 'word', [3, 4, 5], {a: 1, b: 2}, 256, 'lorem ipsum', 'hello world']

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: "Harry Potter and the Philosopher's stone",
    pageCount: 223,
    genre: 'fantasy'
}

let book2= {
    title: "Name of the Wind",
    pageCount: 662,
    genre: 'fantasy'
}

let book3 = {
    title: "Mistborn: the Final Empire",
    pageCount: 541,
    genre: 'fantasy'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: "Stardust",
    pageCount: 256,
    genre: 'fantasy',
    authors: [
        {name: 'Neil Gaiman',
        age: 63}
    ]
}

let book5= {
    title: "Howl's moving castle",
    pageCount: 448,
    genre: 'fantasy',
    authors: [
        {name: 'Diana Wynne Jones',
         age: 45}
    ]
}

let book6 = {
    title: "Ballad of Songbirds and Snakes",
    pageCount: 528,
    genre: 'fantasy',
    authors: [
        {name: 'Suzanne Collins',
        age: 61}
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'vasya', username: 'ThunderStrike', password: 'qwerty'},
    {name: 'petya', username: 'GameRushTitan', password: '23456'},
    {name: 'kolya', username: 'CyberKnight', password: 'krlgbt'},
    {name: 'olya', username: 'PhantomMenace', password: 'rtglrt'},
    {name: 'max', username: 'QuantumLancer', password: 'eakrg'},
    {name: 'anya', username: 'SilverMoonWalker', password: 'rtkglt'},
    {name: 'oleg', username: 'PhoenixBlitz', password: 'krlotg'},
    {name: 'andrey', username: 'AdventureAura', password: 'jrft'},
    {name: 'masha', username: 'FrostBoltBaron', password: 'rtbkt'},
    {name: 'olya', username: 'GalaxyGuardian', password: 'wsefr'}
];

for(let i = 0; i<users.length; i++){
    console.log(users[i].password);
}

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
if (x !== 0){
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 0;

if(time >= 0 && time <= 15){
    console.log('1 чверть');
} else if (time > 15 && time <= 30){
    console.log('2 чверть');
} else if (time > 30 && time <= 45){
    console.log('3 чверть');
} else {
    console.log('4 чверть');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 31;

if(day >= 1 && day <= 10){
    console.log('1');
} else if (day > 10 && day <= 20){
    console.log('2');
} else if (day > 20 && day <= 31){
    console.log('3');
} else {
    console.log('Days must be a number from 1 to 31');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = prompt('What day is it today (form 1 to 7)');
switch (dayOfWeek) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;

    default:
        console.log('Enter number from 1 to 7');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = 2;
let b = 2;

if (a > b){
    console.log(`${a} is bigger than ${b}`);
} else if (b > a){
    console.log(`${b} is bigger than ${a}`);
} else if (a === b){
    console.log(`${a} is equal to ${b}`);
} else {
    console.log('a and b must be numbers');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x2 = 35;

if (isNaN(x2) ||  x2 === null || x2 === false){
    x2 = 'default';
}
console.log(x2);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++){
    if(coursesAndDurationArray[i].monthDuration > 5){
        console.log('Супер');
    }
}