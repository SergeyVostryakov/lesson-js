

//! ОПЕРАТОРЫ
//? ОПЕРАТОР - это встроенная функция

/*
ОПЕРАТОРЫ 
ОПЕРАНДЫ
УНАРНЫЕ И БИНАРНЫЕ операторы

ФОРМЫ ЗАПИСИ операторов
инфиксная,
префиксная 
постфиксная
*/
//! ОПЕРАНД
/*
Операнд - это то к чему применяется оператор,
их еще называют аргументами. Это строки числа переменнные и константы ..... все что участвует в выражении
*/
let userAge = 30+12;
//* 30 и 12 это операнды
//! БИНАРНЫЕ
/*
бинарным  называются операторы 
которые применяются к двум операндам
как в примере выше
*/
//! УНАРНЫЕ
/*
унарным  называются операторы 
которые применяются к одному операндау
*/

//! ФОРМЫ ЗАПИСИ операторов
// Инфиксная
// Оператор находится между операндами 
let a =10;
let d =1;
let p =12;
let j =30;
let u =16;

a = true;
a + d * p;
a += 5;
a || j; 
a > u;
/*
Префиксная запись выражения требует, 
чтобы все операторы предшествовали операндам
оператор перед операндом
*/
++a;
delete Object.name;
// delete оператор, Object.name обьект и его свойство операнд 
tupeof a;

// Постфиксная оператор после операнда
a++;
a--;
functionAny();


//! ОСНОВНЫЕ ЛОЖНЫЕ ЗНАЧЕНИЯ
/* 
При приведении к булевому значению дадут в результате false
0
''
undefined
null
*/
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));


//! ОПЕРАТОРЫ ВИДЫ
//* Арифметические(БАЗОВЫЕ)

let x;
// Сложение
x = 5 + 6;
console.log(`Результат сложения: ${x}`);

// Вычитание 
x = 50 - 6;
console.log(`Результат вычитания: ${x}`);

// Умножение
x = 60 * 6;
console.log(`Результат умножения: ${x}`);

// Деление
x = 50 / 10;
console.log(`Результат деления: ${x}`);

// Остаток от деления
x = 11 % 3;
console.log(`Остаток от деления: ${x}`);

// Возведение в степень
x = 11 ** 3;
console.log(`Результат возведения в степень: ${x}`);
// 11*11*11 

//! ПРИСВАЕНИЯ
/*
= равно оператор присвоения
*/
//! ТЕКСТОВЫЕ ОПЕРАТОРЫ
/*
typeof проверяет тип значения
instanceof 
new
delete 
*/
//! СПЕЦИАЛЬНЫЕ ВОЗМОЖНОСТИ ОПЕРАТОРОВ

//Применение бинарного оператора сложения к строкам (Конкатенация строк)

let resultOne = 'Любой текст ' + 'текст. ' + ' Можно сложить спомошью оператора сложения + ';
console.log (resultOne);
/*
Если в выражении есть строка,
то есть если хотя бы один операнд будет строкой,
то результат тоже будет строкой
*/
let resultTwo = 'Любой текст ' + 58;
console.log (resultTwo);
console.log (typeof resultTwo);

//* Порядок значения не имеет 
let resulThree  = + 58 + ' Любой текст ';
console.log (resulThree);
console.log (typeof resulThree);

//* Казусы 
let resulFour  =  58 + '22';
console.log (resulFour); //5822
console.log (typeof resulFour); //string
/*
Опереции до конкатенации при помощи оператора +,
выполнятся как обячно
*/
let resulFive  =  58 * 47 + 21 + ' Строка и соединенная с результатом предидуших операций';
console.log (resulFive); //2747 Строка и соединенная с результатом предидуших операций
console.log (typeof resulFive); //string
/*
Это только особенность бинарного оператора ПЛЮС, 
все остальные арифметические операторы работают только с числами,
и преобразуют все операнды в числа
*/
let resulSubtraction  =  '58' - 21;
console.log (resulSubtraction); 
console.log (typeof resulSubtraction); 

let resulMultiply  =  58 * 47;
console.log (resulMultiply); 
console.log (typeof resulMultiply); 

let resulNan  =  58 * ' Строка и соединенная с результатом предидуших операций' ;
console.log (resulNan); //NaN
console.log (typeof resulNan); 

//* Унарный оператор сложения + (это когда оператор мспользуется с одним операндом)
// С числами

let resultNumber =  + 58;
console.log (resultNumber); 
console.log (typeof resultNumber); 

// Со строками
let resultString  =  + '58';
console.log (resultString); 
console.log (typeof resultString);

let resultStringTwo  =  + 'Строка';
console.log (resultStringTwo); //NaN
console.log (typeof resultStringTwo); //number

