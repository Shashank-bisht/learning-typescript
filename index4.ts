const User = {
    name:"shanky",
    email:"shanky@gmail.com",
    isActive: true
}

function createUser({name: string, isActive: boolean}){

}

createUser({name: "shanky", isActive: true})


// for returning object giving object type
function createcourse():{name: string, price: number}{
    return {name: "shanky", price: 99}
}
console.log(createcourse())


// typescript odd behaviour

function userdata({name: string, age: number}){}

let newUser = {name: "shanky", age:7}

//userdata() // will give error but
userdata(newUser) // not giving error
