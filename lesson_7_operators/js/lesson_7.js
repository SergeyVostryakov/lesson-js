

//! ОПЕРАТОРЫ.

//Термины: «унарный», «бинарный», «операнд»

/*
Операнд – это то к чему применяется оператор,
их еще называют аргументами.
*/

//Примеры:
let userAge = 30 - 6; //Числа 30 и 6 - это операнды
//либо
let userHeight = h - y; //Переменные h и y - это операнды

/*
Бинарными называются операторы
которые применяются к двум операндам (аргументам).
В нашем примере вычитание -, это бинарный оператор.
*/

let userAge2 = 30 - 6;

/*
Унарным считается оператор, который
применен только к одном операнду (аргументу), например:
*/

let userCash = -800;

//============================================


//! АРИФМИТИЧЕСКИЕ ОПЕРАТОРЫ

// Арифметические операторы выполняют математические операции.

let x;
//Сложение +
x = 5 + 8;
console.log(`Результат сложения: ${x}`);

//Вычитание -
x = 9 - 5;
console.log(`Результат вычитания: ${x}`);

//Умножение *
x = 2 * 3;
console.log(`Результат умножения: ${x}`);

//Деление /
x = 10 / 2;
console.log(`Результат деления: ${x}`);

//Взятие остатка от деления %
x = 11 % 3;
console.log(`Результат взятия остатка от деления: ${x}`);
//Проверка: 11=3*3(неполное частное от деления)+2(остаток)

//Возведение в степень **.
x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);
//Число 5 умноженное на себя 3 раза. 5*5*5 = 125

let num1 = 5;
let num2 = 3;

// сложение
console.log('num2 + num1 = ', num1 + num2);  // 8

// вычитание
console.log('num1 - num2 = ', num1 - num2);  // 2

// умножение
console.log('num1 * num2 = ', num1 * num2);  // 15

// деление
console.log('num1 / num2 = ', num1 / num2);  // 1.6666666666666667

// взятие остатка
console.log('num1 % num2 = ', num1 % num2);   // 2


//============================================


//Специальные возможности операторов

//Применение оператора сложения к строкам
let connectionString = "Складываем" + " " + "в одну" + " " + "строку";
console.log(connectionString);

/*
Если в выражении есть строка, то есть если хотя бы
один операнд будет строкой, то конечный результат
тоже будет строкой
*/
let connectionWithNum = "Строка " + 58;
console.log(connectionWithNum);
console.log(typeof connectionWithNum);

//Порядок значения не имеет
let reverseOrder = 58 + " Число строка";
console.log(reverseOrder);

//Казусы
let sumNumString = 2 + "2";
console.log(sumNumString);
//при сложении числа 2 и строки два получим результат строка 22


//Операции до сложения со строкой
//выполняются как обычно
let matString = 58 - 20 + " разница чисел";
console.log(matString);
console.log(typeof matString);


//=========


//Работа других операторов
let resultCalc = "25" - 5;
console.log(resultCalc);
console.log(typeof resultCalc);

//или

let resultMultip = 10 * "80";
console.log(resultMultip);
console.log(typeof resultMultip);

//Недопустимая операция
let resultInvalid = 3 * "Фрилансер";
console.log(resultInvalid); //Вернет NaN
console.log(typeof resultInvalid);


//=======
//Унарный оператор сложения +

//Со строками
let resultSummString = +"25";
console.log(resultSummString);
console.log(typeof resultSummString);

//С числами
let sumNum = +10;
console.log(sumNum);
console.log(typeof sumNum);



//Пример
let stringNum = "25";
let stringNum2 = "10";
console.log(stringNum);
console.log(typeof stringNum);
console.log(stringNum + stringNum2);
// конкатинация строк

console.log(+stringNum + +stringNum2);
// в коде происходит приведение stringNum к числовому значению

//Более длинная запись
console.log(Number(stringNum) + Number(stringNum2));
/* 
в коде происходит приведение stringNum к числовому значению
(или явным преобразованием типов).
*/


//============================================


//Приоритет операторов

//Разный приоритет
let calcNumber = 2 - 1 * 5;
console.log(calcNumber);

//Скобки
let calcNumberStaples = (2 - 1) * 5;
console.log(calcNumberStaples);

//Одинаковый приоритет
let equalPriority = 2 - 1 + 5;
console.log(equalPriority);