let users  =  '58';
let admins  =  '10';
console.log (typeof users, typeof admins);
console.log (users + admins); //Применили бинарный оператор 

console.log (+ users + +admins); //Применили унарный и бинарный операторы
console.log (typeof users, typeof admins);// тип данных остался string но выполнилось арифметическое действие

console.log (Number (users) + Number (admins));
console.log (typeof users, typeof admins);

//! УНАРНЫЕ оператор присваивания =

let userCash = 10000;
console.log (userCash);

//Присвоение по цепочке
let userCashOne;
let userCashTwo;
let userCashThree;
userCash = userCashOne = userCashTwo = userCashThree = 30 * 10;
console.log (userCash);
console.log (userCashOne);
console.log (userCashTwo);
console.log (userCashThree);

// более простой вид записи того же кода
userCash = 59 * 80;
userCashOne = userCash; 
userCashTwo = userCashThree = userCashOne;
console.log (userCash);
console.log (userCashOne);
console.log (userCashTwo);
console.log (userCashThree);

//* Сокращенная запись вычислений

let person = 5;
console.log (person);
person = person + 3;
console.log (person);
person = person * 6;
console.log (person);
console.log ();

// более короткая запись
person += 6;
console.log (person);
person *= 6;
console.log (person);
person /= 2;
console.log (person);
console.log ();
person = 5;
person += 2 + 1;// Сначала выполнися сложение 2 + 1 а после += 5+3
console.log (person);

//!ИНКРЕМЕНТ И ДЕКРЕМЕНТ

//Инкремент ++. Анелогично действию addUser = addUser + 1 или addUser +=1 
let addUser = 2;
addUser++;
console.log (addUser);

// Декремент --. Анелогично действию removeUser = removeUser - 1 или removeUser -=1
let removeUser = 10;
removeUser--;
console.log (removeUser);
// используется только с переменными, использование с числами 5++ приведет к ошибке
//* Форма записи
//Постфиксная
removeUser--;
addUser++;

//Префиксная 
--removeUser;
++addUser;

let userCounter = 10;
let newUser = userCounter++;
console.log (newUser);//10 newUser присваивается значение до выполнения инкремента

console.log ();
newUser = ++userCounter;
console.log (newUser);// 12 присваиваевается предидущее значение плюс текущее
/*
Итого: если результат операиора не используется, и необходимо только увеличить/Уменьшить
значение можно использовать любую форму записи

Если тут де надо получить результат то нужна префиксная форма записи
*/
userCounter = ++userCounter ;
console.log ();
console.log (userCounter);

/*
Если нужно увеличить или уменьшить и при этом получить значение переменной
до увеличения или уменьшения используется постфиксная форма записи
*/

console.log ();
console.log (userCounter--);
console.log (userCounter);
/*
Инкремент и декремент можно использовать в любых выражениях.
Приоритет их выше чем у польшинства арифметических операций
*/

let newUserOne = 10;
let newUserTwo = 2 * ++newUserOne;
console.log (newUserTwo);
// более понятная и читаемая вариация кода
newUserOne = 30;
--newUserOne;
newUserTwo = 2 * newUserOne;
console.log ();
console.log (newUserOne);
console.log (newUserTwo);

//! ОПЕРАТОР ЗАПЯТАЯ
/*
предоставляет нам возможность вычислять несколько выражений,
разделяя их запятой. Кахдое выражение выполнится но возвращается результат полледнего
*/
let cslcNum = (3 + 6, 19 - 10);
console.log (cslcNum);// вернулся результат 19 - 10 = 9

//! ПОБИТОВЫЕ ОПЕРАТОРЫ
/*
AND (и) (&) a & b
Ставит 1 на бит результата, для которого соответствующие биты операндов равны 1.

OR (или) (|) a | b
Ставит 1 на бит результата, для которого хотя бы один из соответствующих битов операндов равен 1.

XOR (побитовое исключение или) (^) a ^ b
Ставит 1 на бит результата, для которого только один из соответствующих битов операндов равен 1 (но не оба).

NOT (не) (~) ~a
Заменяет каждый бит операнда на противоположный.

LEFT SHIFT (левый сдвиг) (<<) a << b
Сдвигает двоичное представление a на b битов влево, добавляя справа нули

RIGHT SHIFT (правый сдвиг) (>>) a >> b
Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты.

ZERO-FULL RIGHT SHIFT (правыйсдвиг с заполнением нулями) (>>>) a >>> b
Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты и добавляя нули слева.
*/


//! ОПЕРАТОРЫ СРАВНЕНИЯ 

