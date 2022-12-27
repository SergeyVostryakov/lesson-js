

//! ФУНКЦИИ
//? ФУНКЦИЯ - Это блок кода, который можно выполнять многократно, 
//? позволяющий формализовать средствами языка определённую логику поведения и обработки данных.
let x = 12;
let y = 6;
let z;
z=x+y;
console.log(z);
x = 22;
y = -67;
z=x+y;
console.log(z);
//* данный код не оптимален так как имеет повторяющийся блок кода z=x+y; console.log(z);
/*
ПРАВИЛА РАБОТЫ С ФУНКЦИЯМИ
1  Имя функции. Называть исходя из выполняемых задач
2  Одна функция одна задача
3  Не должна изменять внешние переменные или обьекты, даже если они переданны как аргументы

*/
//! Имя функции. 
/*
как правило, в имени используются определенные префиксы (глагол),
обозначающие действие, после которого идет обьект действия

Например, функции начинающиеся с:
" show..." - обычно что то показывают
" get..." - возвращают значение
" calc ..." - что-то вычисляют
" create..." -  что-то создают
" check..." - что то проверяют и возращают логическое значение
итд......

Примеры:
showMassage - показать сообщение
getOption - полцучить параметры
calcSum - посчитать сумму
*/

//* Список параметров (принимаемых функцией) заключённых в круглые скобки () и разделённых запятыми. Из примера (number) 
//* Инструкции, которые будут выполнены после вызова функции, заключают в фигурные скобки { }.
//* return указывает на значение, которые будет возвращено функцией.

//! ОБЬЯВЛЕНИЕ ФУНКЦИИ
/*
function имя  (параметроы){ параметры передаются в аргументах при вызове функции
 тело функции (инструкции или код кому как понятнее)
}
Функция вывода сообщения
имя функции (Аргументы); ВАЖНО в (Аргументы) если они есть
*/

//* Объявление функции (function definition, или function declaration, или function statement) состоит из ключевого слова function и следующих частей:



showMessage();//! вызывать функции можно как до обьявления так и после обьявления
function showMessage(){
    console.log ('Message');
}

//* showMessage(); вызов функции, вызывать можно сколько угодно раз
showMessage();

//* просмотреть структуру функции console.dir();
console.dir(showMessage);

//! ВОЗВРАТ РЕЗУЛЬТАТА RETURN
//? Оператор return  завершает выполнение текущей функции и возвращает её значение.

function calcSummAndReturn (numOne, numTwo) {
    let resultSumNum = numOne + numTwo;

    return resultSumNum;
//! дальше код не будет выполнятся
}
let functionResult = calcSummAndReturn (4, 40);

console.log( `Сумма :${functionResult}`);
//* ВАЖНО!!!! если в функции нет инструкции return, то она (функция) возвращает значкение UNDEFINED 

//! Что происходит при вызове функции

function calcValueNum (numberOne, numberTwo){   
    //* пеараметрам (numberOne, numberTwo) присвваиваются значения из аргументов при вызове функции calcValueNum(10, 30);
    let resultSumNumbers;
    //* Обьявляется переменная resultSumNumbers
    numberOne = numberOne + 10;
    //* Увеличиваем значение numberOne на 10
    resultSumNumbers = numberOne + numberTwo;
    //* присваиваем resultSumNumbers сумму значений numberOne и numberTwo
    return resultSumNumbers;
    //* Возвращаем значение resultSumNumbers
}
let numSumm = calcValueNum(10, 30);
//* обьявляем переменную numSumm, внутри вызываем функцию calcValueNum и передаем аргументы (10, 30), для параметров (numberOne, numberTwo)
console.log(numSumm);
//* выводим в консоль переменную

//! ОПЦИОНАЛЬНО ПАРАМЕТРЫ (numberOne, numberTwo), АРГУМЕНТЫ (10, 30), ВОЗВРАТ ЗНАЧЕНИЯ return
//* пустая функция
function myFunction () {}