//============================================

//! ОПЕРАТОР ПРИСВАИВАНИЯ =

let a = 1 + 2;
let b = 2;

let calcVariable = 8 - (a = b + 3);
console.log("Результат в скобках: " + a);
console.log("Общий результат: " + calcVariable);

//=====

//Присваивание по цепочке

let oneResult = twoResult = threeResult = 1 + 2;
console.log(oneResult);
console.log(twoResult);
console.log(threeResult);


//Более понятная запись
let resultSum = 1 + 2;

result1 = resultSum;
result2 = resultSum;

console.log(resultSum);
console.log(result2);
console.log(result1);



//=====


//Сокращённая запись вычислений с присваиванием


let countUsers = 5;
console.log(countUsers);
countUsers = countUsers + 3;
console.log(countUsers);
countUsers = countUsers * 2;
console.log(countUsers);

//Можно записать так:

let countAdmins = 5;
console.log(countAdmins);
countAdmins += 3;
console.log(countAdmins);
countAdmins *= 2;
console.log(countAdmins);


let countPersons = 5;
console.log(countPersons);
countPersons += 1 + 2;
console.log(countPersons);


//============================================


//Инкремент ++
let addUser = 2;
addUser++;
console.log(addUser);

let incrementNum = 5;
console.log('++incrementNum = ', ++incrementNum); // увеличивает x на 1 и выводит 6
console.log('incrementNum++ = ', incrementNum++); // выводит 6 и увеличивает x на 1
console.log('incrementNum = ', incrementNum);     //  7

//Работает так же как и
addUser = addUser + 1;
//или
addUser += 1;

//Декремент --
let removeUser = 2;
removeUser--;
console.log(removeUser);

let decrementNum = 7;
console.log('--decrementNum = ', --decrementNum); // уменьшает x на 1 и выводит 6
console.log('decrementNum-- = ', decrementNum--); // выводит 6 и уменьшает x на 1
console.log('decrementNum = ', decrementNum);     // 5

//==============
/*
Инкремент / декремент можно применить только к переменной.
Попытка использовать его на значении, типа 5++, приведёт к ошибке.

console.log(5++);
*/
//==============

/*
Операторы ++ и -- могут быть расположены
не только после, но и до переменной.
*/

//Постфиксная форма
usersCounter++;
usersCounter--;

//Префиксная форма
++usersCounter;
--usersCounter;


//Примеры:

//Постфиксная форма
let countUsersApp = 0;
let newUsersApp = countUsersApp++;
console.log(newUsersApp);

//Префиксная форма
let usersCounter2 = 0;
let newUsers1 = ++usersCounter2;
console.log(newUsers1);

/*
Итого, если результат оператора не используется, а нужно только
увеличить / уменьшить переменную, тогда без разницы,
какую форму использовать:
*/

let usersCounter3 = 0;
++usersCounter3;
console.log(usersCounter3);

/*
Если хочется тут же использовать
результат, то нужна префиксная форма:
*/
let usersCounter4 = 0;
console.log(++usersCounter4);

/*
Если нужно увеличить и при этом
получить значение переменной
до увеличения – нужна постфиксная форма:
*/

let usersCounter5 = 0;
console.log(usersCounter5++);
console.log(usersCounter5);

//=========

//Инкремент/декремент
/*
инкремент / декремент можно
использовать в любых выражениях.
При этом их приоритет будет выше,
чем у большинства других арифметических операций:
*/

let usersCounter6 = 0;
let newUsers6 = 2 * ++usersCounter6;
console.log(newUsers6);


//Отдельная запись более читабельна:
let usersCounter7 = 0;
++usersCounter7;
let newUsers7 = 2 * usersCounter7;
console.log(newUsers7);

//============================================

//Оператор запятая

/*
Предоставляет нам возможность вычислять несколько выражений,
разделяя их запятой ,. Каждое выражение выполняется,
но возвращается результат только последнего.

*/
let usersCounter8 = (8 + 2, 19 + 1);
console.log(usersCounter8);

//============================================

//Побитовые операторы

/*
AND(и) ( & )
OR(или) ( | )
XOR(побитовое исключающее или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )
*/
//=====================================================

