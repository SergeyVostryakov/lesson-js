//! МУТАЦИИ
//* значения примитивных типов
const x = 40; // обьявили константу x = 40
let y = x; // обьявили переменную y приравняли её х, y = 40 
//? значение которое было в X копируется в Y  
//* copy by value  копирование значения 
y = 30;// перезаписали значение теперь y = 30 и не равен x
console.log(x, y);

//! Значения ссылочного типа
const userDate = {
    name: 'Mike',
    age: 21,
    sex: 'men'
};
console.log(userDate);
userDate.age = 31;
userDate.isMarried = true;
console.log();
console.log(userDate);

//! Несмотря на то что userDate обьявлен как const мы можем изменять СВОЙСТВА обьекта менять их значения, или добавлять новые свойства.
//? МУТАЦИЯ - изменение и или добавление тех или иных свойств обьекта.
//* Мутация Обьекта , на который ссылается переменная userDate 
//* userDate.age = 31;
//* userDate.isMarried = true;

//! МУТИРОВАНИЕ КОПИЙ (мутирование обьекта через копию)
const userTwo = userDate; // создали копию
//* copy by reference копирование ссылки
console.log(userTwo);
userTwo.name = 'Bob';
userTwo.age = 18;
userTwo.isMarried = false;
console.log();
console.log(userTwo);
console.log(userDate); // данные в исходном обьекте тоже изменились, 

/*
происходит это потому что мы копируем не сам обьект (значения) а только ссылку на него, 
userTwo и userDate ссылаються на один обьект в памяти
copy by reference копирование ссылки
userTwo можно изменять через userDate
*/ 

userDate.name = 'Boby';
console.log();
console.log(userTwo); //* свойство обьекта name ='Boby', как у userTwo так и userDate

//! КАК ИЗБЕЖАТЬ МУТАЦИЙ

// Вариант 1
// Дублирование обьектов (Object.assign)
// Использовать assign,   этод метод является свойством глобального обьекта 

/*
    СИНТАКСИС
Object.assign(куда(Обьект), что(Свойство 1), что(Свойство 2)... итд.);
*/
const userDateObject = {
    name: 'Nike',
    age: 40,
    sex: 'men'
}
console.log(userDateObject);
console.log();
const newUser = Object.assign({}, userDateObject);
newUser.age = 41;
newUser.name = 'Tom';

console.table(userDateObject);
console.table(newUser);

// {} указывает что обьект пустой(), Object.assign создаст новый обьект и запишет в него свойства userTwo

//! !!!!ВАЖНО если свойства обьекта имеют вложенные свойства(обьекты) ссылки на них сохранятся
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
}
console.log(mysculCar);
console.log();
console.log(mysculCar.engine.liters);
const mysculCar2 = Object.assign({}, mysculCar);
mysculCar2.engine.liters = 3.0;
console.log(mysculCar.engine.liters);

// добавление новых свойств в обьект с помощью Object.assign

const addProperty = {
    name: 'Nike',
    age: 40,
    sex: 'men'
}
console.table(addProperty);
console.table();
Object.assign(addProperty, {['stockholm place']: 'Bromma', city:'Stockholm'});
console.table(addProperty);

//! КАК ИЗБЕЖАТЬ МУТАЦИЙ
//* Вариант 2
const versionTwoChangeObjekt = {
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
}
const mysculCar3 = {...versionTwoChangeObjekt};

/* 
... оператор spred оператор разделения обьекта на свойства
{...mysculCar } разделили обьект на свойства и потом собираем их в новый обьект mysculCar3 в памяти создается новая ссылка

*/
mysculCar3.model = 'Mustang Continental';
console.log();
console.log(versionTwoChangeObjekt.model);
console.log(mysculCar3.model);
//! !!!!ВАЖНО если свойства обьекта имеют вложенные свойства(обьекты) ссылки на них сохранятся

//! КАК ИЗБЕЖАТЬ МУТАЦИЙ
//* Вариант 3
const versionThreeChangeObjekt = {
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
}
const mysculCar4 = JSON.parse(JSON.stringify(versionThreeChangeObjekt));
// JSON.stringify конвертируем в строку JSON.parse конвертируем снова в новый обьект
mysculCar4.engine.liters = 5.0;
console.log('полностью избежали мутаций');
console.log(versionThreeChangeObjekt.engine.liters);
console.log(mysculCar4.engine.liters);
console.table(mysculCar4);

//! ПРОВЕРКА СУЩЕСТВОВАНИЯ СВОЙСТВ
// цикл if 
const checkForPropertyIs = {
    manufacturer: 'ford',
    model: 'Continental',
}
console.table(checkForPropertyIs);
// if возвращает false
if (checkForPropertyIs.engine) {
    console.log(checkForPropertyIs.engine);
}else{
    console.log('Нет такого свойства обьекта');
}
// if возвращает true
if (checkForPropertyIs.model) {
    console.log(checkForPropertyIs.model);
}else{
    console.log('Нет такого свойства обьекта');
}

//! ПРОВЕРКА СУЩЕСТВОВАНИЯ СВОЙСТВ
// Опциональная цепочка, с помощью оператора ?

const engine = {
    liters : 4.0,
    countCylinders: 6,
    yearOfProduction: {
        year: 1970,
        month: 'March'
    }
}
console.log(engine.yearOfProduction.year);

// Опциональная цепочка
/*
с помощью оператора ?. проверяется наличие данного свойства у обьекта 
*/
console.log(engine?.yearOfProduction?.fuel);
console.log(engine?.yearOfProduction?.year);

