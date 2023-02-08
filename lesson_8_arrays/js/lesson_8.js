
//! МАССИВЫ

/*
массивы - это отдельный подвид обьектов,
который позволяет нам хранить данные, более удобный 
способ утравления данными
*/
let arr = new Array();
//Способ который практически не используется

let arr1 = [];
/*
Практически всегда используется второй вариант синтаксиса. 
В скобках мы можем указать начальные значения элементов:
*/

//============================

// Два варианта написания массива
let name  = ["Tim", "Tom", "Bob"];
let nameUser  = [
    "Tim",
    "Tom",
    "Bob",
];
/*
В массивах могут хранится различные типы данных
string,
boolean,
object,
function,
...итд 
*/
let arrayDifrentTypeDate = [
    'Bob',
    {
        color: 'red',
        year: 1980,
    },
    true,
    function () {
        console.log('Я функция, я в массиве')
    },
];

//============================

// Многомерные массивы

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
/*
Элементы массива нумеруются, начиная с нуля.
Мы можем получить элемент, указав его номер в квадратных скобках:
*/
let arrayDifrentDate = [
    'Bob',
    {
        color: 'red',
        year: 1980,
    },
    true,
    function () {
        console.log('Я функция, я в массиве');
    },
];
console.log(arrayDifrentDate[0]);
console.log(arrayDifrentDate[1]);
console.log(arrayDifrentDate[3]);

// Посмотреть в консоле все данные из массива
console.log(arrayDifrentDate);

// Вывести в консоль значение свойства вложеного обьекта, можно через dot notation
console.log(arrayDifrentDate[1].color);

// Вызов функции вложенной в массив
arrayDifrentDate[3] ();

//=====================================================================================================

/*
    Получение данных из многомерного массива
синтаксис
обрашение к переменной массива [номер элемента масива(который сам является массивом)][ключ элемента]
*/
let matrixOne = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// Вывести весь масив
console.table(matrixOne);

// Вывести значение первого ключа второго элемента, цифру 4
console.log(matrixOne[1][0]);

// Вывести значение третьего ключа первого элемента, цифру 3
console.log(matrixOne[0][2]);

// Общее число элементов массива содержится в его свойстве length:
let users  = ["Tim", "Tom", "Bob", 'Billy'];
console.log(users.length);// 4 элемента 

/*
массив является обьектом соответственно, ссылочным типом данных,
соответственно при присваивании или копировании массива, 
внесение изменений, подобно поведению обьектов
*/
let arrName = ["Tim", "Tom", "Bob", 'Billy'];
console.table(arrName);

let arrUserName = arrName;
arrUserName.length = 2;
console.table(arrName);

//===========================================================
/*
Мы можем заменить элемент, 
присвоить сушествующему елементу новое значение
*/ 
let arrFruts = ["apple", "apricot", "nectarine", "orange"];

arrFruts[3] =  "persika";
console.table(arrFruts[3]);

//…Или добавить новый к существующему массиву:
arrFruts[4] =  "orange";
console.table(arrFruts[4]);

/*
При обрашении к элементу которого нет в масиве получим ошибку
console.table(arrFruts[5]);
*/

//===================================================================================

//! МЕТОДЫ МАССИВОВ.

/*
Итак с простеньким разобрались теперь перейдем к методам массивов.
Но перед этим стоит поговорить о вариантах применения для массивов.

Первый из них это очередь или упорядоченная коллекция элементов.
Очередь поддерживает два вида операций:
1. добавление элемента в конец очереди
2. удаление элемента в начале, сдвигая очередь,
	так что второй элемент становится первым.

Другой вариант применения для массивов – структура данных,
называемая стек.
Стек поддерживает два вида операций:
1. добавление элемента в конец
2. удаление последнего элемента

Массивы в JavaScript могут работать и как очередь, и как стек.
Мы можем добавлять/удалять элементы как в начало, так и в конец массива.
И в этом нам помогут следующие методы:
*/

