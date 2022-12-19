


//! ОБЬЕКТЫ это набор свойств имя:значение 
/*
в отличии от примитивных типов данных имеющих одно значение,
обьекты имеют несколько значений, 
так же могут содержать вложенные сущности 
как значение
 */

//СИНТАКСИС
// Создание обьекта
let infoUser = new Object();// Синтаксис "Конструктор обьекта"

const userInfo = {};// Синтаксис "Литерал обьекта"
// Напиболее часто используемый
const userDateInfo = {
    name: 'Boby',
    age:30,
};
console.table(userDateInfo);
console.log(userDateInfo);
console.table(userInfo);
console.table(typeof userInfo);

//! ИМЕНА СВОЙСТВ
/*
Имена свойств состоящие из двух и более сло записываются в кавычки
*/
const userDateInformation = {
    name: 'Boby',
    age:30,
    'leave city': 'Baku',
    'is married': true,

};
console.table(userDateInformation);
console.log(userDateInformation);
console.log();
console.table(userDateInformation['name']);
console.table(userDateInformation['leave city']);
console.log(userDateInformation["leave city"]);
console.table(typeof userDateInformation.age);
/*
Обрашение к свойствам обьекта именна которых состоят из двух и более слов 
не через точечную нотацию 
а через []
*/ 
// ВЫЧИСЛЯЕМЫЕ ИЛИ ПЕРЕДАВАЕМЫЕ ИМЕНА

//Вычисляем имя
let firstPartName = 'likes';
let calcName = {
    name: 'Boby',
    age: 30,
    [firstPartName + ' this city']: true,
};
console.log(calcName['likes this city']);
console.table(calcName);

// Передаем имя
/* 
Если у нас есть переменная с каким либо значением 
нам надо создать свойство обьекта с ИМЕНЕМ как у переменной
!(ВАЖНО: Мы можем присвоить любое значение этому свойству)  
нам как раз подойдет только синтаксис [] . нельзя использовать Dot notayion
*/

const secondtName = 'likes';
const passOnName = {
    name: 'Boby',
    age: 30,
    [secondtName]: true,
};
console.log(passOnName[secondtName]);
console.table(passOnName);

// Второй вариант написания того же кода, через обращение с свойствам []

const myCat = {
    name: 'Persic' 
};
const breedPets = 'breed';
console.log(breedPets);
myCat[breedPets] = 'Backyard';
console.log(myCat);
console.table(myCat);

myCat.breedPets = 'Backyard';//* в таком случае при использовании Dot notayion создается свойство breedPets со значением Backyard
console.log(myCat);
console.table(myCat);

// тип данных Simbol 

// Создаем переменную ID (имя переменной) и описанием  'id'
let id = Symbol('id');
const userDateSymbol = {
    name: 'Userr name',
    age: 89,
    [id]: 'Значение',
}
console.log(userDateSymbol);
console.table(userDateSymbol);

/*
Основное применение символов 

1. "Скрытые"  свойства обьектов
символьное свойство не появится в for ... in 
2. Использование системных символов
Symbol.iteration, Symbol.toPrimitive итд 
*/

//! СВОЙСТВА
const myPlace = {
    city:'Stockholm',
    country:'Sweden',
    travel: true
};
console.table(myPlace);
console.log(myPlace);
// порядок свойств не имеет значения
const myPlace2 = {
    city:'Stockholm',
    country:'Sweden',
    travel: true
};
console.table(myPlace2);
console.log(myPlace2);
//! технически они одинаковые myPlace и myPlace2

// получение значений свойств через Dot notayion
console.log(myPlace.city);

//* Изменение или добваление свойств так же через Dot notayion
myPlace2.city = 'New York';
myPlace2.country = 'USA';
console.log(myPlace2.city);
myPlace2.population = 'several millions';
console.log(myPlace2.population);
console.log();
console.log(myPlace2);

// добавление двойного названия используем []
myPlace2['Stockholm place'] = 'Bromma';
console.log(myPlace2);
console.table(myPlace2);

//! Удаление свойств через оператор delete  и  Dot notayion
console.log();
console.log(myPlace2);
delete myPlace2.population;
console.log();
console.log(myPlace2);
//* Кроме Dot notayion, возможно работать со свойствами обьекта используя []. Пример:
myPlace2 ['popular'] = true;
console.log(myPlace2);