/*
Больше: a > b
Больше чем: возвращает true, если правый операнд больше, чем левый. В остальных случаях false.

Меньше: a < b
Меньше чем: возвращает true, если правый операнд меньше, чем левый. В остальных случаях false.

Больше или равно: a >= b
Больше или равно: возвращает true, если правый операнд больше левого или равен ему. В остальных случаях false.

Меньше или равно: a <= b
Меньше или равно: возвращает true, если правый операнд меньше левого или равен ему. В остальных случаях false.

Равно: a == b
Равно: возвращает true, если операнды равны. В остальных случаях false.

Не равно: a != b
Не равно: возвращает true, если операнды не равны. В остальных случаях false.

Строгое равно: a === b
Строгое равно: возвращает true, если операнды равны и принадлежат одному типу. В остальных случаях false.

Строгое не равно: a !== b
Строгое не равно: возвращает true, если операнды не равны, или равны, но принадлежат разным типам. В остальных случаях false.
*/

/*
Обрати внимание, для сравнения и строгого сравнения
используются двойной или тройной знак равенства ==.
Один знак равенства a = b означал бы присваивание.
*/


//=========

/*
Операторы сравнения возвращают логический
тип данных со значением true или false:
*/

console.log(2 > 1);
console.log(4 < 2);
console.log(58 == 36);
console.log(8 != 9);

//Присваиваем результат переменной

let result = 11 > 10;
console.log(result);

//=============

//Сравнение строк

//Алфавитный порядок
console.log('Б' > 'А');

//Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

//Кол-во символов
console.log('Слайдер' > 'Слайд');

//Регистр
console.log('Фрилансер' > 'фрилансер');

/*
Алгоритм сравнения двух строк довольно прост:
1.	Сначала сравниваются первые символы строк.
2.	Если первый символ первой строки больше(меньше),
	чем первый символ второй, то первая строка
	больше(меньше) второй.Сравнение завершено.
3.	Если первые символы равны, то таким же образом
	сравниваются уже вторые символы строк.
4.	Сравнение продолжается, пока не закончится одна из строк.
5.	Если обе строки заканчиваются одновременно,
	то они равны.Иначе, большей считается более длинная строка.
*/

//=============

//Преобразование в число
console.log('58' > 10);
console.log('007' == 7);

//Логическое значение true
//становится 1, а false – 0.
console.log(true == 1);
console.log(false == 0);

//=============

//Сравнение разных типов

//Интересные ситуация
let itemA = 0;
let itemB = "0";

console.log(Boolean(itemA));
console.log(Boolean(itemB));

console.log(itemA == itemB);

//Ноль равен false
console.log(0 == false);


//=============

//Строгое сравнение

/*
оператор строгого равенства или не равенства
проверяет равенство без приведения типов.
*/
console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58);

//==============


//Строгое равенство
console.log(null === undefined);

//Не строгое равенство
console.log(null == undefined);

//! ОПЕРАТОРЫ СРАВНЕНИЯ

//Сравнение с null и undefined


//Сравнение null и 0
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


//Сравнение undefined и 0
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

/*
Что бы избежать проблем при сравнении нужно очень
осторожно к любому сравнению с undefined / null,
кроме случаев строгого равенства ===.
Не использовать сравнения >= > < <= с переменными,
которые могут принимать значения null / undefined,
разве что ты точно знаешь что делаешь.В любом случае,
если переменная может принимать эти значения,
то стоит добавить для них отдельные проверки.
*/

//============================================
//! ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

//Существуют три логических оператора:
/*
ИЛИ: ||
И: &&
НЕ: !
*/

/*
Оператор || (ИЛИ)

Оператор ИЛИ, записывается как две вертикальные черты.
Процесс его работы следующий:
1.	Вычисляет операнды слева направо.
2.	Каждый операнд конвертирует в логическое значение.
	Если результат true, останавливается и возвращает
	исходное значение этого операнда.
3.	Если все операнды являются ложными(false), возвращает
	значение последнего из них.
*/


//Булевые значения
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

//------


//Разные типы

//Первый true это 1
console.log(1 || 0);
//Первый true это true
console.log(true || 'фрилансер');
//Первый true это 58
console.log(null || 58);
//Первый true это фрилансер
console.log(null || 'фрилансер' || 0);
//true нет совсем, вернет последнее значение - 0
console.log(undefined || '' || null || 0);


//------

//Присвоение значения в переменную

let userName = '';
let userNickName = '';