let emptyFunction= myFunction ();
console.log(emptyFunction);
console.log(typeof emptyFunction);

//! ФУНКЦИИ и ссылочный тип данных
//* МУТАЦИЯ ВНЕШНЕГО ОБЬЕКТА через функцию

const userDateLink = {
    name: 'John',
    age: 51
};

function showUserDateLink (user) {
    user.age +=1;//*  изменяем значение свойства обьекта age на единицу
    return user;
}
showUserDateLink (userDateLink);//* в качестве аргумента функции мы передаем обьект и изменяем значения возраста
console.log(userDateLink.age);
/*
(userDateLink) обьект, переданный как аргумент в функции  function showUserDateLink (user)
(user),(userDateLink) будут ссылатся на один и тот же обьект в памяти.
*/
//! КОПИЯ ОБЬЕКТА НЕ БЫЛА СОЗДАНА, и был мутирован внешний обьект 
//! ВАЖНО !!!! НЕ РЕКОМЕНДУЕТСЯ данное действие показанно в качестве примера для ознакомления, и исключения данной ошибки при написании кода.

//* ЕСЛИ НЕОБХОДИМО работать с обьектом внутри функции

function increaseUserAge (user) {
    const updateUser = Object.assign({}, user); //* создали копию обьекта 
    updateUser.age +=1;
    return updateUser;
}
const updateUserAge = increaseUserAge(userDateLink);//* обьявили переменную и задали функцию increaseUserAge аргументом передали обьект
console.log(updateUserAge.age);
console.log(userDateLink.age);


//! ВЛОЖЕННЫЕ ФУНКЦИИ и ВИДИМОСТЬ 
function getSumm(){
    function getNumOne(){
        numOne=12;
    }
    function getNumTwo(){
        numTwo=46;
    }
    getNumOne();
    getNumTwo();
    let summNum = numOne + numTwo;
    console.log(summNum);
}
getSumm();

//! ВАЖНО Нельзя вызвать дочернию функцию  за пределпми родительской функции
//* getNumTwo(); получим ошибку ReferenceError: getNumTwo is not defined

//! ВАЖНО если вункция вложена в какой либо блок например в цикл вызвать её за пределами цикла твк же не получится

if (2>1) {
    function getMultiply(){
    function getNumOne(){
        numOne=12;
    }
    function getNumTwo(){
        numTwo=46;
    }
    getNumOne();
    getNumTwo();
    let summNum = numOne * numTwo;
    console.log(summNum);
}
getMultiply();
}

//! локальные и внешние переменные
//* Внешняя переменная

let message; //! Oобьявили переменную без присвоения значения
let messageOne = 134;
function showMessage(){
    //* локальная переменная видна только внутри функции
    let messageLoc = 456;
    message = 'Значение'; //! присвоили переменной значение внутри функции
    console.log (messageLoc);
    console.log (messageOne);
    console.log (message);
}
console.log ('Внешняя переменная с неприсвоенным значением');
//* console.log (messageLoc);при вызове локальной переменной вызовет ошибку messageLocal is not defined
console.log (message);// внешнию переменную можем использовать как функции так и за её пределами
console.log ('Выводим переменные функцией');
showMessage();
console.log ('Выводим внешнию переменную, значение присвоено функцией, вне функции');
console.log (message); //! undefined изменился на присвоеное значение  Функцией присвоено значение переменной message и это значение используется и за пределами функции
console.log ('Выводим внешнию переменную');
console.log (messageOne);

//! В функцию можно передавать некие параметры их еще называют АРГУМЕНТЫ функции
//* аргумеенты указываются в скобках перечесляются через запятую(если их дольше одного) 

