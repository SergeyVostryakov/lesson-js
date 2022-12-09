

//!ПЕРЕМЕННЫЕ И КОНСТАНТЫ

/*
Переменные дают возможность повторного доступа к нужным нам значениям.
Так же можно изменять их значение и перезаписывать
*/

/*
ОБЬЯВЛЕНИЕ ПЕРЕМЕННОЙ
1. ключевое слово let const или var
2. имя переменной
*/
/*
Правила именования переменных 

1 Имя переменной может содержать 
только буквы латинского алфавита,
цмфры
символы
не должно начинатся с цифры

3. Ипользуется camelCase для именования переменных кроме случаев указанных ниже

4. DB_PASSWORD используется для значений которые известны до запуска приложения не изменяются(константы CONSTANT)

5. Названия ТИПОВ и КЛАССОВ, для их названия используется PascalCase  в JS
! названия должны быть понятны и передавать суть данных

! var забываем практически не используется
*/
//Верное обьявление переменной
let age;
let infoUser1;
let $size;
let _color;

//Не верное обьявление переменной
let 1infoUser;
let user-age;
Let userAge;// ошибка в регистре ключевого слова

//Не использовать зарезервированные слова в именах переменных
let let;
let break;
let for;

//! ПРИСВОЕНИЯ ПЕРЕМЕННОЙ ЗНАЧЕНИЯ

let size;// обьявили переменную
size = 'XXL';// присвоили значение 
console.log(size);
const variable2 = 30;// обьявили и присвоили значение одной строкой
console.log(variable2);

//* обьявление нескольких переменных

// Обьявление переменных одной строкой(неудобно, и невсегда понятно при большом количестве переменных)
let userApp = 'Local', userAppName = 'Bob', userAppAge = 13;
console.log(userApp, userAppName, userAppAge);

// Обьявление переменных через запятую с новой строки
let userApp1 = 'Local', 
    userAppName1 = 'Mike', 
    userAppAge1 = 23;
console.log(userApp1, userAppName1, userAppAge1);

// Обьявление переменных отдельно
let userApp2 = 'PC'; 
let userAppName2 = 'Rasmus';
let userAppAge2 = 41;
console.log(userApp2, userAppName2, userAppAge2);

//* перезапись значения
let userAgeApp = 24;
console.log(userAgeApp);
userAgeApp = 574;
console.log(userAgeApp);
const userCount = userAgeApp;
console.log(userAgeApp, userCount);
/*
правила переменных
1. обьявлять их перед использованием
2. использовать const при любой возможности и необходимости

const userCount;
userCount = userAgeApp;
Выдаст ошибку так как не призвоенно значение переменной

userCount = 1234;
console.log(userCount);
Выдаст ошибку так как нельзя менять значение переменной

*/

// !разница между let и const 
/*
let можно перезаписать данные
в переменной межу обьявлением переменной и присвоением ей значения автоматом присваивается undefind
const данные нельзя перезаписать после присвоения значения 
*/ 

let x = 50;
console.log(x);

x=457;
console.log(x);

let y;
console.log(y); // undefined
console.log(typeof y);
y = true;
console.log(typeof y);
console.log(y); // true

//! КОНСТАНТЫ

/*
* как писалось ранее константы значения которых будут известны заранее, имена пишутся заглавными буквами 
* пробелы нижнее подчеркивание
*/
const BLOCK_SIZE = 25;

//* имена со значением присвоенным в процессе написания программы пишутся в camelCase
const numb = 498;// обьявление и присваивание одной строкой всегда нельзя переписать
//z=34; нельзя переписать 

//!ОБЛАСТИ ВИДИМОСТИ

console.log(bm);// нельзя работать с необьявленными переменными

/*
Если переменная обьявлена внутри блока 
например:
 внутри цикл
 внутри функции
то обращение к переменной за пределами блока приведет к ошибке
*/
function blockTestVariable (){
    let userCar = 'ford';
    console.log(userCar);
}
blockTestVariable ();
//console.log(userCar);
// Выдаст ошибку так как userCar существует и видна только в блоке функции blockTestVariable ()
let userCar = 'Mazda';// абсолютно другая переменная userCar
console.log(userCar);
blockTestVariable ();

//! статическая и динамическая типизация

// переменная -> значение переменный -> значение имеет тип(данных)
// тип пееременной определяется типом присвоенного значения 

//* СТАТИЧЕСКАЯ
//Статическая типизация данных присваивается при создании переменной изменить тип даных нельзя только через переопределение
//String nameAutor = 'abcd';
//nameAutor = 13; error
// ! JS ДИНАМИЧЕСКИ ТИПИЗИРОВАННЫЙ ЯЗЫК ПРОГРАМИРОВАНИЯ
/*
JS динамически типизированным 
То есть тип данных переменнной меняется динамически в момент присвоения 
или смены её значения. А не в момент обьявления  
*/
let result = true;// обьявили переменую и присвоили булевое значение 
console.log(result);
console.log(typeof result);

result = 10;// присвоили той же переменной значение число Number
console.log(result);
console.log(typeof result);

result = 'Win Win';// присвоили той же переменной значение строка String
console.log(result);
console.log(typeof result);

// то же можо делать и с функциями в премере myFunction просто число
function myFunction(){
    console.log(result+' HO HO HO')
}
myFunction();
myFunction = 10;
console.log(myFunction);
console.log(typeof myFunction);


//! Что бы избежать ошибок типизации CONST обьявление переменных
// Стрелочная функция
const resultNew = () =>{
    console.log('Happy Cristmas');
}
resultNew();
// resultNew = 10: error получим ошибку

