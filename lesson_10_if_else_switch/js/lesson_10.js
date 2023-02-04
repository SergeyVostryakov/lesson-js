

//! УСЛОВНЫЙ ОПЕРАТОР "?" IF ELSE SWITCH 

/*
Если выполнение или не выполнение, кода требует каких либо
условий на помощь прийдет инструкция if (если),
и условные операторы else (иначе)
*/

//Синтасис
/**
if (условие) {
    код который выполняется если условие true 
}

 */
const message = 'любое текст';

if (2>1){
    console.log(message);
}

/*
Если условие (2>1) возвращает значение true 
то код 
{
    console.log(message);
}
выполнится.

Если условие (2>1) возвращает значение false 
код выполнятся не будет
*/
//---------------------------------------------

//В качестве операндов внутри условия можно использовать 

//переменные 
const value = 'условие true';

const numOne = 5;
const numTwo = 10;


if (numOne<numTwo){
    console.log(value);
}

//различные логические операторы 

const valueString = 'условие true';

if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1){
    console.log(valueString);
}

//=================================================================
/*
Преобразование к логическому типу
Инструкция if (…) вычисляет выражение в скобках и 
преобразует результат к логическому типу.
*/
if ('') {
    console.log('верно');
}else {
    console.log('условия не выполнены');
}

if ('1') {
    console.log('верно условия выполнены');
}else {
    console.log('условия не выполнены');
}

if (0) {
    console.log('верно условия выполнены');
}else {
    console.log('условия не выполнены');
}

if (1) {
    console.log('верно условия выполнены');
} else {
    console.log('условия не выполнены');
}

//=================================================================
/*
короткая запись, выполняющая только одно условие ВАЖНО!!!
*/
if (2>1) console.log('верно условия выполнены');

//=================================================================

//Блоки else и else if 

//Синтасис
/*
if - else

if (условие) {
    код который выполняется если условие true 
} else {
    код который выполняется если условие 
    предидущем блоке код не выполнился false
}
*/

//Синтасис
/*
if - else -  else if 

if (условие) {
    код который выполняется если условие true 
} else if (условие 2){
    код который выполняется если условие 2 true 
} else {
    код который выполняется если все условия
    предидущем блоке код не выполнился false
}
*/
const numerValue = 5;

if ( numerValue > 10) {
    console.log('верно условия выполнены');
} else if ( numerValue > 5) {
    console.log('условия второго блока верны');
} else {
    console.log('Ни одно условие не выполненно');
}

/*
блоков if else может быть сколько угодно
*/
const num4 = 55;

if ( num4 > 50) {
    console.log('значение переменной больше 50');
} else if ( num4 > 30) {
    console.log('значение переменной больше 30');
} else if ( num4 > 10) {
    console.log('значение переменной больше 10');
} else if ( num4 > 5) {
    console.log('значение переменной больше 5');
} else {
    console.log('Ни одно условие не выполненно :( ');
}

//=================================================================

//! тот же код но с использованием только if инструкций

const agePerson = 58;


if ( agePerson > 5) {
    console.log('возраст больше 5');
}

if ( agePerson > 50) {
    console.log('возраст больше 50');
}
if ( agePerson > 30) {
    console.log('возраст больше 30');
}

if ( agePerson > 60) {
    console.log('возраст больше 60');
}

/*
Записи более читаемы, но при условии что несколько значений вернут true: agePerson = 58,
возраст больше 5
возраст больше 50
возраст больше 30
выполнятся несколько локов кода, поэтому надо прописывать дополнительные условия,
для более правильного выполнения кода(исходим из задач) 
*/ 

// Чтобы полностью симитировать else if в этом коде 

const agePerson2 = 58;

if ( agePerson2 < 5) {
    console.log('возраст меньше 5');
}

if ( agePerson2 < 30 && agePerson2 >=5 ) {
    console.log('возраст больше от 5 до 29');
}

if ( agePerson2 < 50 && agePerson2 >=30 ) {
    console.log('возраст больше от 30 до 49');
}

if ( agePerson2 < 60 && agePerson2 >=50) {
    console.log('возраст больше от 50 до 59');
}

//=================================================================

