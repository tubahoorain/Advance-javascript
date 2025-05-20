
// function BankAccount(customerName , balance = 0){
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//     this.deposit = function(amount){
//         this.balance += amount
//     };
//     this.withdraw = (amount) =>{
//         this.balance -= amount;

//     }
// }
// const aliAccount = new BankAccount("Ali" , 4000);
// aliAccount.deposit(3000);
// console.log(aliAccount);
// const usmanAccount = new BankAccount("Usman" , 6000);
// const rehmanAccount = new BankAccount("Rehman" , 7000);
// const bilalAccount = new BankAccount("Bilal");
// console.log(aliAccount,usmanAccount,rehmanAccount,bilalAccount);
// console.log(aliAccount.accountNumber);



// const aliAccount = new BankAccount("Ali" , 4000);
// aliAccount.deposit(3000);
// aliAccount.withdraw(2000);
// console.log(aliAccount);




// const student = {
//     fullName : "Ali",
//     marks : 70,
//     printMarks : function(){
//         console.log("marks =  " , this.marks);  //student.marks
//     }
// };
// console.log(student);


// const student = {
//     fullName : "Ali",
//     marks : 70,
//     printMarks(){
//         console.log("marks =  " , this.marks); 
//     }
// };
// console.log(student);


// class hello{
//     message(){
//         console.log("Hello Everyone !")
//     }
// };
// let a = new hello();
// a.message();


// class hello{
//     message(){
//         console.log("Hello Everyone !")
//     }
//     Sorry(){
//         console.log("Sorry Everyone !")
//     }
// };
// let a = new hello();
// a.message();
// a.Sorry();




// class student{
//     constructor(){
//         console.log("Constructor Function !") ;  //function automatically call
//     }
// }
// let a = new student();
// let b = new student();



// class student{
//     constructor(){
//         let name;
//         console.log("Constructor Function !")   //function automatically call
//     }
//      hello(){
//         console.log("Hello " +this.name)
//     }

// }
// let a = new student();
// let b = new student();
// a.name = "Hello world";
// a.hello();




// class student{
//     constructor(name){
//         this.stuName = name;   //represent a
//         console.log("Constructor Function !")   //function automatically call
//     }
//      hello(){
//         console.log("Hello " +this.name)
//     }

// }
// let a = new student("OOP");
// a.hello();






// class student{
//     constructor(userName, userPass){
//         this.name = userName;   //represent a
//         this.pass = userPass;
//         console.log("Constructor Function !")   //function automatically call
//     }
//      hello(){
//         console.log(`Hello  ${this.name} Your password is ${this.pass}`);
//     }

// }
// let a = new student("Ali",12345);
// let b = new student("Usman",90675);
// a.hello();
// b.hello();




// class student{
//     constructor(userName, userPass){
//         this.name = userName;   //represent a
//         this.pass = userPass;
//         console.log("Constructor Function !")   //function automatically call
//     }
//      hello(){
//         console.log(`Hello  ${this.name} Your password is ${this.pass}`);  //prototype method
//     }

//    static staticMethod(){
//     console.log("Static function");
//    }
// }
// let a = new student("Ali",12345);
// let b = new student("Usman",90675);
// a.hello();
// a.staticMethod();  //show error

// student.staticMethod();  //call static method  without creating object




// 3. INHERITANCE EXAMPLE
// Parent class
// class Animal {
//     makeSound() {
//         console.log("Animal makes a sound");
//     }
// }

// // Child class (inherits from Animal)
// class Dog extends Animal {
//     bark() {
//         console.log("Dog barks");
//     }
// }

// // Using the classes
// const d = new Dog();
// d.makeSound(); // Inherited method
// d.bark();      // Child class specific method
// the Dog class inherits the makeSound() method from the Animal class, which shows how code reuse works in JavaScript using inheritance.






// 4. Encapsulation EXAMPLE
// private fields can be created using #(introduced in ES2022).Here's how you can achieve encapsulation:

// class Person {
//     // Private field
//     #name;

//     // Setter method (to write data)
//     setName(newName) {
//         this.#name = newName;
//     }

//     // Getter method (to read data)
//     getName() {
//         return this.#name;
//     }
// }

// // Using the class
// const p = new Person();
// p.setName("John Doe");
// console.log("Person's Name: " + p.getName());
//  the #name field is private and cannot be accessed directly from outside the class. 
//  You can only interact with it using the setName() and getName() methods — this is encapsulation in JavaScript.