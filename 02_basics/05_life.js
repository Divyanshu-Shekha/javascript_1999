// Immediately invoked function expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

(()=>{
    console.log(`DB CONNECTED two`)
})()

//()() the first paranthisys is for function defintion and other is for execution and it is called effi and it is used to prevent from the pollution of global scope
