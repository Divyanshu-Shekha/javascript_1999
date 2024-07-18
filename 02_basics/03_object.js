//distructuring

const course = {
  courseName: "full stack",
  courseFees: 2000,
  courseInstructer: "Divyanshu Shekhar",
};

// course.courseInstructer

const { courseInstructer: instructer } = course;

// console.log(courseInstructer);

// console.log(instructer);

//react concept

// const navbar = ({company}) =>{
//     if(company){
//         console.log("User is logedIn");
//         return
//     }
//     return "Please enter the company";
// }

// navbar(company = "Divyanshu")

//object in json formate as we can say all the data is always be seen by api is in the form of json
//The Difference between Object and json is the keys and values is written in the double couts in json and there is no varisble is assigned to store the json formate...

// {
//     "name" : "Divyanshu",
//     "id" : "4",
//     "values" : "24"
// }


// api's can be in the form of object or in the form of an array but in array there are many objects are present inside it

// [
//     {},
//     {}
// ]


function userlogin(user){
  if(!user){
    return`${user}please enter a valid name....`;
  }
  return `${user} user loged in`;
}

console.log(userlogin())
