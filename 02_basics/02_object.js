const obj1 = {
    1 : "Anuj",
    2 : 200
}

const obj2 ={
    3 : "ravi",
    4 : 324234
}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2};
//... is usd for spressing the object
console.log(obj3);
// const isLogin = true;


const tinderUser = {};

tinderUser.id = 1
tinderUser.name = "Divyanshu"

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));


console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));