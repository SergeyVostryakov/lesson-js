'use strict';

// confirm выводит модальное окно с двумя кнопками ок и отмена

/*
Возвращает булевое значение 
,в зависимости от того на какую кнопку кликнул пользователь
true ok
false cansel
*/

let x = 5;
console.log(x);
console.log();
confirm();
console.log(confirm());

//-------------------------------------------------------------

// Присвоение переменной 

let questions = confirm(' тебе  больше 18 лет');
console.log(questions);

//===============================================================================

// Метод prompt выводит модальное окно с двумя кнопками ок и отмена, и полемм вода данных

let questions2 = prompt('Сколько тебе лет');
console.log(questions2);
console.log(typeof questions2);

/*
в не зависимости от того какие данные ввел пользователь в поле ввода
тип данных автоматически будет String
*/

//-------------------------------------------------------------

// значение по умолчанию для метода prompt

let questions3 = prompt(' Тебе точно больше 18 лет', '18');
console.log(questions3);
console.log(typeof questions3);


//===============================================================================

// Метод alert alert выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт «ОК».

let message = alert('Поехали');
console.log(message);
console.log(typeof message);

//===============================================================================

// DOM BOM и API

// корень document
console.log(document);
console.log(document.parentElement);//null
console.log(document.children);// получим html коллекцию


// встроеные методы для поиска элементов на странице getElement

console.log(document.getElementById());
console.log(document.getElementsByClassName());
console.log(document.getElementsByName());
console.log(document.getElementsByTagName());
console.log(document.getElementsByTagNameNS());
console.log(document.getElementByTagsName());

//-------------------------------------------------------------

// Можно получать элемент или коллекцию елементов
console.log(document.getElementsByTagsName('h1'[0]));// 'h1' имя тега [0] индекс 

// querySelector

console.log(document.querySelector(#one_span));
// #  имя id поиск по id 

console.log(document.querySelector(.one_span));
// . имя класса поиск по классу

//-------------------------------------------------------------

// querySelectorAll
// получаем все элементы 

console.log(document.querySelectorAll(#one_span));
// #  имя id поиск по id 

console.log(document.querySelectorAll(.one_span));
// . имя класса поиск по классу

//-------------------------------------------------------------

// управление полученными элементами