// Метод push - добавляет элемент в конец массива

let arrUsersApp = ['Ваня', 'Коля', 'Оля',];
arrUsersApp.push('Вася');
console.log(arrUsersApp);

arrUsersApp.push('Дима', 'Катя');
console.log(arrUsersApp);

//============================

/*
Метод shift - удаляет элемент в начале,
так что второй элемент становится первым.
*/

let arrFruitBowl = ["apple", "apricot", "nectarine", "orange"];
console.table(arrFruitBowl);
arrFruitBowl.shift();
console.table(arrFruitBowl);

//==============================

// Метод pop  - удаляет последний элемент

let arrExoticFruit = ["apple", "apricot", "nectarine", "orange"];
console.table(arrExoticFruit);
arrExoticFruit.pop();
console.table(arrExoticFruit);

//==============================

// Метод unshift  - добавляет элемент в начало массива

let arrNamePerson = ['Ваня', 'Коля', 'Оля'];
console.table(arrNamePerson);
arrNamePerson.unshift('Вася');
console.table(arrNamePerson);

arrNamePerson.unshift('Вася', 'Оксана', 'Саша');
console.table(arrNamePerson);

//==============================

/*
Методы push/pop выполняются быстро, а методы shift/unshift – медленно.

Давайте рассмотрим на примере добавления элемента
в начало массива (unshift);

Просто взять и добавить элемент с номером 0 недостаточно.
Нужно также заново пронумеровать остальные элементы.

Операция unshift должна выполнить 3 действия:
 1. Добавить элемент с индексом 0.
 2. Сдвинуть все элементы вправо, заново пронумеровать их,
	заменив 0 на 1, 1 на 2 и т.д.
 3. Обновить свойство length.

Чем больше элементов содержит массив, тем больше
времени потребуется для того, чтобы их переместить,
больше операций с памятью.

А вот что бы добавить элемент в конец массива (метод push)
не нужно ничего перемещать.
Так же не нужно заново нумеровать элементы. Достаточно
увеличить значение length.
*/

//===============================================================================================================================

// Удаление/добавление/изменение конкретных элементов


let arrPerson = ['Ваня', 'Оксана', 'Коля', 'Оля', 'Ваня'];

delete arrPerson[1];
console.log(arrPerson);
console.log(arrPerson[1]);
console.log(arrPerson.length);


// Метод splice. Позволяет добавлять, удалять и заменять элементы.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])

// Удаляем элемент
let arrOne = ['Ваня', 'Коля', 'Оля',];
// Начиная с первой позиции ('Коля'), удаляем один элемент
console.table(arrOne);
arrOne.splice(1, 1);//(1 позиция с которой стартуем('Коля'), 1 количество элементов которые нужно удалить) 
console.table(arrOne);

// Удаляем элемент и возвращаем его в переменную
let arrTwo = ['Оксана', 'Коля', 'Оля', 'Ваня',];
console.table(arrTwo);
let removed = arrTwo.splice(1, 1);
console.log(removed);

// Заменяем элементы
let arrThree = ['Оксана', 'Оля', 'Ваня',];
console.table(arrThree);
// Начиная с нулевой позиции (Оксана), заменяем один элемент
arrThree.splice(0, 1, 'Коля');
console.table(arrThree);

// Добавляем элементы
let arrFour = ['Оксана', 'Яша', 'Оля', 'Ваня',];
console.table(arrFour);
// Начиная с первой позиции (перед 'Коля'), добавляем два элемента
arrFour.splice(1, 0, 'Коля', 'Маша');
console.table(arrFour);

// Удаляем элемент
let arrFive = ['Оксана', 'Коля', 'Оля', 'Ваня',];
console.log(arrFive);
// Начиная с последней позиции (Ваня), удаляем один элемент
arrFive.splice(-1, 1);// -1 говорит о том что начинаем с последней позиции, 1 количество удаляемых элементов
console.log(arrFive);

