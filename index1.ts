// console.log("hello")
// var sr:string = "shanky"

// In TypeScript, the syntax :number after the parameter brackets in the function declaration is specifying the return type of the function. 
// function sum(a:number ,b:number):number {
//     return a + b;
// }
// console.log(sum(8,9))


// let user = {name: "shashank", age: 19}

// console.log("hello")
// console.log(user.name)

//any
// here we are writing that hero should be boolean but we are returning string

// let hero:boolean;

// function getHero(){
//     return "thor"
// }
// hero = getHero();


// function addTwo(num: string):string{
//     return num + "hello";
// }
// console.log(addTwo("6"))

// function getUpper(val:string){
//     return val.toUpperCase();
// }
// console.log(getUpper('h'))

// function signUpUser(name:number, email:number, password:number){
// return name +email+password
// }
// console.log(signUpUser(1,2,3))

// function isEven(num:number):boolean{
//     if(num % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isEven(7));

function isDivisibleBy4and8(num:number):boolean{
    if(num % 4 == 0 && num % 8 == 0){
        return true;
    }
    return false;
}
console.log(isDivisibleBy4and8(3));