//! Условный оператор '?'
/*
Так называемый «условный» оператор «вопросительный знак» 
позволяет нам сделать это более коротким и простым способом.

Оператор представлен знаком вопроса ?. 
Его также называют «тернарный», так как этот оператор, 
единственный в своём роде, имеет три аргумента.

Синтаксис:

let result = условие ? значение1 : значение2;
*/

// блок if else

let textHello = 'Привет';

if ( 5 > 23) {
    textplus = ', Оля!!!';
}  else {
    textplus = ', Коля!!!';
}
textHello += textplus;

console.log( textHello );

// тот же код только с использованием условного оператора '?'

let text1 = 'Hello';

let textPlus = (5 > 10) ?  ', Tim!!!' : ', Boby!!!';

text1 += textPlus;

console.log(text1);

/*
Допускается написания кода 
let textPlus = 5 > 10 ?  ', Tim!!!' : ', Boby!!!';
так как у оператора ? низкий приоритет и сначала выполнится сравнение 5 > 10
а после код после оператора '?'
*/

//=================================================================

//! Несколько операторов '?' и конструкция if else if ... else

let startText = 'Привет';

const numerStart = 5;

if ( numerStart > 30) {
    textEnd = ', Оля!!!';
} else  if ( numerStart > 35) {
    textEnd = ', Коля!!!';
} else  if ( numerStart > 20) {
    textEnd = ', Вася!!!';
} else  if ( numerStart > 10) {
    textEnd = ', Толя!!!';
} else {
    textEnd = ', Саша!!!';
}

startText += textEnd;

console.log(startText);

// тот же код только с использованием условного оператора '?'

let startTextOne = 'Привет';

let numerStart1 = 3;

textEnd1 = ( numerStart1 > 50) ? ', Оля!!!' :
( numerStart1 > 40) ? ', Коля!!!' :
( numerStart1 > 30) ? ', Вася!!!' :
( numerStart1 > 10) ? ', Толя!!!' :
( numerStart1 > 5) ? ', Саша!!!' : ', Инокентий!!!';

startTextOne += textEnd1;

console.log(startTextOne);

//=================================================================

//! if и оператор отрицания !

// У нас есть обьект и надо проверить наличие того или иного свойства обьекта

const objekt = {
    age: 32
}

if (!objekt.name){
    console.log('Нет такого свойства у обьекта!');
}



//=================================================================

//! использование if в функциях

const sumPositivNumbers = (numOne, numTwo) => {
    if ( typeof numOne !=='number' || typeof numTwo !=='number' ) {
        console.log('One of the argument is not a number');
    }

        if ( typeof numOne <=0 || typeof numTwo <=0 ) {
        console.log('Numbers are not positive');
    }
    console.log( numOne + numTwo);
}

sumPositivNumbers(10, 2);


//=================================================================

//! Инструкция switch

//Синтасис
/*
switch (выражение) {
    case 1:
    код который выполняется если выражение === 1
    break

    case 2:
    код который выполняется если выражение === 3
    break

    case 3:
    код который выполняется если выражение === 3
    break
    deafult:
    пишется дефолтное поведение. Если ни один case не совпал
}
*/

let resultSum = 2+2;


switch (resultSum) {
case 3:
    console.log( 'Маловато' );
    break;
case 4:
    console.log( 'В точку!' );
    break;
case 5:
    console.log( 'Перебор' );
    break;
default:
    console.log( "Нет таких значений" );
}
/*
Конструкции case и default, внутри которых описывается 
поведение для разных значений рассматриваемой переменной. 
Каждый case соответствует if в примере выше. 
default - это особая ситуация, 
соответствующая ветке else в условных конструкциях. 
Как else, указывать default не обязательно (но линтер всегда его просит).
break нужен для предотвращения «проваливания».
Если его не указать, то после выполнения нужного 
case выполнение перейдет к следующему case, 
и так либо до ближайшего break, либо до конца switch.
*/

/*
Без breake выполнится весь код, 
который идет после того как кейс вернет значение true 

В точку!
Перебор
Нет таких значений

вернет в данном примере
*/

let resultSum2 = 2+2;

switch (resultSum2) {
case 3:
    console.log( 'Маловато' );
case 4:
    console.log( 'В точку!' );
case 5:
    console.log( 'Перебор' );
default:
    console.log( "Нет таких значений" );
}