//========================================================================================================================================================

/*
Метод slice.
Cоздаёт новый массив, в который копирует часть либо весь массив
Синтаксис arr.slice([start], [end]) Не включая [end]
*/

// Копируем часть массива
let arrExoticFruitBowl = ["apple", "apricot", "nectarine", "orange"];
console.log(arrExoticFruitBowl);

/*
slice(1, 2)
Начиная с 1й позиции 'apricot',
до 2й позиции 'nectarine' (не включая)
*/
let arrExoticFruitBowlTwo = arrExoticFruitBowl.slice(1, 2);
console.log(arrExoticFruitBowlTwo);

/*
slice(-2, -1)
Начиная с предпоследней позиции 'nectarine',
до последней 'orange' (не включая)
*/
let arrExoticFruitBowlThree = arrExoticFruitBowl.slice(-2, -1);
console.log(arrExoticFruitBowlThree);

// Копируем весь массив
let arrExoticFruitBowlFour = arrExoticFruitBowl.slice();
console.log(arrExoticFruitBowlFour);

//------------------------

/*
Метод concat.
Cоздаёт новый массив, в который копирует данные из других массивов
и дополнительные значения (в конец массива)
Синтаксис arr.concat(arg1, arg2...)
*/

let arrPeople = ['Ваня', 'Коля', 'Оля',];
let arrPeopleTwo = arrPeople.concat('Петя');
console.log(arrPeople);
console.log(arrPeopleTwo);

//========================================================================================================================================================

// Поиск в массиве

// Методы indexOf/lastIndexOf и includes
// алналоги строковым методам
/*
1. arr.indexOf(item, from) ищет item, начиная с индекса from,
	и возвращает индекс, на котором был найден искомый
	элемент, в противном случае - 1.
2. arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
3. arr.includes(item, from) – ищет item, начиная с индекса from,
	и возвращает true, если поиск успешен.
*/
let arrNames = ['Ваня', 'Коля', 'Оля', 'Вася',];

// indexOf
console.log(arrNames.indexOf('Коля'));
console.log(arrNames.indexOf('Петя'));
console.log(arrNames.indexOf('Коля', 2));// Ищем Колю начиная со второй позиции (Оля)

// includes
console.log(arrNames.includes('Коля'));
console.log(arrNames.includes('Петя'));
console.log(arrNames.includes('Коля', 2));// Ищем Колю начиная со второй позиции (Оля)

//------------------------

// find и findIndex
// поиск в массиве объектов с пределённым условием

/*
Синтаксис
let result = arr.find(function(item, index, array) {
  если true - возвращается текущий элемент и перебор прерывается
  если все итерации оказались ложными, возвращается undefined
});
*/

let arrNamsUser = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]

let result = arrNamsUser.find(function (item, index, array) {
	return item.age === 18;// хочу что бы вернулся обьект свойство age строго равно 18
});
// как только функция вернет true код отановится,  и вернет исомый элемент
let resultOne = arrNamsUser.find(function (item, index, array) {
	return item.age === 'Не скажу';
});
//let resultOne = arr.find(item => item.age === 18);
console.log(result);
console.log(resultOne);


//findIndex
let resultTwo = arrNamsUser.findIndex(item => item.age === 18);
console.log(resultTwo);

/*
findIndex делает то же самое только с помошью стрелочной функции,
но возвращает ключ элемента
*/ 

//------------------------

// filter
// Метод ищет все элементы, на которых функция-колбэк вернёт true.
/*
синтаксис
let results = arr.filter(function (item, index, array) {
	если true - элемент добавляется к результату, и перебор продолжается
	возвращается пустой массив в случае, если ничего не найдено
});
*/

let arrUserObjekt = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]
let resultUseFilter = arrUserObjekt.filter(function (item, index, array) {
	return item.age >= 18;
});
console.log(resultUseFilter);


