const arr = [1,23,4,5,5,6,6,54,4];

for(const i of arr){
    console.log(i);
}

//map

const map = new Map();
map.set("State","bihar");
console.log(map);


const arr1 = [1,2,3];

const newval  = arr1.reduce((acc,currval)=>{
    console.log(`Acc is ${acc} and current value is ${currval}`);
    return acc+currval
},0);

console.log(newval);