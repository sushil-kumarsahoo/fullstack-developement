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

interface User {
    firstName:string,
    lastName:string,
    age: number,
    email?:string
};


function isLegal(user:User){
    if(user.age > 18){
        return true;
    } else {
        return false;
    }
}

function greet(user:User){
    console.log("hi there "+ user.firstName);
    
}

const user = {
    firstName: "sushil",
    lastName: "kumar",
    age: 20
};

console.log(isLegal(user));
greet(user);


