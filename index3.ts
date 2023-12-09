// ways of declaring arrays
// 1 using square brackets
// const numbers: number[] = [1,2,3,4]

//2 using array constructor
// const numbers1:number[] = new Array(1,2,3,4,5)

//3 using array of methods
// const names:string[] = Array.of('shanky', 'hello')

const fruits: string[] = ["apple","banana","orange","mango"]
const newUpdatedFruits = fruits.push("kiwi")
console.log(newUpdatedFruits)
console.log(fruits)