function calcNumber(numOne=4, numTwo=5){
    // можно не передавать значения по умолчанию (numOne, numTwo)
    // можно передать дефолтное значение только одному параметру (numOne=4, numTwo)
    console.log (`Преременная numOne:${numOne}`);
    console.log (`Преременная numTwo:${numTwo}`);

    let numSumm = numOne+numTwo;
    let numMultiply = numOne*numTwo;
    console.log (`Сумма ${numSumm}`);
    console.log (`Умножение:${numMultiply}`);
}
calcNumber(50, 44);
console.log ('Вычисления со значениями по умолчанию');
calcNumber();

//* значение параметров функции по умолчанию боле сложная конструкция

const newPost = (post, addedAt = Date()) =>({
    ...post,
    addedAt
});
const patternPost = {
    id: 1,
    autor: 'Nick'
};

const showPost = console.log(newPost(patternPost));
/*
разбор кода
1. обьявили переменную const newPost 
2. с помощью стрелочной функции присваиваем значение переменной  newPost
3. у функции два параметра post и  addedAt
функция Date() передаст в параметр addedAt текущую дату
4. у параметра addedAt дефолтное значение всегда присваивается текущая дата ВАЖНО (в момент вызова функции присваивается новая дата)
5. внутри выражения 
    ...post создаем новый обьект 
    addedAt добавляем ему новое свойство 
addedAt присваивается текущая дата как описано выше в параметрах
6. ({ неявный возврат обьекта в функции})
7. создали обьект patternPost
const patternPost = {
    id: 1,
    autor: 'name'
};
8. newPost(patternPost)
    вызвали функцию newPost передали только один пароаметр patternPost 
    addedAt второй аргумент (параметр) отсутствует, функция Date() передаст в параметр addedAt текущую дату
*/
//* явное приведение обьекта

console.log('явное приведение обьекта');
const newPostTwo = (post, addedAt = Date()) =>{
    myPost = {
        ...post,
        autor: 'Mike',
        addedAt
    }
    return myPost;
};
console.log(newPostTwo(patternPost));
/*
//* Сокращенный формат записи свойств
const nameUserTwo='Evgeniy';
const userAgeTwo = 37;
const userTwoDate = {
    nameUserTwo,
    userAgeTwo, //! ВАЖНО Короткие записи всегда сверху потом все остальные
    married: true,
    sex:'man' //? все последующие записи (для удобства чтения данных)
}
*/


    //! ФУНКЦИИ-КОЛБЭК

function firstFunction () {
    // Действия итд
}
//* есть каккая та условная функция, для примера возьмем пустую функцию

function functionWithCallback(callbackFunktion) {
    callbackFunktion();//* в теле функции вызываем другуб функцию(callback функцию)
}
functionWithCallback(firstFunction);


function calcSummAndIf (numOne, numTwo, more, less) {
    let comparisonNumber = 5;
    let numResult = numOne + numTwo;
    if (numResult > comparisonNumber){
        more();
    } else {
        less();
    }

    function moreMessage() {
        console.log(`Больше чем:${comparisonNumber}`);
    }
    function lessMessage() {
        console.log(`Меньше чем:${comparisonNumber}`);
    }
}
calcSummAndIf(1, 4, moreMessage, lessMessage);

// Функции-колбэки
function calcSumm(numOne, numTwo, more, less) {
	let numSumm = numOne + numTwo;

	if (numSumm > 3) {
		more();
	} else {
		less();
	}
}

function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm(1, 1, showMoreMessage, showLessMessage);

//! ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ (Function Expression)
//* обьявляется переменная в которой обьявляется функция без имени 
//! в конце обязательно поставить ;

let showMassage = function () {
    console.log('Привет!');
};

showMassage();

//! ОБЬЯВЛЕНИЕ ФУНКЦИИ(Function declaration)

//! showMassageExample();  

getSum();//* функцию обьявленную с помощью Function declaration можно вызвать в любом месте кода как до так и после обьявления

function getSum(){
    let summ = 1 + 20;
    console.log(summ);
} 

//! ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ(Function Expression)


const showMassageExample = function () {
    console.log('Привет!');
};
showMassageExample();//* функцию обьявленную с помощью Function Expression можно вызвать только после обьявления