let user = userName || userNickName || "Без имени";
console.log(user);


//------


//Cокращённое вычисление. Условие.
let admins = 10;
let users = 5;
admins > users || users++;
console.log(users);


//====================
/*
Сдледующий логический оператор это И. Пишется как два
амперсанда && выполняет следующие действия:
1.	Вычисляет операнды слева направо.
2.	Каждый операнд преобразует в логическое значение.
	Если результат false, останавливается и возвращает исходное
	значение этого операнда.
3.	Если все операнды были истинными, возвращает значение
	последнего.
*/

//Булевые значения
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);


//----


//Разные типы

//Пример 1. 0 - false
console.log('Фрилансер' && 0 && 2 && 3);
//Пример 2. null - false
console.log(1 && 2 && null && 3);
//Пример 3. Все true
console.log('15' && '42');




//Подобие условия
let usersCount = 1;
(usersCount > 0) && console.log(`Пользователей ${usersCount}`);


//============================
//Оператор ! (НЕ)

//Оператор ! (НЕ)
/*
Выполняет следующие действия:
1. Сначала приводит аргумент к логическому типу true / false.
2. Затем возвращает противоположное значение.
*/


//Булевые значения
console.log(!true);


//Разные типы
console.log(!null);
console.log(!1);
console.log(!'');
console.log(!'фрилансер');


/*
Приоритет НЕ ! является наивысшим из всех логических операторов,
поэтому он всегда выполняется первым, перед && или ||.
*/
console.log(!true && 58 || 18 && !1);


//Используется для преобразования типа в boolean
console.log(!!'фрилансер');
//или
console.log(Boolean('фрилансер'));


//============================================
//Оператор объединения с null (??)

/*
Оператор ?? возвращает первый аргумент,
если он не null / undefined, иначе второй.
*/

let name = 'Фрилансер';
console.log(name ?? "Без имени");


//! ОПЕРАТОР ...

/*
Оператор разделения обьекта на свойства
Если у нас есть какой то обьект и мы хотим создать на его основе новый обьект
плюс добавить к нему какие либо новые свойства.
можно использовать оператор ... 
*/ 
const car = {
	model: 'BMW',
	engine: '4 litres'
}
console.log(car);
console.table(car);

const redCar = {
	...car,
	color: 'red'
}
console.log(redCar);
console.table(redCar);

// перезаписывание свойста
const blueCar = {
	...redCar,
	color: 'blue'
}
console.log(blueCar);
console.table(blueCar);

const multiColorCar = {
	color: 'black',
	...blueCar,
	
}
/*
Свойство обьекта color: 'black' 
перезапишется на color: 'blue'
*/ 
console.log(multiColorCar);
console.table(multiColorCar);

/*
создание одного обьекта из двух
*/

const muscleCar = {
	color: 'black',
	weight: 1.408,
}
const engineChrysler = {
	liters: 5.2,
	type: 'v8',
} 
const challenger = {
	...muscleCar,
	...engineChrysler,
}
console.table(muscleCar);
console.table(engineChrysler);
console.table(challenger);

const muscleCar1 = {
	color: 'black',
	weight: 1.408,
}
const engineChrysler1 = {
	liters: 5.2,
	type: 'v8',
	color: 'iron',
} 
const challenger1 = {
	...muscleCar1,
	...engineChrysler1,
}
console.table(muscleCar1);
console.table(engineChrysler1);
console.table(challenger1);
/*
создание одного обьекта из двух с одинаковым свойством
свойство color: 'black' обьекта muscleCar1
перезапишется на color: 'iron' обьекта engineChrysler1
! ПОРЯДОК ИМЕЕТ ЗНАЧЕНИЕ
*/


// если у обьекта есть вложенные обьекты то смотреть тему мутации обьектов


//============================================
//============================================
/*
//ДОМАШКА

//1. Изучить теорию
//2. Какой или какие из вариантов не верны:


//Вариант №1
console.log('35' + - "22");
//Вернет 13

//Вариант №2
console.log('35' * "22");
//Вернет 770

//Вариант №3
console.log('558' > 22++);
//Вернет true

//Вариант №4
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
//Вернет 1

//Вариант №5
console.log(!false && 11 || 18 && !'');
//Вернет 18

//Вариант №6
let name = 0;
console.log(name ?? "Без имени")
*/
