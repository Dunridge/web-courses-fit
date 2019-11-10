//a comment
/*
A multiline comment
*/

// other naming conventions are camelCase, PascalCase, snake_case, kebab-case

// we use camelCase for naming objects and PascalCase for classes in JS  

// var surnName = "Polinka",
//     myName = "Max ",
//     conc = myName + surnName,
//     age = 19;

// document.write("Hello, ", conc);

// console.log("Hello, " + conc);

// function sayHi(name) {
//     console.log("Hello, " + name)
// }

// sayHi("hello")

// //this didn't produce an error <--- it's like Python 
// var arrExample = ["my Text", 1, 2.14, 2.2]



// class ATestClass {

//     constructor(name, greeting) {
//         this.name = name;
//         this.greeting = greeting;
//     }

//     name(params) { //you don't have to define methods, just specify the name 
//         return "hello";
//     }
// }

// class DerivedClass extends ATestClass {
//     constructor(name, anotherGreeting) {
//         super(name, anotherGreeting)
//     }
// }

//writes numbers from 1 to 13 to the console 
// for (i = 0; i < 13; i++) {
//     console.log(i);
// }

//alert
//alert("hi")

//prompt 
// let age = prompt("how old are you?")

//confirm 

// document.log("Even numbers in the range of 1 to your age: ")
// for (i = 1; i < age; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }


// == - checks whether the type and the values are the same 
// === - check whether the values are equal
//document.write("01" === 1)

/*
JavaScript has both strict and type–converting comparisons.
A strict comparison (e.g., === ) is only true if the operands
are of the same type and the contents match. The more commonly-used
abstract comparison (e.g. == ) converts the operands to the same type
before making the comparison.
*/

//to get a number from a prompt and set it as a number use + 

function chechForEven() {
    a = +prompt("Enter a: ")
    b = +prompt("Enter b: ")
    for (it = a; it <= b; it++) {
        if (it % 2 == 0) {
            console.log(it);
        }
    }
}

function divisibleByThree() {
    a = +prompt("Enter a: ")
    b = +prompt("Enter b: ")
    for (it = a; it <= b; it++) {
        if (it % 3 == 0) {
            console.log(it);
        }
    }
}

//divisibleByThree();
//chechForEven()

// function switchCase() {
//     var state = +prompt("enter your age: ");
//     switch (state.toString) {
//         case "1":
//             alert("You're too young")
//         case "2":
//             alert("Still not allowed")
//         case "19":
//             alert("Wow! You're almost 19!")
//     }
// }

//if you didn't specify the var keyword the variable ecomes global  

//switchCase()

//контекст выполнения

//the power of a function 


// function power(base, exponent) {
//     return exponent == 0 ? 1 : base * power(base, --exponent);
// }

// function factorialize(num) {
//     if (num < 0)
//         return -1;

//     else if (num == 0)
//         return 1;

//     else {
//         return (num * factorialize(num - 1));
//     }
// }



// document.write("a to the power of a is: ")
// document.write(power(3, 3))
// document.write("the factorial is: ", factorialize(3))

var block = document.getElementById('block');
console.log(block)
block.addEventListener('click', function() {
    block.style.backgroundColor = "lime";
    if (block.style.backgroundColor = "lime") {
        block.style.backgroundColor = "black";
    }
})

//TODO: see all the other listener parameters