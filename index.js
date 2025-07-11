// console.log("WELCOME");
// const college = "LPU";
// console.log(college);
// const helper = require("./helper");
// helper.greetfunction("Ayush");
// helper.addOne(10);

function fetchData(callback){
    console.log("Start fetching data..");
    setTimeout(()=>{
        console.log("Fechted the first data");
        setTimeout(()=>{
        console.log("Fechted the second data");
        setTimeout(()=>{
        console.log("Fechted the third data");
        setTimeout(()=>{
        console.log("Fechted the fourth data");
        callback();
    }, 2000);
    }, 2000);
    }, 2000);
    }, 2000);
}
 console.log("Start");

 fetchData(()  =>{
    console.log("fetched and Process data");
 });
 console.log("END");



