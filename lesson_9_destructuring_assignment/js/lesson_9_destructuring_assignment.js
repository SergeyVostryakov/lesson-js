

//! Деструктуризация.

/*
Деструктуризация.
С помощью деструктуризации можно создавать новые переменные
и присвоить им значения. Позволяет разбивать объект или массив 
на переменные и присваивать им значения.
*/

//==============================================================================

//! Деструктуризация обьекта.
/*
Синтаксис.
есть обьект:
const имя_обьекта = {
    свойство1: значение1 
    свойство2: значение2 
    свойство3: значение3 
    свойство4: значение4 
    ...
}

создание одной переменной
const {свойство1} = имя_обьекта

создание нескольких переменных
let {свойство2, свойство3, свойство4, ..... } = имя_обьекта

можно использовать как const так и let.
*/

const userDate = {
    name: 'Alex',
    age: 34,
    sex: 'men',
    weight: 160
}

// Создать одну переменную

let {name} = userDate;
console.log(name);
console.log();

//создание нескольких переменных
let {age, sex, weight} = userDate;
console.log(age, sex,weight);
console.log();
console.log(sex);

/*
что происходит в примере:
обьявление новых переменных на основе свойств обьекта.
и присваивание им того же значения что и свойства обьекта.

С правой стороны 
userDate имя пееременной в которой находится обьект

С левой стороны
age, sex,height названия новых переменных,
совпадают с именами свойств обьекта,
на их основе создадутся новые переменные с те ми же именами и значениями.

{} благодаря фигурным скобкам мы говорим что хотим выполнить такую операцию,
получить значение свойств обьекта, создать переменные и присвоить им то же значения 
,что и у свойств обьектаю

= оператор присваивания.
*/

//---------------------------

// Порядок не имеет значения.

let options = {
    title: "Menu",
    width: 100,
    height: 200,
};

// изменён порядок в const {...}
const {height, width, title} = options;

console.log(height);
console.log(width);
console.log(title);
console.log();

//---------------------------------------------------------

// Присвоить свойство объекта переменной с другим названием

/*
Если мы хотим присвоить свойство объекта переменной с другим названием, 
например: свойство 'name button' присвоить переменной caption, 
то мы можем использовать двоеточие:
*/

let button = {
    'name button': "Menu",
    color: 'red',
};
let {'name button': caption, color: colorButton } = button;

console.log(caption);
console.log(colorButton);
console.log();

//---------------------------------------------------------

// Оператор присваивания = 
/*
Мы можем создавать абсолютно новые переменые, 
даже если у обьекта нет такого свойства, 
и присваивать им нужные нам значения с помощью =
*/  

let carTwo  = {
    brand: "Ford"
};

const {fuel = 'disel', type = 'peckup', brand} = carTwo;

console.log(fuel);
console.log(type);
console.log(brand);
console.log();

//---------------------------------------------------------

// Совместное использование  : и =
/*
Мы также можем совмещать : для присваения нового имени переменной,
существуещемму свойству
и = создавая абсолютно новые переменные

*/ 

let carThree  = {
    brand: "Ford"
};

const {engine = 'benzin', body = 'sedan', brand:model} = carThree;

console.log(engine);
console.log(body);
console.log(model);
console.log();

//---------------------------------------------------------

/* 
Если у нас есть большой объект с множеством свойств, 
можно взять только то, что нужно, 
используя то свойство которое необходимо
*/

const musculCar = {
    manufacturer: 'ford',
    liters : 4.0,
    'count cylinders': 6,
    year: 1970,
    month: 'March'
    };

    const {'count cylinders': countCylinders} = mysculCar;
console.log(countCylinders);
console.log();

//---------------------------------------------------------

//Остаток объекта «…»
/*
Если у нас есть большой объект с множеством свойств, 
и мы использовали часть свойств для создания переменных,
Можно использовать троеточие ... , и создать новый обьект с остатком свойств
*/
const myMusculCar = {
    manufacturer: 'ford',
    liters : 4.0,
    'count cylinders': 6,
    year: 1970,
    month: 'March'
    };

const {manufacturer} = myMusculCar;
console.log(manufacturer);
console.log();
const{...newCar} = myMusculCar;
/*
newCar создаем обьект с остальными свойствами
обьекта myMusculCar

Возможно записать и обной строгкой 
разбил на несколько для понятности
const{manufacturer, ...newCar} = myMusculCar;
*/
console.table(newCar);

//==============================================================================

// Вложенный обьект и его деструктуризация

const musculCarTwo = {
    'model car': 'ford',
    engine:{
        liters : 4.0,
    'count cylinders': 6,
    year: 1970,
    month: 'March',
}
};

const {'model car':modelCar,engine:{liters,year,'count cylinders':cylindresInEngine}} = musculCarTwo;