/*
сравнивает свои операнды и возвращает логическое значение

Оператор	            Описание	            Примеры, возвращающие true
Равно (==)	            Возвращает true,        3 == var1
                        если операнды равны.    "3" == var1 
                                                3 == '3'

Не равно (!=)	        Возвращает true,        var1 != 4 
                        если операнды не равны. var2 != "3"

Строго равно (===)	    Возвращает true,        3 === var1
                        если операнды равны 
                        и имеют одинаковый тип. 

Строго не равно(!==)	Возвращает true,        var1 !== "3"
                        если операнды не равны  3 !== '3'
                        и/или имеют разный тип.	 

Больше (>)	            Возвращает true,        var2 > var1
                        если операнд слева      "12" > 2
                        больше операнда справа.	 

Больше или равно (>=)	Возвращает true,        var2 >= var1
                        если операнд слева      var1 >= 3
                        больше или равен 
                        операнду справа.	

Меньше (<)	            Возвращает true,        var1 < var2
                        если операнд слева      "2" < 12
                        меньше операнда справа.	 

Меньше или равно (<=)	Возвращает true,        var1 <= var2
                        если операнд слева      var2 <= 5
                        меньше или равен 
                        операнду справа.	 
*/
//* Оперраторы сравнения возращают булевое значение true или false
console.log (2 > 3);
console.log (4 < 2);
console.log (58 == 36);
console.log (8 != 9);
// Присваивание езультата переменной

let comparison = 11 > 10;
console.log (comparison);

//* Сравнение строк 

// Алфавитный порядок
console.log ('B' > 'A');
// Б находится дальше по алфавиту поэтому true
console.log ('B' > 'a');
// сравнение регистров поэтому false

// Алфавитный порядок
console.log ('Скрипт' > 'Скрипк');
// количество символов одинаковое, но т находится дальше по алфавиту поэтому true

// Количествосимволов
console.log ('Слайдер' > 'Слайд');
// количество символов разное в строке Слайдер больше символов поэтому true

// Регистр
console.log ('Имя' > 'имя');
// маленькие буквы больше чем большие поэтому false
console.log ('Скрипт' < 'СкрипТ');
console.log ('Скрипт' < 'СкрипТы');
console.log ('Скрипт' < 'Скрипты');
console.log ('Скрипт' < 'Слрипт');

/*
Алгоритм сравнения строк
1. Сначала сравниваются первые символы строк
2. Если первый символ первой строки больше (нижний регистр или порядок в алфавите)
чем первый символ второй строкти, то первая строка больше второй 
console.log ('B' > 'a');false
console.log ('B' > 'A');true
3. Если первые символы равны то сравнение идет дальше, сравниваются вторые символы
console.log ('Скрипт' < 'Слрипт');true
4. Сравнение продолжается пока не не закончится одна из строк
5. Если строки одинаковые по числу символов и они одинаковые то они считаются равными
если строка больше по коичеству символов то она будет больше
console.log ('Скрипт' < 'СкрипТ');false
console.log ('Скрипт' < 'СкрипТы');false регистр привалирует
console.log ('Скрипт' < 'Скрипты');true
*/
//* Сравнение разных типов данных

console.log ('68' > 10);//true

console.log ('007' == 10);//false
console.log ('007' == 7);//true
// строковые сзачения приведутся к числам, 007 = 7

console.log (true == 1);//true
console.log (false == 0);//true

let itemA = 0;
let itemB = '0';

console.log (Boolean(itemA));//false так как ноль
console.log (Boolean(itemB));//true так как строка не пуста
console.log (itemA == itemB);//true так как обе переменные будут числами

//Избежать подобных казусов пломожет оператор строгого сравнения
//? проверка приисходит без приведения данных к числу
console.log (0 === false);//false
console.log ('007' === 7);//false
console.log ('58' !== 58);//true

// Сравнение null n undefined

// особенности языка поэтому true
console.log (null == undefined);//true

// не равны так как не равны их типы данных
console.log (null !== undefined);//true
console.log (null === undefined);//false

// Сравнение null n 0
console.log (null === 0);//false
console.log (null == 0);//false
console.log (null > 0);//false
console.log (null >= 0);//true
/*
Что бы избежать проблем 
1. При сравнении нужно очень осторожно относится к любому сравнению 
null n undefined кроме === строгого сравнения
2. не использовать >= > < <= с переменными которые могут принимать значение null n undefined
3. Если переменная может принимать эти значения добавить доп. проверки значения
 */

//! ЛОГИЧЕСКИЕ
/*
! (не)
&& (и) 
|| (или) 
*/
//* оператор || (или) 
/*
! ВАЖНО ВСЕГДА ВОЗВРАЩАЕТ значение одного из операторов
Как работает
1. Вычисляет операнды с лева направо
2. Каждый операнд конвертирует в логическое значение.
Если результат true? останавливается и возвращает исходное значение этого операнда
3. Если все операнды являются ложными(false), возвращаетзначение последнего из них
*/
// Булевые значения
console.log (true || true);//true
console.log (true || false);//true
console.log (false || true);//true
console.log (false || false);//false

