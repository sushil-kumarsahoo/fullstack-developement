// let x: number = 1;
// console.log(x);

//-----------------------------------------------------

// function greet(firstName : string, lastName: string, age : number){
//     console.log("hello " + firstName +" "+ lastName +" "+ age);
// }
// greet("sushil","kumar",20);

//------------------------------------------------------
//type inference  

// function sum(a:number,b:number): number{
//     return a+b;
// }
// const value = sum(1,2);
// console.log(value);

//-------------------------------------------------------

// function isLegal(age: number){
//     if(age >18){
//         return true;
//     }
//      return false;
// }

//-------------------------------------------------------

// function runAfter1s(fn: () => void){
//     setTimeout(fn,1000);
// }

// runAfter1s(function(){
//     console.log("hi there!");
    
// })

//--------------------------------------------------------

// const doSomething: (a:number) => void = (a) => {
//     console.log("hello");
//     return 5;
// }

//--------------------------------------------------------

// interface User {
//     firstName:string,
//     lastName:string,
//     age: number,
//     email?:string
// };


// function isLegal(user:User){
//     if(user.age > 18){
//         return true;
//     } else {
//         return false;
//     }
// }

// function greet(user:User){
//     console.log("hi there "+ user.firstName);
    
// }

// const user = {
//     firstName: "sushil",
//     lastName: "kumar",
//     age: 20
// };

// console.log(isLegal(user));
// greet(user);

//---------------------------------------------------------

//  interface Person{
//     name:string;
//     age:number;
//     greet(phrase: string): void;
//  }

//  class Employee implements Person{
//     name:string;
//     age:number;

//     constructor(n:string, a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} ${this.name}`);
        
//     }
//  }

//  const e = new Employee("sushil", 20);
//  console.log(e.name);
 

//-----------------------------------------------------------

// type User = {
//     firstName : string;
//     lastName : string;
//     age:number;
// } 

// type StringorNumber = string | number;

// function printId(id: StringorNumber){
//     console.log(`ID: ${id}`);
// }

// printId(10);
// printId("10");

//-----------------------------------------------------------

// type Employee = {
//     name: string;
//     startDate: Date;
// };

// interface Manager{
//     name:string;
//     department:string;
// };

// type TechLead = Employee & Manager;

// const t: TechLead = {
//     name: "sushil",
//     startDate: new Date(),
//     department:"asadda"
// }

// function printDetails(lead: TechLead) {
//      console.log("Name:", lead.name); 
//      console.log("Department:", lead.department); 
//      console.log("Start Date:", lead.startDate); 
//     }
//     printDetails(t);


//-----------------------------------------------------------

// function maxValue(arr: number[]) {
//     if (arr.length === 0) return undefined;

//     let max = arr[0]!;

//     for (const value of arr) {
//         if (value > max) {
//             max = value;
//         }
//     }

//     return max;
// }

// console.log(maxValue([1,2,3]));

//-----------------------------------------------------------

//Array type

// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// function filteredUsers(users:User[]){
//     return users.filter(x => x.age >= 18);
// }

// console.log(filteredUsers([{
//     firstName:"sushil",
//     lastName:"sahoo",
//     age:20
// },
// {
//     firstName:"soumya",
//     lastName:"pradhan",
//     age:17
// }]));


//-------------------------------------------------------

enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction){
    if(keyPressed == Direction.Up){

    }
     
}

doSomething(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Up);

