

//! КЛАССЫ ПРОТОТИПЫ
/*
Класс обьявляется словом class
с помощью классов можно создавать прототипы для обьектов.
с общим скелетом какими либо заданными методами и свойствами.
    На основании прототипов можно создавать экземпляры, 
у которых будут все свойства прототипа, 
и задавать им новые свойства которых нет у прототипа. 
*/

//=========================================================

// Синтаксис для классов выглядит так:

/*
class MyClass {
   методы класса
  constructor
  method1
  method2
  method3
  ...
}
*/
//---------------------------------------------------------

/*
ключевое слово this, используется в методах

Значение this определяется во время исполнения кода.

При объявлении любой функции в ней можно использовать this, 
но этот this не имеет значения до тех пор, пока функция не будет вызвана.
Функция может быть скопирована между объектами (из одного объекта в другой).
Когда функция вызывается синтаксисом «метода» – object.method(), 
значением this во время вызова является object.
Также ещё раз заметим, что стрелочные функции являются особенными – у них нет this. 
Когда внутри стрелочной функции обращаются к this, то его значение берётся извне.

Например:
class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    alert("I walk: " + this.name);
  }
}

constructor(name) {
this.name = name;

Слово this явно укажет, что нужно присвоить 
полю name текущего класса значение аргумента name: this.name = name;.

*/

class Animal {
    constructor(name) {
    this.name = name;
    }

    walk() {
    console.log("I walk: " + this.name);
    }
}

class Leon extends Animal {
    constructor() {
      // вызвать конструктор Animal с аргументом "Кроль"
      super("Король"); // то же, что и Animal.call(this, "Кроль")
    }
}

  new Leon().walk(); 

/*
В конструкторе потомка мы обязаны вызвать super()  до обращения к this
Чтобы не перепутать, к какому полю или методу ты обращаешься, 
используют ключевые слова super и this. В этом уроке ты узнаешь, как работает super.

Чтобы получить доступ к полю или методу родительского класса, 
 понадобится слово super.

this: это ссылка на экземпляр текущего класса. 
*/

//---------------------------------------------------------
//! Создание экземпляра

class User {
    constructor(name, ageUser) {
        this.name  = name;
        this.ageUser = ageUser;
        }
}

//создается новый екземпляр класса с помощью ключевого слова new 

const userOne = new User('Tim',32);
console.log(userOne);
console.log(typeof(userOne));

// создавать экземпляры класса можно сколько угодно раз.

/*
что происходит в коде
1 const userOne создаем новую переменную  (обьект)
2 с помощью new  вызываем кфункцию constructor
3 передаем два параметра (name, ageUser) ('Tim',32)
4 конструктор создает новый экземпляр обьекта, 
который наследует все свойства прототипа User
*/
//---------------------------------------------------------
/*
в прототип можно положить футкции и свойства, 
которые будут наследоватсяя всеми экзеплярами прототипа
*/



class Reptyle {
    constructor(type, moving, limb) {
    this.type = type;
    this.moving = moving;
    this.limb = limb;
    this.populationReptyle = 0;
    }
    sound() {
        console.log(this.type + ' hissed');
      }
      increaseCountReptyle() {
        this.populationReptyle +=1;
      }
}


const snake = new Reptyle('cobra','crawling','no limbs');
console.log(snake);
console.log(typeof(snake));
// 
snake.sound();

//---------------------
//Методы можновызывть многократно

console.log();
snake.increaseCountReptyle();
snake.increaseCountReptyle();
snake.increaseCountReptyle();
console.log('Population = ' + snake.populationReptyle);
//так же созданный экземпляр наследует все методы обьекта 

//---------------------

//Проверка пренадлежности
console.log();
console.log(snake instanceof Reptyle);
// true наследует методы класса Reptyle
console.log(snake instanceof Object);
// true наследует методы обьектов
console.log(snake instanceof Array);
// false не наследует методы массивов

//=========================================================

// Метод static

/*

Метод доступен как свойство класса и НЕ НАСЛЕДУЕТСЯ
экземплярами класса

*/ 

class Reptyle1 {
    constructor(type, moving, limb) {
    this.type = type;
    this.moving = moving;
    this.limb = limb;
    this.populationReptyle = 0;
    }
    static sound() {
        console.log(this.type + ' hissed');
      }
      increaseCountReptyle() {
        this.populationReptyle +=1;
      }
}
console.log();
Reptyle1.sound();
const reptyle3 = new Reptyle1('cobra','crawling','no limbs');
// reptyle3.sound(); получим ошибку так как нет у наследника этого класса
console.dir(reptyle3);

//=========================================================

//Геттеры сеттеры, другие сокращения

/*
Как и в литеральных объектах, в классах можно объявлять вычисляемые свойства, геттеры/сеттеры и т.д.
Вот пример user.name, реализованного с использованием get/set:
*/

class UserName {

  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }
}

let user = new UserName("Иван");
console.log(user.name); // Иван
user = new UserName(""); // Имя слишком короткое.


/*


*/