//========================================================================================================================================================

// Сортировка массивов

// Сотритовка слов
let arrNamesUsers = ['Вася', 'Ваня', 'Оля'];
console.log(arrNamesUsers.sort());

// Сотритовка чисел
let arrNumbers = [8, 22, 1,];
console.log(arrNumbers.sort());

// По умолчанию элементы сортируются как строки.
// Для строк применяется лексикографический порядок,
// и действительно выходит, что "8" > "22".
console.log("8" > "22");

//--------

// Метод sort(fn)
// сортирует массив на месте, меняя в нём порядок элементов.


// Сотритовка чисел
let arrNumbersTwo = [8, 22, 1,];
console.log(arrNumbersTwo.sort());

// Функция сортировки

/*
function compareNumeric(a, b) {
	console.log(`Сравниваем ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;
    //return a - b
}
console.log(arrNumbersTwo.sort(compareNumeric));

*/ 

console.log(arrNumbersTwo.sort((a, b) => a - b));

//--------


// Метод reverse
// меняет порядок элементов в массиве на обратный.

let arrReverseName = ['Ваня', 'Коля', 'Оля'];
console.log(arrReverseName);
console.log(arrReverseName.reverse());



//========================================================================================================================================================

// Преобразование массивов

// Метод map.

/* 
    Вызывает функцию для каждого элемента массива 
и возвращает массив результатов выполнения этой функции.

let result = arrStringDate.map(function(item, index, array) {
    возвращается новое значение вместо элемента
});
*/

let arrStringDate = ['Ваня', 'Коля', 'Оля',];

let resultMap = arrStringDate.map(function (item, index, array) {
	return item[0];
});
//let result = arr.map(item => item[0]);
console.log(arrStringDate);
console.log(resultMap);


//------------------------

/*
 Метод split преобразовывает строку в
 массив по заданному разделителю
 Синтаксис: str.split(delim)
*/

let str = 'Ваня,Коля,Оля';
console.log(str);
let arrStringSplit = str.split(',');
console.log(arrStringSplit);


// Можно ограничить кол-во объектов
// которые попадут в массив

let arrStringSplitTwo = str.split(',', 2);
console.log(arrStringSplitTwo);

//----------

/*
 Метод join преобразовывает массив в
 строку c заданным разделителем
 Синтаксис: arr.join(glue)
*/

let arrNamePeople = ['Ваня', 'Коля', 'Оля',];
let srt = arrNamePeople.join(':');
console.log(srt);


// Получение строки из массива
let arrNamePeopleTwo = ['Ваня', 'Коля', 'Оля'];
console.log(String(arrNamePeopleTwo));


//========================================================================================================================================================

// Проверка Array.isArray()

/*
Напомню, массивы не образуют отдельный тип данных.
Они основаны на объектах.
*/

let objEmpty = {};
let arrEmpty = [];

console.log(typeof objEmpty);
console.log(typeof arrEmpty);

// Как же нам узнать где массив а где нет?

if (Array.isArray(arrEmpty)) {
	console.log('Это массив!');
} else {
	console.log('Это не массив!');
}

//========================================================================================================================================================

// Перебор элементов
//! Цикл for


let arrNameListing = ['Ваня', 'Коля', 'Оля','Юля',];
console.log(arrNameListing.length);

// Цикл FOR
for (let i = 0; i < arrNameListing.length; i++) {
	console.log(arrNameListing[i]);
}


//---------------------


//! Цикл FOR...OF
// Можно использовать для вывода значений
let arrListingName = ['Ваня', 'Коля', 'Оля','Юля',];

for (let arrItem of arrListingName) {
	console.log(arrItem);
}

//---------------------


//! Метод перебора forEach
// Выполняет функцию для каждого элемента массива
/*
arr.forEach(function (item, index, array) {
	... делать что-то с item
});
*/


let arrListingNameForEach = ['Ваня', 'Коля', 'Оля','Юля',];