//! ПРОВЕРКА СУЩЕСТВОВАНИЯ СВОЙСТВ
// С помощью оператора in 
const engineOperatorIn = {
    liters : 4.0,
    countCylinders: 6,
    yearOfProduction: {
        year: 1970,
        month: 'March'
    }
}
if ('liters' in engineOperatorIn) {
    console.log(engineOperatorIn.liters);
}
/*
в большинстве случаев нам достатосчно проверки через цикл if 
или опциональной цепочки.
Но есть особый случай когда свойство есть но его значение undefined 
В  этом случае что бы все отработало верно, использовать оператор in 
*/

const operatorIsUndefined = {
    liters : 4.0,
    countCylinders: 6,
    yearOfProduction: undefined 
}
if (operatorIsUndefined.yearOfProduction) {// вернет false код не выполнится
    console.log(operatorIsUndefined.yearOfProduction);
}else{
    console.log('Нет такого свойства обьекта');
}

if ('yearOfProduction' in operatorIsUndefined) {
    console.log(operatorIsUndefined.yearOfProduction);
}

//! ПРОВЕРКА СУЩЕСТВОВАНИЯ СВОЙСТВ
// С помощью цикла for in 

/*
Для перебора всех свойств обьекта используется цикл for in
for (let key in object){
    тело цикла выполняется для каждого свойства обьекта
}
let key содержит имена свойств(ключи свойств)
*/

const engineOperatorForIn = {
    liters : 4.0,
    countCylinders: 6,
    yearOfProduction: {
        year: 1970,
        month: 'March'
    }
}

for (let key in engineOperatorForIn) {
    // ключи
    console.log(key);// имена свойств (ключей) liters, countCylinders, yearOfProduction
    // значение ключей
    console.log(engineOperatorForIn[key]);
}

for (let key in engineOperatorForIn.yearOfProduction) {
    // ключи
    console.log(key);// имена свойств (ключей) year, month
    // значение ключей
    console.log(engineOperatorForIn.yearOfProduction[key]);
}

//! МЕТОДЫ ОБЬЕКТА

const metodObjekt = {
    liters : 4.0,
    countCylinders: 6,
    yearOfProduction: {
        year: 1970,
        month: 'March'
    },
/*
ДЛИННАЯ ЗАПИСЬ
        showInfo: function () {
        console.log(`Двигатель обьемом ${metodObjekt.liters} литра, ${metodObjekt.countCylinders} цилиндров, ${metodObjekt.yearOfProduction.year} года выпуска`)
    }
    более короткая запись кода того же свойства
*/
    showInfo () {
    console.log(`Двигатель обьемом ${metodObjekt.liters} литра, ${metodObjekt.countCylinders} цилиндров, ${metodObjekt.yearOfProduction.year} года выпуска`)
}

}
metodObjekt.showInfo();

/*
Использование this в методах обьекта 
словом this можно заменить текуший обьект 
metodAndThis.liters 
this.liters
this более уневерсален мо точно знаем что обращаемся к свойству нашего обьекта
если будут внесены новые данные код отработает стабильно 
так же если код будет отрабатывать при вложености как в примере ниже через стрелочную функцию
*/

// тот же кож записан с использованием this  
const metodAndThis = {
    liters : 4.0,
    countCylinders: 6,
    yearOfProduction: {
        year: 1970,
        month: 'March'
    },
    showInfo () {
        
            console.log(`Двигатель обьемом ${this.liters} литра, ${this.countCylinders} цилиндров, ${this.yearOfProduction.year} года выпуска`)
}
}
metodAndThis.showInfo();

// This вложенная функция и её запись в виде стрелочной функции
/*
при таком написании кода мы получаем ошибку, 
так как функция show обращается к родителю showinfo
а у showinfo нет значений liters итд. они есть только у обьекта metodAndThisArrow

что бы код заработал код необходимо обьявить show через синтаксис стрелочной функции.

у стрелочной функции нет своего this 
использоватся будет значение из внешнего источника metodAndThisArrow.showInfo();

const metodAndThisArrow = {
    liters : 4.0,
    countCylinders: 6,
    yearOfProduction: {
        year: 1970,
        month: 'March'
    },
    showInfo () {
        show () {
            console.log(`Двигатель обьемом ${this.liters} литра, ${this.countCylinders} цилиндров, ${this.yearOfProduction.year} года выпуска`)
        }
        show ();
}
}
metodAndThisArrow.showInfo();
*/

const metodAndThisArrow = {
    liters : 4.0,
    countCylinders: 6,
    yearOfProduction: {
        year: 1970,
        month: 'March'
    },
    showInfo () {
        let show = () =>  console.log(`Двигатель обьемом ${this.liters} литра, ${this.countCylinders} цилиндров, ${this.yearOfProduction.year} года выпуска`)
        show ();
}
}
metodAndThisArrow.showInfo();

//! ФУНКЦИЯ КОНСТРУКТОР

/*
Обычный синтаксис создания обьекта позволяет нам создать только один обьект.
Но зачастую нам нужно создавать много однотипных обьектов.
Это можно сделать при помощи оператора new 
*/
/*
Функции конструкторы - являются обычными функциями 
Но есть два отличия:
1. Имя - должно начинатся с большой буквы
2. Функция Конструктор вызывается при помощи оператора new 

 */

function UserInfo(name){
    //this = {} создается пустой обьект(неявно автоматически )
    this.name = name;
    this.age = 39;
}

let createUserLena = new UserInfo('Лена');
console.log(createUserLena);


let createUserTim = new UserInfo('Timmy');
console.log(createUserTim);