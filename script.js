// let name = "harry";
// // console.log(name.length);

// // console.log(name.toUpperCase());
// // console.log(name.toLowerCase());
// // console.log(name.slice(2));
// // console.log(name.replace("har", "per"));

// let friend = "rohan";
// console.log(name.concat("is a friend of ", friend, " ok"));


// // Loops
// for (let i = 1; i <= 10; i++){
//     console.log("Apna college");
// }

// /// Arrays

// let marks = [95,85,79,94,84,91,76];
// // console.log(marks)
// // console.log(marks[0])
// // console.log(marks[1])
// // console.log(marks[2])
// // console.log(marks[3])
// // console.log(marks[4])
// // console.log(marks[5])
// // console.log(marks[6])

// // for (let index = 0; index < marks.length; index++) {
// //     const element = marks[index];
// //     console.log(marks.length);
// //     typeof marks; 
// // }

// // // let heros = ["shaktiman", "naagraj", "doga", "batman"];
// // // for (let i = 0; i< heros.length; i++){
// // //     console.log(heros[i]);
// // // }


// // let heros = ["shaktiman", "naagraj", "doga", "batman"];
// // // for (let i = 0; i < heros.length; i++){
// // //     console.log(heros[i]);
// // // }

// // for(let hero of heros){
// //     console.log(hero.toUpperCase);
// // }

// let Marks = [85,97,44,37,76,60]

// let sum = 0;

// for(let i=0; i < Marks.length; i++){
//     let val = Marks[i];
//     sum += val;
// }
// console.log(sum)

// let avg = sum / Marks.length;
// console.log(`average marks of the class = ${avg}`);


// functions

function myFunction(){
    console.log("This is a functions");
    console.log("trying another prints");
}

for(let i = 0; i <= 3; i++){
    myFunction();
}

function nextFunction(msg){
    console.log("Message is: " + msg);
}

nextFunction("this is day 2 of js");

function sum(x ,y){
    console.log(x + y);
}

sum(10, 30);

function sum2(a ,b){
    s = a +b;
    return s;
}

let rs = sum2(4,6);
console.log(rs);

const arrowSum = (a, b) => {
    console.log(a + b);
}

const mul = (a, b) => {
    return (a * b);
}

const vowelCount = (str) => {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}

let arr = [1,2,3,4,5,6,7,8,9];

arr.forEach(function printVal(val){
    console.log(val);
})

let arr2 = [1,2,3,4,5];

arr2.forEach((val, idx) => {
    console.log(val , idx);
});

let nums = [1,2,3,4,5,6,7,8,9];

nums.forEach((num)=>{
    console.log(num * num);
})


let nums3 = [1,2,3,4,5,6,7,8,9];

let newArr = nums3.map((val) => {
    return val; 
})

console.log(newArr);

let nums4 = [1,2,3,4,5,6,7,8,9,10,11,12];


let evenarr = nums4.filter((val) => {
    return val % 2 === 0;
})

console.log(evenarr);

let nums5 = [1,2,3,4,5];

const output = nums5.reduce((prev, currVal) => {
    return prev > currVal ? prev : currVal;
})

console.log(output);


let marks = [95,85,79,94,84,91,76];

let tooperArr = marks.filter((val) => {
    return val >   90;
})

console.log(tooperArr);



let n = prompt("Enter a number: ");

let arrn = [];

for(let i =1; i <= n; i++){
    arrn[i-1] = i;
}

console.log(arrn);

let arrnsum = arrn.reduce((res, curr) =>{
    return res + curr;
})

console.log("sum ",arrnsum);

let arrnsum2 = arrn.reduce((res, curr) =>{
    return res * curr;
})

console.log("factorial" ,arrnsum2);