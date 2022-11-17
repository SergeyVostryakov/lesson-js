//! переменные дают возможность повторного доступа к нужным нам значениям. Так же можно изменять их значение и перезаписывать
// *именование переменных 
// ? 1 все остальных случаях используется camelCase
// * 2 DB_PASSWORD значения которые известны до запуска приложения не изменяются(константы CONSTANT)
// ? 3 PascalCase используется для названия типов и классов в JS 

// !названия должны быть понятны и передавать суть данных

//обьявления переменных
 // ! var забываем практически не используется

const variable2 = 30;// обьявили и присвоили значение одной строкой

// !разница между let и const 
// let можно перезаписать данные в переменной межу обьявлением переменной и присвоением ей значения автоматом присваивается undefind 


let x = 50;
console.log(x);

x=457;
console.log(x);

let y 
console.log(y); // undefined

y = true;
console.log(y); // true

const z = 498;// обьявление и присваивание одной строкой всегда нельзя переписать
//z=34; нельзя переписать 

//! console.log(bm); нельзя работать с необьявленными переменными
// типы данных
// переменная -> значение переменный -> значение имеет тип(данных)
// тип пееременной определяется типом присвоенного значения 

// ! числовые значения number, BigInt
let number = 10;
console.log(number);
console.log(typeof number); //number числовое значение

number = 12.345;
console.log(number);
console.log(typeof number);

// ! символ "n" в конце означает, что это BigInt
number=1234567890123456789012345678901234567890n;
console.log(number);
console.log(typeof number);// предназначен для представления очень больших целых чисел

// ! String
let user = "Tom";
let company = 'Microsoft';
let language = `JavaScript`;
let varNext = 'Name user';// тип кавычек значения не имеет главное однообразие
console.log(varNext);
console.log(typeof varNext); //string
// Если внутри строки встречаются кавычки, то мы их должны экранировать слешем. Например, пусть у нас есть текст "Бюро "Рога и копыта"". 
// Теперь экранируем кавычки:
let company3 = "Бюро \"Рога и копыта\"";
//Также мы можем внутри стоки использовать другой тип кавычек:
let company1 = "Бюро 'Рога и копыта'";
let company2 = 'Бюро "Рога и копыта"';

// ! Boolean
varNext = true;
console.log(varNext);
console.log(typeof varNext);//Булевый тип представляет логическую сущность и имеет два значения: true (истина) и false (ложь)

//! undefined
let unknown
console.log(typeof unknown); //undefined представляет одно специальное значение - undefined и указывает, что значение не установлено

console.log(unknown); // undefined undefined указывает, что значение не определено или не установлено. Например, когда мы только определяем переменную без присвоения ей начального значения, она представляет тип undefined

//! null
unknown = null;
console.log(unknown); // null Присвоение значение null означает, что у переменной отсутствует значение переменная определена в отличии от undefined, просто null говорит о том что её значение ничего:
unknown = undefined;  // снова установим тип undefined
console.log(unknown); // undefined

//! Simbol
//Создаются новые символы с помощью функции Symbol():
// Создаём новый символ - id
let id = Symbol();
// Создаём символ id с описанием (именем) "id" 
// Символы гарантированно уникальны. 
//Например, вот два символа с одинаковым описанием – но они не равны:
let id3 = Symbol("id");
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1);
console.log(typeof id1);
console.log(id1 == id2); // false

// ?ССЫЛОЧНЫЙ ТИП ДАННЫХ
//! Обьект 
//* переменная хранит ссылку на этот обьект, который где то в памяти 
const userGame = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
};
console.log(userGame);
console.log(typeof userGame);

const copyUser = userGame;
copyUser.name = 'Bob';
console.log(copyUser.name);
console.log(userGame.name);
copyUser.growth = 180;
console.log(copyUser.growth);
console.log(userGame.growth);


//! Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array
//* Существует два варианта синтаксиса для создания пустого массива:
let arrCreate = new Array();
let arrCreateTwoMetod = [];
console.log(arrCreateTwoMetod);
console.log(typeof arrCreate);

//* Практически всегда используется второй вариант синтаксиса. В скобках мы можем указать начальные значения элементов:
let fruits = ["Яблоко", "Апельсин", "Слива"];
console.log(fruits[1]);
console.log(typeof fruits[2]);
console.log(typeof fruits);

//! статическая и динамическая типизация
//* СТАТИЧЕСКАЯ


