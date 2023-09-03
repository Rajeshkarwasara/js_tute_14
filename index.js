// for(let i=0; i<7; i++){
//     document.write("<br>*")
//     for(let i2=1; i2<=10; i2++)
//     document.write("*")

// }

// let sum3=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// sum3.splice(5,4)
// document.write(sum3)


// 1.	Write a JS code to delete all occurrence of element in given array
console.log("Q.1")
let arr = [5, 1, 4, 5, 1, 5, 4, 5];

arr.splice(0, 8);
console.log(arr)

// 2.	Write a JS code to find the power of a number using for loop
console.log("Q.2")
function power(a, b) {
    let multiply = 1;
    for (let i = 0; i < b; i++)
        multiply *= a
    return multiply
}
let add3 = power(3, 2)
console.log(add3)

// 3.	Write a JS code to find the number of zeros

console.log("Q.3")
function zero(array) {
    let Count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            Count++;
        }
    }
    return Count;
}
let addd = zero([0, 7, 2, 0, 3, 6, 9, 0, 0, 4, 7, 0, 0]);
console.log(addd);


// 4. Write a JS code to print numbers from 1 to 10
console.log("Q.4")
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// 5. Write a JS code to print Even numbers in given array
console.log("Q.5")
let evennumber = [5, 4, 58, 8, 8, 5, 8, 7, 5, 9, 2, 4, 8, 5, 2, 58, 8, 4, 2, 5, 8, 4, 2, 5, 8, 4, 2, 5]

for (let ii = 0; ii < evennumber.length; ii++) {
    if (evennumber[ii] % 2 === 0) {
        console.log(evennumber[ii])
    }
}


// 6. Write a JS code to find the power of a number using for looplet 
console.log("Q.6")
function power(a, b) {
    let multiply = 1;
    for (let r = 0; r < b; r++) {
        multiply *= a
    }
    return multiply;
}

let r2 = power(2, 3)
console.log(r2)



// 7. Write a JS code to find the no of digits in a number
console.log("Q.7")
// function whilee(){
// let a3=0;
// while(a3<10){
//     a3++;
//     return a3;
// }
// }
// let r3=whilee();
// console.log(r3)

function whilee(a) {

    let counts = 0;
    while (a > 1) {
        a = a / 10;
        counts++;

    }
    return counts;
}
console.log(whilee(2000))

// console.log(whilee(54445))
// let number={nub:234567}
// console.log(number.nub)
// function whilee(a) {
//     let counts = 0;
//     while (a > 0) {
//         a = Math.floor(a / 10);
//         counts++;
//     }
//     return counts;
// }

// console.log(whilee(544));



// 8. Write a JS code to calculate the sum of digits in a number
console.log("Q.8")
let sum = [3343, 56, 45, 65, 675, 675, 765, 567, 673, 5]
console.log(sum.length)

let sums = 0;
for (let i = 0; i < sum.length; i++) {
    sums += sum[i]
}
console.log(sums)










// Ans 11 = Print numbers from 1 to 10

console.log("Q.9")
for (let a = 1; a <= 10; a++) {
    console.log(a)
}

// Ans 10 = Print the multiplication table with 7
console.log("Q.10")
for (let b = 7; b <= 7; b++) {
    for (let c = 1; c <= 10; c++)
        console.log(b * c)
}

// Ans 9 = Print the odd numbers less than 100
console.log("Q.11")
for (let d = 1; d < 101; d++) {
    if (d % 2 === 0) {
        continue
        // break
    } else {
        console.log(d)
    }
}
// Ans 12 = Calculate the sum of numbers from 1 to 10

console.log("Q.12")
let add = 0;
for (let e = 1; e <= 10; e++) {
    add += e;
}
console.log(add)



let namee = document.getElementById("name")
let btnn = document.getElementById("btn")
let p1 = document.getElementById("p1")

namee.addEventListener("change", function () {
    // let velu = namee.value;
    // console.log(velu)
    let ptn = /[a-z]{6}/
    let avg = ptn.test(namee.value)
    console.log(avg)

    if (!avg) {
        console.log("please enter 6 word")
        p1.innerText = "please enter 6 word"
    }
    else {
        p1.innerText = ""
    }

})
let emaill = document.getElementById("Email")
let p2 = document.getElementById("p2")

emaill.addEventListener("change", function () {
    let ptn2 = /[a-z]+[0-9]+ @[a-z]+\.[a-z]{3}/;
    let avg2=ptn2.test(emaill.value)
    console.log(avg2)

    if (!avg2) {
        console.log("please enter valid email")
        p2.innerText = "please enter valid email"
    }
    else {
        p1.innerText = ""
    }


})
btn.addEventListener("click", function () {
    alert("success your form")
})