console.log(liters);
console.log(modelCar);
console.log(year);
console.log(cylindresInEngine);
console.log();

//==============================================================================

//! Деструктуризация массива.

/*
Синтаксис.
есть массив:
let arrName = ["Tim", "Tom", "Bob", 'Billy'];

создание одной переменной
const [имя переменной] = имя_массива

можно использовать как const так и let.
в отличии от обьектов порядок имеет значение
*/


let arrName = ["Tim", "Tom", "Bob", 'Billy'];
const [userName] = arrName;
console.log(userName);
console.log();

const [userName1,userName2] = arrName;
console.log(userName1);
console.log(userName2);
console.log();
/*
userName и userName1 имеют одно и то же значение "Tim",
потому что значение присваивается автоматически 
значение первого елемента массива 
с индексом [0] 
*/

/*
разбивать назначение переменных как с обьектами не получится 
так как назначение идет по порядку 


const userDate = {
    name: 'Alex',
    age: 34,
    sex: 'men',
    weight: 160
}
создание одной переменной
let {name} = userDate;
создание нескольких переменных
let {age, sex, weight} = userDate;


*/

const arrUserDate = ['Alex', 34, 'men', 160];
let [nameUser1] = arrUserDate;
console.log(nameUser1);
console.log();

let [nameUserAlex, ageUser, sexUser, heightUser] = arrUserDate;
console.log(nameUserAlex);// то же значение что и у nameUser1 
console.log(ageUser);
console.log(sexUser);
console.log(heightUser);
console.log();

//---------------------------------------------------------

// Пропускайте элементы, используя запятые

/*
Нежелательные элементы массива также могут быть отброшены
с помощью дополнительной запятой:
*/

let arrFruts = ["apple", "apricot", "nectarine", "orange"];

let [frutOne, ,frutTwo] = arrFruts;// apricot пропустили , ,
console.log(frutOne);
console.log(frutTwo);
console.log();

//---------------------------------------------------------


// обмен переменных
/*
Существует хорошо известный трюк для обмена значений двух 
переменных с использованием деструктурирующего присваивания:
*/

let guest = 'Alex';
let admin = 'Tom';

console.log(guest);
console.log(admin);
console.log();

[admin, guest] = [guest, admin];

console.log(guest);
console.log(admin);
console.log();

//---------------------------------------------------------

// Присваение свойств обьекту

const emptyObjekt = {};

[emptyObjekt.name, emptyObjekt.surname] = 'John Wick'.split(' ');
console.table(emptyObjekt);
console.log();


//---------------------------------------------------------

// Остаток массива ...

/*
с помощью оператора ... присваиваем остаток 
массива в новый массив rest2 (любое имя)
*/

let arrFruitBowl = ["apple", "apricot", "nectarine", "orange"];

let [name1, name2, ...rest2] = arrFruitBowl;
console.log(rest2); // [ 'nectarine', 'orange' ]
console.log();
console.log(name1);
console.log(name2);
console.log();

//---------------------------------------------------------

// создание копии массива

/*
Деструктуризация, 
создание копии массива с помощью оператора ...
*/
const fruit = ['banana ', 'tropical ', 5];
const fruitCopy = [...fruit];

console.log(fruit);
console.log(fruitCopy);
console.log();

//---------------------------------------------------------

// обьединение массивов

const arrNameUser = ["Tim", "Tom", "Bob", 'Billy'];
const arrFruit = ["apple", "apricot", "nectarine", "orange"];
const mergeArr = [...arrNameUser, ...arrFruit];

console.log(mergeArr);
console.log();

//---------------------------------------------------------

// Деструктуризация без обьявления массива 

let [fruit3, fruit5, fruit6, fruit7] = ["apple", "apricot", "nectarine", "orange"];
console.log(fruit3);
console.log(fruit5);
console.log(fruit6);
console.log(fruit7);
console.log();

//---------------------------------------------------------


// Деструктуризация вложенных массивов

const arrValue = [23, [12, 10]];

// вложенная деструктуризация 
const [x, [y, z]] = arrValue;

console.log(x); // Вывод: 23
console.log(y); // Вывод: 12
console.log(z); // Вывод: 10


//---------------------------------------------------------

// Деструктуризация массивов вложенных в обьект

const arrInObjekt = {
    size: {
        width: 100,
        height: 200
    },
    items: ["значение 1", "значение 2"],
    extra: true
};

const {items:[var1, var2]} = arrInObjekt;

console.log(var1);
console.log(var2);
console.log();


//==============================================================================

//! Деструктуризация функции.

function getUserBio([firstName] = []) {
    console.log(
      "Do something else that does not need the destructuring parameter."
    );
    return `My name is ${firstName}.`;
  }
getUserBio();

const points = [
    [4, 3],
    [0, -3]
  ];
  
  for (const [x, y] of points) {
    console.log([x, y]);
  }