// С разными типами данных

//1 это true, вернет 1 
console.log (0 || 1);
// Вернет true, так как одно из значений true 
console.log (true || 'Строка');
//null не вернет true, переходим ко второму операнду, 58 вернет true и его выведет в консоль
console.log (null || 58);
//первый операнд вернувший true  Строка и его выведет в консоль
console.log (null || 'Строка' || 0);
//все значения false выводим в консоль последний операнд 0
console.log (undefined || '' || null || 0);
//* присвоение значения переменной с помощью ||

let nameUser = '';
let UserNickName = 'Bob';

let user = nameUser || UserNickName || 'Без имени';
console.log (user);

UserNickName = 'Mike';
nameUser = 'Bob';
user = UserNickName  || nameUser || 'Без имени';
console.log (user);

UserNickName = '';
nameUser = '';
user = UserNickName  || nameUser || 'Без имени';
console.log (user);
/*
Идем по порядку до первого операнда вернувшего true,
nameUser || UserNickName || 'Без имени'; 
это UserNickName, соответственно переменной user присваиваем 'Bob'
Если бы все вернули false то присвоилось бы значение 'Без имени'
*/

// сокращенное вычесление и условие
let adminsApp = 10;
let usersApp = 5;
usersApp >  usersApp || usersApp++;
console.log (usersApp);//6 прибавляется один user
usersApp = 12;
console.log (usersApp);//12 без инкрементации usersApp


//* оператор && (и)
/*
! ВАЖНО ВСЕГДА ВОЗВРАЩАЕТ значение одного из операторов
Как работает
1. Вычисляет значени слева на право
2. Каждый операндпреопразует в логическое значение,
Если результат false останавливается и возвращает исходное значение
3. Если все операнды вернули результат true возвращает значение последнего операнда
*/
// Булевые значения
console.log (true && true);//true
console.log (true && false);//false
console.log (false && true);//false
console.log (false && false);//false

// С разными типами данных

console.log ('Строка' && 0 && 2 && 3);
//0 операнд со значением 0 вернет false, и в консоль выведется 0 

console.log (1 && 2 && null && 3);
// 1-true, 2-true, null- false значение третьего операнда выведенно в консоль

console.log (1 && 2 && 'строка' && 456);
// все значения true вернет последнее 456

//* Приоритет оператора && больше чем оператора ||
console.log (1 && 0 || 2 && 456);
/*1 && 0 вернет false, 2 && 456 оба оператора вернут true,
результат значение поседнего 456,
и после применится оператор или ||,  
0 || 456  результат в коесоле 456
*/

// Условия
let numberCompare = 5;
(numberCompare>0)&&console.log (`Пользователей ${numberCompare}`);
// Если (numberCompare>0) true, переходим ко второй части и выполняем вывод в консоль
// Если (numberCompare>10) false, ни чего не выведется в консоль

//* ОПЕРАТОР !-(НЕ)
/*
! ВАЖНО ВСЕГДА ВОЗВРАЩАЕТ true/false
Как работает
1. Приводит операнды к логическому типу true/false
2. Возвращает противоположное значение
*/
// Булевые значения
console.log (!true);//false
console.log ();
console.log (!false);//true
console.log ();

// С разными типами данных

console.log (!null);
//true
console.log (!1);
//false
console.log (!'');
//true
console.log (!'Строка');
//false
//* Приоритет оператора ! наивысший, больше && и больше чем оператора ||
console.log (!true && 58 || 18 && !1);
/*
Сначала выполнятся действия с оператором НЕ !,
!true вернет false, !1 вернет 0,
потом выполнится операт &&, !true && 58 вернет false, 18 && !1 вернет false
потом выполнится операт ||, false || false вернет false
*/

//Используют для преобразования в тип boolean
console.log (!!'Строка');
/* первый! вернет false второй ! вернет true
тем самым мы приобразуем строку в булевое значение
*/ 

console.log (Boolean('Строка'));
// Аналогичная запись

//* оператор обьединения с null (??)
/*
Как работает
1. Рператор ?? возвращает первый аргумент если он не null и не udefined 
2. Иначе возвращает второй
*/
let nameAdmin;
console.log (nameAdmin??'Без имени');
nameAdmin = 'Tim';
console.log (nameAdmin??'Без имени');

//! ПОЛУЧЕНИЕ ТИПА ДАННЫХ, И ОПЕРАТОРЫ СРАВНЕНИЯ

console.log (typeof 'Без имени');
let varibleExamp = 123;
console.log (typeof varibleExamp);
console.log (typeof varibleExamp === 'number');
varibleExamp = '123';
console.log (typeof varibleExamp === 'number');
console.log (typeof varibleExamp == 'string');

