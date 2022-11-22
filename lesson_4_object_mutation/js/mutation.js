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
//! происходит это потому что мы копируем не сам обьект (значения) а только ссылку на него, 
//! userTwo и userDate ссылаються на один обьект в памяти
//* copy by reference копирование ссылки

//! userTwo можно изменять через userDate
userDate.name = 'Boby';
console.log();
console.log(userTwo); //* свойство обьекта name ='Boby', как у userTwo так и userDate

//! КАК ИЗБЕЖАТЬ МУТАЦИЙ
//* Вариант 1
//? Использовать assign,   этод метод является свойством глобального обьекта 
const newUser = Object.assign({}, userTwo);
newUser.age = 41;
newUser.name = 'Tom';
console.log();
console.log(newUser.age);
console.log(userTwo.age);
//! {} указывает что обьект пустой(), Object.assign создаст новый обьект и запишет в него свойства userTwo 

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
};
console.log(mysculCar);
console.log();
console.log(mysculCar.engine.liters);
const mysculCar2 = Object.assign({}, mysculCar);
mysculCar2.engine.liters = 3.0;
console.log(mysculCar.engine.liters);

//! КАК ИЗБЕЖАТЬ МУТАЦИЙ
//* Вариант 2
const mysculCar3 = {...mysculCar };
//? ... оператор spred оператор разделения обьекта на свойства
//* {...mysculCar } разделили обьект на свойства и потом собираем их в новый обьект mysculCar3 в памяти создается новая ссылка
mysculCar3.model = 'Mustang Continental';
console.log();
console.log(mysculCar.model);
console.log(mysculCar3.model);
//! !!!!ВАЖНО если свойства обьекта имеют вложенные свойства(обьекты) ссылки на них сохранятся

//! КАК ИЗБЕЖАТЬ МУТАЦИЙ
//* Вариант 3
const mysculCar4 = JSON.parse(JSON.stringify(mysculCar));
//* JSON.stringify конвертируем в строку JSON.stringify конвертируем снова в новый обьект
mysculCar4.engine.liters = 5.0;
console.log('полностью избежали мутаций');
console.log(mysculCar.engine.liters);
console.log(mysculCar4.engine.liters);