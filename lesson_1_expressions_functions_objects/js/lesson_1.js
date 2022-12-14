// !Самое важное 
// *1 Выражения
// ?2 функции
// !3 Обьекты
/*
Обьекты - набор свойств 
{"имя":"значение"}
example
{
    visible:true,
    colorDepth:24,
    title:'my Image',
    orientation:{
        angle:0,
        type:'landscape'
    },
    pixelDepth:24
}

console.log('любое сообщение');

console-обьект  
. - точечьная запись(точечное обращение к методу)
log - метод  ('любое сообщение') 
() вызов метода 
'любое сообщение' - аргумент(значение типа string)

console.dir(); отображает все свойства обьекта
console.table(); отображает все свойства обьекта в табличном виде
любое выражение возвращает значение
*/
// *1 Выражения
console.log('abc');//строка при передаче вернет это же значение 'abc'
console.log(10);//число при передаче вернет это же значение 10
console.log(5 + 2);//числа но используется оператор сложения вернет сумму чисел
console.log(c = 10);//оператор присвоения результат значение присвоения (10)
console.log('good'+ ' Evening');//конкатинация строк (сложение строк) результат 'good Evening'
a<=b || с !== e;// выражение с несколькими операторами  || или, !== не равно, <= меньше или равно
console.log(myFunction(c,d));//вызов функции 

//!Выражение с побочными действиями
a = 5;// автоматом присвоится значение переменной без её обьявления, !!!ВАЖНО не рекомендуется так писать код
b++;
myFunction(c,d);

// ! ИНСТРУКЦИЯ 
/*
Инструкция — это команда для компьютера выполнить что-то.
Код на JavaScript — это набор инструкций, 
которые, как правило, отделяются друг от друга символом ;
*/
console.log('good'+ ' Evening')
console.log('JS')
console.log();
console.log('good'+ ' Evening');
console.log('JS');
/*
Возможно написание как с точкой с запятой так и без нее,
ошибки не будет если инструкции написаны в разные строки

console.log('good'+ ' Evening') console.log('JS') выдаст ошибку
е сли используются сборщики которые сжимают код могут возникать ошибки
*/

//* Инструкции в JS могут содержать 
/*
Значения
Операторы
Выражения
Ключевые слова
Комментарии
*/
//! ЗНАЧЕНИЯ
/*
в JS есть несколько типов значений (values):
фиксированные значения(литералы)
значения констант
значения переменных
*/

25              // литерал целого числа
23.8            // литерал дробного числа
"String"        // Литерал строки
'String'        // Литерал строки
`String`        // Литерал строки
[]              // Литерал массива
[1, 2, 34]      // Литерал массива
{}              // Литерал обьекта
{
    visible:true,
    colorDepth:24,
    title:'my Image'
}              // Литерал обьекта
(ab|bc)        // Литерал регулярного выражения


//* Константы и переменные используются для хранения значения данных
const MAX_VALUE = 345;  // константа 
const a = 234;          // константа 
let string = 'name user'// переменная 
var number = 47;        // переменная, данное написание обьявления переменной, практически не используется

//! ОПЕРАТОРЫ
/*
Операторы
В JS имеется очень много оперраторов ,
Они означают, ОПЕРАЦИЮ, которую нужно произвести
*/
console.log('good' + ' Evening');// плюс оператор сложения
console.log(1 - 4);// минус арифметический оператор вычитания оператор сложения
let user = 'name user';// = оператор присваивания

//! ВЫРАЖЕНИЯ
/*
Выражения(expression) - это комбинация значений, переменных и операторов, 
которые либо присваивают переменной значения , 
либо возвращают какое либо значение без его присваенгия.
*/
let num = 487;//выражение присвоения
console.log(num);
console.log('good' + ' Evening');//выражение без присвоения

//! КЛЮЧЕВЫЕ СЛОВА
/*
Инструкции в JS часто начинаются  с ключевого слова 
(keyword).
Оно предназначенно для того, чтобы определить какое действие JS необходимо выполнить
*/
let// указывает браузеру создать переменную


//! БЛОК ИНСТРУКЦИЙ
/*
В JS инструкции можно сгрупировать с помощью блока,
по сути {....}
Используется в циклах, функциях итд...
*/
function name() {
    console.log('good' + ' Evening');
    console.log('Learning');
}
name();

//! КОММЕНТАРИИ 
// Однострочный комментарий
/*
многострочный
коментарий
*/