/*
                    обьявленная функция     функциональное выражение
                    Function declaration    Function Expression

имеет имя           да                      нет

можно использовать  да                      нет
автономно           

Можно присваивать   да                      да
переменной

можно использовать  да                      да
как аргумент в 
вызове другой функции

*/


//! СТРЕЛОЧНАЯ ФУНКЦИЯ  arrow function
/*
arrow function
СТРЕЛОЧНАЯ ФУНКЦИЯ - выражение
всегда анонимна
для того что бы дать имя стрелочной функции надо присвоить переменной

let имя переменной = ( параметр, ....параметр) => выражение;

Function Expression

const имя переменной = function( параметр, ....параметр) {
    Инструкции 
    return выражение;
}
*/

//* ОДНОСТРОЧНАЯ СТРЕЛОЧНАЯ ФУНКЦИЯ 

const getStitchedText = (text, user) => text + ', ' + user + '!';
console.log(getStitchedText('Hello','Bob'));
// использовать если функция состоит из одного выражения

//* МНОГОСТРОЧНАЯ СТРЕЛОЧНАЯ ФУНКЦИЯ 
// создание аналогично с той разницей что тело помещено в фигурные скобки

const getStapledSentence = (text, name) => {
    let message = text + ', ' + name + '!';
    return message;//! ВАЖНО return ОБЯЗАТЕЛЕН
};
console.log(getStapledSentence('Hello','Mike'));



//! ПЛАНИРОВАНИЕ ВЫЗОВА ФУНКЦИЙ setTimeout и setInterval

/*
    Чтобы реализовать планирование существует два метода:
 1 setTimeout
позволяет вызвать функцию ОДИН раз, через определенный (заданный) интервал времени

//* setTimeout(функция или код, задержка, параметр, ....параметр);

 2 setInterval
позволяет вызвать функцию РЕГУЛЯРНО, повторяя вызов через определенный (заданный) интервал времени

//* setInterval(функция или код, задержка, параметр, ....параметр);

*/

function planningShowMes (name, number) {
    console.log(`Его имя :${name},и ему ${number} год!!!`);
}
setTimeout(planningShowMessage, 5000, 'Alex', 21);

//* РЕКУРСИВНЫЙ setTimeout

function planningShowMessage (name, number) {
    console.log(`Его имя :${name},и ему ${number} год!!!`);
    setTimeout(planningShowMessage, 5000, 'Alex', 21); //*рекурсия
}
setTimeout(planningShowMessage, 5000, 'Alex', 21);//! такой подход дает более точную задержку

//* setTimeout записанный через стрелочную функцию
setTimeout(()=>{
    console.table('Сообшение')
}, 5000);


//? ОСтановка setTimeout через цикл

function showNumber (number) {
    console.log(number);
    if (number<5){
        setTimeout(showNumber, 5000, ++number);
}
}
setTimeout(showNumber, 1000, 3);

//? ОСтановка setTimeout через clear

function showNumberClear (number) {
    console.log(number);
    let timeId = setTimeout(showNumberClear,1000, ++number);
    if (number===6){ //! Условия пока условия не полусет true  выполняются setTimeout работает
    clearTimeout(timeId);
    }
}
setTimeout(showNumberClear, 1000, 3);

//? ОСтановка setInterval через clear

let resultInterval = 0;
function showNumberClearInterval (number) {
    resultInterval += number;
    console.log(resultInterval);
    if (resultInterval===5){ 
    clearTimeout(timeId);
    }
}
let timeIdInterval = setInterval(showNumberClearInterval,1000, 1);

//* функция должна быть короткой и выполнять одно действие

// Функция соединения строк
function createMessage (text, info) {
    return `${text}, ${info}`;
}
// Функция вывода в консоль
function showCreateMessage (message) {
    console.log(message);
}
// Функция обьединения, вызывает обе функции
function initMessage (text, info) {
    showCreateMessage(createMessage (text, info));
}
initMessage('Hell0','any');