//? Использование функции конструктора
//* 1 Определите тип объекта, написав функцию-конструктор. Название такой функции, как правило, начинается с заглавной буквы.
//* 2 Создайте экземпляр объекта с помощью ключевого слова new.
function UserCar(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
let mycar = new UserCar("Eagle", "Talon TSi", 1993);
console.log(mycar);

//! СВОЙСТВО ОБЬЕКТА ИЗ ПЕРЕМЕННОЙ
// (Не путать с конструктором)
function returnNameAndage(name, age) {
    return{
    name: name,
    age: age,
}
}

let dateForFunction = returnNameAndage('Василий' , 45);
console.log(dateForFunction);

// короткая запись того же кода

function shortRecord(name, age) {
    return{
    name,
    age,//! ВАЖНО Короткие записи всегда сверху потом все остальные
}
}

let callShortFunction = shortRecord('Tim' , 18);
console.log(callShortFunction);

// ВЛОЖЕННЫЕ СВОЙСТВА

//! значение само по собе может быть обьектом, иметь гнесколько имен и значений внутри своего значения, называется вложенные свойства
const mysculCar = {
    manufacturer: 'ford',
    model: 'Mustang Continental Mark II',
    engine: {
        liters : 4.0,
        countCylinders: 6,
        yearOfProduction: {
            year: 1970,
            month: 'March'
        }
    }
};
//* Синтаксис получения данных вложеных свойств
console.log(mysculCar.manufacturer);
console.log(mysculCar.engine.liters);
console.log(mysculCar.engine.yearOfProduction.month);
//! использовать квадратные скобки только если надо указать выражение
console.log(mysculCar.engine ['countCylinders', 'yearOfProduction']);

//* ИСПОЛЬЗОВАНИЕ ПЕРЕМЕННЫХ
const nameUser='Evgeniy';
const userAge = 37;

const userDate = {
    nameUser: nameUser,
    userAge: userAge,
    married: true,
    sex:'man'
}
//* Сокращенный формат записи свойств
const nameUserTwo='Evgeniy';
const userAgeTwo = 37;
const userTwoDate = {
    nameUserTwo,
    userAgeTwo, //! ВАЖНО Короткие записи всегда сверху потом все остальные
    married: true,
    sex:'man' //? все последующие записи (для удобства чтения данных)
}

//! ГЛОБАЛЬНЫЕ ОБЬЕКТЫ
//? WINDOW 
//* CLOBAL Node.js

//? WINDOW Веб браузеры это глобальный обьект в вовсех веб браузеров со своими методами и свойствами. И доступны пр умолчанию
// window.innerWidth
//clobalThis 
console.log(10);// console одно из свойств глобального обьекта
global.console.log(10);// результат один и тот же
// набрать в бконсоле браузера window.console.log(10); результат один и тот же

//! МЕТОДЫ
//? метод это свойство обьекта, значение которого ФУНКЦИЯ. методы(функции) можно вызывать выполнябт свои задачи и возвращают значение
const mysculCar2 = {
    manufacturer: 'ford',
    model: 'Mustang Continental Mark II',
    engine: {
        liters : 4.0,
        countCylinders: 6,
        yearOfProduction: {
            year: 1970,
            month: 'March'
        },
    engineMakesSouds: function () {
        console.log ('RRRRRRRRRRRR');
    }
    }
};
mysculCar2.engine.engineMakesSouds();

//! Короткая запись той же функции
const mysculCar3 = {
    manufacturer: 'ford',
    model: 'Mustang Continental Mark II',
    engine: {
        liters : 4.0,
        countCylinders: 6,
        yearOfProduction: {
            year: 1970,
            month: 'March'
        },
    engineMakesSouds () {//* короткая запись engineMakesSouds () равнозначна: engineMakesSouds: function ()
        console.log ('ROM DOM DOM'); //? {console.log ('ROM DOM DOM');} ТЕЛО функции
    }
    }
};
mysculCar3.engine.engineMakesSouds();

//! МЕТОДЫ и СВОЙСТВА ОБЬЕКТОВ
//? модоты содержат функции
//? свойства не содержат функции только значения
mysculCar3.engine.engineMakesSouds(); //! Вызвали метод engineMakesSouds() обьекута mysculCar3  свойства engine
console.log (mysculCar3.engine.liters);//! вывели в консоль значение свойства engine liters обьекта mysculCar3
console.log (mysculCar3.model);//! вывели в консоль значение свойства model обьекта mysculCar3
//! !!!!!! итого: ОБЬЕКТ ЭТО НАБОР СВОЙСТВ некоторые из свойств обьекта являются МЕТОДАМИ если их значение  FUNCTION

//! JSON - JavaScript Object Notation
//? Формат обмена данными  
const mysculCar4 = {
    manufacturer: 'ford',
    model: 'Mustang Continental Mark II',
    engine: {
        liters : 4.0,
        countCylinders: 6,
        yearOfProduction: {
            year: 1970,
            month: 'March'
        },
    engineMakesSouds () {//* короткая запись engineMakesSouds () равнозначна: engineMakesSouds: function ()
        console.log ('ROM DOM DOM'); //? {console.log ('ROM DOM DOM');} ТЕЛО функции
    }
    }
};
/*
! пример записи в JSON формате
{ в нем есть набор свойств  все свойства находятся между двойными кавычками
    "manufacturer": "ford",
    Значения могут быть разных типов 'ford' String
    "model": "Mustang Continental Mark II",
    ВАЖНО свойства очень похожи на свойства обьектов но пишутся между двойными кавычками "model": "Mustang Continental Mark II"
    "engine": {
        "liters" : 4.0, Значения могут быть разных типов 4.0 number
        "countCylinders": 6,
        "yearOfProduction": { Можно использовать вложенные свойства
            "year": 1970,
            "month": 'March'
            "completed": false Значения могут быть разных типов false boolean
        }
    }
}
! Выше написано в формате обьекта просто для лучшего пониманияданные передаются всегда строкой
{"manufacturer": "ford","model": "Mustang Continental Mark II","engine": {"liters" : 4.0,"countCylinders": 6,"yearOfProduction": {"year": 1970,"month": 'March',"completed": false}}}
! получив данные в формате строки с помощью функции JSON.parse() преобразуем строковую запись JSON  в формат записи JavaScript object
обратная футкция JSON.stringify() преобразует запись JavaScript object в формат строковой записи JSON

*/
const car4 = {
    manufacturer: 'Mazda',
    model: 'CX 5',
    yearOfProduction: {
        year: 1970,
        month: 'March',
        volume: 5 
    }
};
console.log (car4);//* вывели обьект в консоль
const car5 = JSON.stringify(car4);//* обьявили через новую переменную 
console.log (car5);//* вывели в консоль в формате данных строковой записи JSON
console.log (JSON.parse(car5));//* спарсили в консоль в формате данных JavaScript object без обьявления переменной
console.log (JSON.stringify(JSON.parse(car5)));