//! ТИПЫ ДАННЫХ

// ! ЧИСЛОВЫЕ значения number, BigInt, infinity, NaN
let number = 10;
console.log(number);
console.log(typeof number); //number числовое значение

number = 12.345;
console.log(number);
console.log(typeof number);

//! infinity
/*
Матиматическая бесконечность 
∞. Это особое значение, которое больше любого числа.
может быть отрицательной
*/
// Infinity
let getInfinity = 467/0;
console.log(getInfinity);
console.log(typeof getInfinity);
// -Infinity
getInfinity = - 467/0;
console.log(getInfinity);
console.log(typeof getInfinity);

//! NaN
/*
NaN является значением, представляющим не-число (Not-A-Number).
NaN - специальное значение "не число", 
которое обычно говорит о том, что была выполнена бессмысленная операция. 
Результатом практически любой операции, в которой участвует NaN, будет NaN.
*/
let getNan = 'String'/45;
console.log(getNan);
console.log(typeof getNan);

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
let company3 = "Бюро \" Рога и копыта\"";
//Также мы можем внутри стоки использовать другой тип кавычек:
let company1 = "Бюро ' Рога и копыта'";
let company2 = 'Бюро " Рога и копыта"';

// ` обратные кавычки позволяют встраивать в строку доп выражения с помощью ${}
let userInfoAge = 36;
let userInfo = `Возраст ${userInfoAge}`;
console.log(userInfo);
console.log(typeof userInfo); //string

// ! Boolean
//Булевый тип представляет логическую сущность и имеет два значения: true (истина) и false (ложь)

varNext = true;// если установить false результат :(
console.log(varNext);
console.log(typeof varNext);

if (varNext){
        console.log(';)');
    } else {
        console.log(':(');
    }

// Так же булевые значения получаем при использовании операторов сравнения > < == <= итд.
let variableTrueOrFalse = 58 < 18;
console.log(variableTrueOrFalse);
console.log(typeof variableTrueOrFalse);

//! undefined
//undefined представляет одно специальное значение - undefined и указывает, что значение не установлено

let unknown;
console.log(typeof unknown);
console.log(unknown);
/*
undefined указывает, что значение не определено или не установлено.
Например, когда мы только определяем переменную без присвоения ей начального значения, 
она представляет тип undefined
*/ 
// Примеры использования

let ageUserUnknown;
// Есть какая та переменная которая только обьявленна, значение переменной не присвоено
console.log(typeof ageUserUnknown);
console.log(ageUserUnknown);
// Проверяем определенна ли переменная
//сравниваем ЗНАЧЕНИЕ
if (ageUserUnknown === undefined){
// в параметрах(условиях) цикла for (ageUserUnknown === undefined) строго сравниваем ЗНАЧЕНИЕ, является ли переменная определенной
    console.log('Переменная не определенна');
} else {
    console.log('Переменная определенна');
}
// сравниваем ТИП ДАННЫХ переменной
/*
что проичходит в циклк
в параметрах(условиях) цикла for (ageUserUnknown === undefined) строго сравниваем ТИП ДАННЫХ переменной
если параметры (условия) возвращают true 
выполним console.log('Переменная не определенна');
в противном случае else  console.log('Переменная определенна');
*/

if (typeof ageUserUnknown === 'undefined'){
        console.log('Переменная не определенна');
    } else {
        console.log('Переменная определенна');
    }

//! null
unknown = null;
console.log(unknown);
/*
null Присвоение значение null означает,
что у переменной отсутствует значение переменная определена в отличии от undefined, 
просто null говорит о том что её значение ничего:
*/
unknown = undefined;  
// снова установим тип undefined
console.log(unknown); 
// undefined

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

//! ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ

// Преобразование строк
let numConvertTo = 987;
console.log(numConvertTo);
console.log(typeof numConvertTo);
console.log();
numConvertTo = String(numConvertTo);
console.log(numConvertTo);
console.log(typeof numConvertTo);

// булевое
let сonvertToString = true;
console.log(сonvertToString);
console.log(typeof сonvertToString);
console.log();
сonvertToString = String(сonvertToString);
console.log(сonvertToString);
console.log(typeof сonvertToString);

// Численное преобразование
let сonvertToNum = '58';
console.log(сonvertToNum);
console.log(typeof сonvertToNum);
console.log();
сonvertToNum = Number(сonvertToNum);
console.log(сonvertToNum);
console.log(typeof сonvertToNum);

// Если в строке нет числа то получим NaN 
let сonvertToNan = '58 Имя';
console.log(сonvertToNan);
console.log(typeof сonvertToNan);
console.log();
сonvertToNan = Number(сonvertToNan);
console.log(сonvertToNan);
console.log(typeof сonvertToNan);

console.log();
сonvertToNan = '58';
сonvertToNan = Number(сonvertToNan);
console.log(сonvertToNan);
console.log(typeof сonvertToNan);

console.log();
сonvertToNan = 'Строка';
сonvertToNan = Number(сonvertToNan);
console.log(сonvertToNan);
console.log(typeof сonvertToNan);

// Автоматическое преобразование типов данных
let avtoConvert = '50' / '10';
console.log(avtoConvert);
console.log(typeof avtoConvert);

avtoConvert = 50 / '10';
console.log(avtoConvert);
console.log(typeof avtoConvert);

// Булевое преобразование
let booleanConvert = 57;
console.log(booleanConvert);
console.log(typeof booleanConvert);

console.log();
booleanConvert = Boolean(booleanConvert);
console.log(booleanConvert);
console.log(typeof booleanConvert);