arrListingNameForEach.forEach(function (item, index, array) {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});

console.log();

// Стрелочная функция
arrListingNameForEach.forEach((item, index, array) => {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});

//--------


let arrValueElement = ['Ваня', 'Коля', 'Оля','Юля',];

arrValueElement.forEach(show);

function show(item) {
	console.log(item);
}


//========================================================================================================================================================

// Методы reduce/reduceRight

/*
Итак, мы выяснили что если нам нужно перебрать
массив – мы можем использовать forEach, for или for..of.
Если нам нужно перебрать массив и вернуть
данные для каждого элемента – мы используем map.

Методы arr.reduce и arr.reduceRight похожи на эти методы,
но они немного сложнее и используются для вычисления
какого-нибудь единого значения на основе всего массива.
*/
/*
Синтаксис
let value = arr.reduce(function(previousValue, item, index, array) {
    ...
}, [initial]);

*/

/*
К привычным нам аргументам item, index, array
добавляется previousValue:

previousValue – результат предыдущего вызова этой функции,
равен initial при первом вызове (если передан initial),
item – очередной элемент массива,
index – его индекс,
array – сам массив.

Функция применяется по очереди ко всем элементам
массива и «переносит» свой результат на следующий вызов.
*/



let arrNumbersOne = [1, 2, 3, 4, 8];
let reduceValueOne = arrNumbersOne.reduce(function (previousValue, item, index, array) {
	return item + previousValue;
}, 0);//0  значение previousValue = 0
console.log(reduceValueOne);

/*
Шаг №1
previousValue = 0
item = 1
их сумма = 1

Шаг №2
previousValue = 1
item = 2
их сумма = 3

Шаг №3
previousValue = 3
item = 3
их сумма = 6

Шаг №4
previousValue = 6
item = 4
их сумма = 10

Шаг №5
previousValue = 10
item = 4
их сумма = 18
*/
//--------

/*
let arrArrow = [1, 2, 3, 4];
let reduceValueArrow = arrArrow.reduce((pValue, item) => item + pValue, 0);
console.log(reduceValueArrow);
*/


//------------------------------------------------------------

/*
Если не указать начальное значение, то оно будет равно
первому элементу массива (previousValue=Ваня)
А работа метода начнется со второго элемента (item=Коля)
*/
let arrTwoUsers = ['Ваня', 'Коля', 'Оля','Юля',];

let reduceValueTwo = arrTwoUsers.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
	console.log(item);
	return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);



// Метод arr.reduceRight работает аналогично, 
// но проходит по массиву справа налево.

let arrTwoUsersReduce = ['Ваня', 'Коля', 'Оля','Юля',];

let reduceValueThree = arrTwoUsersReduce.reduceRight(function (previousValue, item, index, array) {
	console.log(previousValue);
	console.log(item);
	return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueThree}`);


//========================================================================================================================================================


// Массив используем как массив
/*
Следует помнить, что массив является объектом и,
следовательно, ведёт себя как объект.
*/

let arrNameUs = ['Ваня', 'Коля', 'Оля','Юля',];
console.log(typeof arrNameUs);

// Добавление нечислового свойства
arrNameUs.name = "Имя";
console.log(arrNameUs);

/*
Но то, что действительно делает массивы особенными – это их внутреннее
представление. Движок JavaScript старается хранить элементы
массива в непрерывной области памяти, один за другим.
Существуют и другие способы оптимизации, благодаря которым
массивы работают очень быстро.

Но все они утратят эффективность, если мы перестанем работать
с массивом как с «упорядоченной коллекцией данных» и начнём
использовать его как обычный объект.

Варианты неправильного применения массива:
1. Добавление нечислового свойства, например: arr.test = 5.
2. Создание «дыр», например: добавление arr[0],
	затем arr[1000](между ними ничего нет).
3. Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.
*/


//========================================================================================================================================================
