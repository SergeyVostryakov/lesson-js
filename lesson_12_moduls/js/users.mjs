
//! Модуль 1

const userName = () => {
    console.log('User name Tim');
}

export default userName;

/*
1
таким образом можно укспортироватьб
только одну функцию, переменную итд...
2
импортируя по дефолту в файле импорта переменной 
или функции можно задать дюбое имя которое необходимо
*/ 

//============================================================

//! Импорт и экспорт нескольких переменных

const varOne = 1;
const varTwo = 'Строка';
const varThree = 73987;

const var1 = 1;
const var2 = 'Строка';
const sum = (x, y) => console.log (x+y);
const mult = (x, y) => x*y;

export{
    varOne,
    varTwo,
    varThree,
    var1,
    var2,
    sum,
    mult
}

