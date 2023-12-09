// const greet = (name:string, age:number):string => {
//     return `My name is ${name} and my age is ${age}`;
// };

// console.log(greet('shanky', 20))


// const calcavg = (numbers:number[]):number=>{
//     const sum = numbers.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue;
//       }, 0);
//       const avg = sum/numbers.length;
//       return avg;
// }

// console.log(calcavg([1,2,3,4,5]));

// default parameters
// const greet = (name:string, id:number=1):string =>{
//     return `My name is ${name} and id is ${id}`;
// }
// console.log(greet('shanky'))

// optional parameters
const greet = (name:string, id?:number):string =>{
    if(id){
        return `My name is ${name} and id is ${id}`;
    }else{
        return `My name is ${name} `;
    }
    
}
console.log(greet('shanky',8))