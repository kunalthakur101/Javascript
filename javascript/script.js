// let arr = [
//   { name: "kunal", age: 25, class: "10th" },
//   { name: "fahim", age: 33, class: "12th" },
//   { name: "satyam", age: 65, class: "13th" },
// ];

// console.log(arr[1].class);

// var rice_available = true;
// var wheat_available = true;
// var apple_available = false;

// if (rice_available) {
//   console.log("buy rice");
// }
// if (wheat_available) {
//   console.log("buy wheat");
// }
// if (apple_available) {
//   console.log("buy apple");
// }

// var n = 14;

// if (n % 2 == 0) {
//   console.log("even number");
// } else {
//   console.log("odd number");
// }

// console.log(10 + "20");

// console.log("10" + 20 + 30);

// console.log(10 + 20 + "30");

// console.log("5" - "2" + "1");

// console.log(5 - 2 + "5");

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i += 2;
// }

// let arr = ["mango", "orange", "grapes"];
// let arr2 = [1, 2, 3, 4, 5];

// for (let val of arr2) {
//   console.log(val);
// }

// let person = { name: "kunal", age: 25, gender: "Male" };
// for (let val in person) {
//   console.log(person[val]);
// }

// Problem no. 1

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// problem no. 2
// i = 1;
// while (i <= 20) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

//problem no. 3

// i = 1;
// do {
//   console.log("Please enter number greater than 10:");
//   i++;
// } while (i <= 10);

// problem no 4

// let student = { name: "tina", age: 25, grade: "A" };

// for (let key in student) {
//   console.log(key, student[key]);
// }

// var length = 15;
// var width = 20;

// function areaofrect(l, w) {
//   var a = l * w;
//   return a;
// }

// function perimeter(l, w) {
//   var a = 2 * (l + w);
//   return a;
// }

// const area = areaofrect(length, width);
// console.log(area);

// const peri = perimeter(length, width);
// console.log(peri);

// function even(n) {
//   return n % 2 === 0;
// }

// const res = even(5);
// console.log(res);

// arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((element) => {
//   element * 5;
// });

// console.log(arr);

// let arr = [
//   { name: "kunal", age: 25, role: "react" },
//   { name: "fahim", age: 28, role: "react" },
//   { name: "swati", age: 35, role: "react" },
//   { name: "abhishek", age: 45, role: "react" },
// ];

// let ans = arr.map((el, i, arr) => {
//   return arr[i].age;
// });

// console.log(ans);

// let res = arr.reduce((acc, curr) => {
//   return acc + curr.age;
// }, );

// console.log(res);

// function b() {
//   c();

//   console.log(a);
//   function c() {}
// }

// var a = 10;

// b();

// (function () {
//   console.log("kunal");
// })();

// function name(a, callback) {
//   console.log("kunal");
//   console.log(a);
//   console.log(callback);
//   console.log(callback());
// }

// function a() {
//   return 3 * 4;
// }
// name("rohan", a);

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 2000);
//     }

//     close(i);
//   }
//   console.log("hello");
// }

// x();

// a = [1, 2, 3];

// const [first, second, third, four = 45] = a;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(four);

//-----------------------------------------------------------------------
// let arr = [
//   { name: "kunal", age: 25, role: "react" },
//   { name: "fahim", age: 28, role: "react" },
//   { name: "swati", age: 35, role: "react" },
//   { name: "abhishek", age: 45, role: "react" },
// ];

// const res = arr.reduce((arr, curr) => {
//   if (curr.age < 30) {
//     arr.push(curr.name);
//   }
//   return arr;
// }, []);

// console.log(res);

//--------------------------------------------------------

//const p = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Resolved");
//   }, 4000);

//   setTimeout(() => {
//     rej("Error");
//   }, 6000);
// });

// console.log(p);
// p.then((res) => console.log(res)).catch((err) => console.log(err));

//--------------------------------------------------------------------------------

// fetch("http://localhost:3000/posts/", {
//   method: "GET",
//   headers: { "Content-Type": "application/json" },
//   // body: JSON.stringify({ title: "manish", views: 1200 }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// -----------------------------------------------------------------------------

// let p = new Promise((res, rej) => {
//   var success = false;

//   setTimeout(() => {
//     if (success) {
//       res("Resolved");
//     } else {
//       rej("Rejected");
//     }
//   }, 4000);
// });

// let p1 = new Promise((res, rej) => {
//   var success = false;

//   setTimeout(() => {
//     if (success) {
//       res("Resolved");
//     } else {
//       rej("Rejected");
//     }
//   }, 5000);
// });
// let p2 = new Promise((res, rej) => {
//   var success = false;

//   setTimeout(() => {
//     if (success) {
//       res("Resolved");
//     } else {
//       rej("Rejected");
//     }
//   }, 2000);
// });

// Promise.any([p, p1, p2])
//   .then((resp) => console.log(resp))
//   .catch((err) => console.log(err));

// ----------------------------------------------------

//DOM MANIPULATION

// let btn = document.querySelector("#click");
// let p = document.querySelector("#p");

// btn.addEventListener("click", (e) => {
//   if (p.style.display === "none") {
//     p.style.display = "block";
//   } else {
//     p.style.display = "none";
//   }
// });

// let btn = document.getElementById("btn");
// let parent = document.getElementById("container");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let name = document.getElementById("name");
//   let email = document.getElementById("email");
//   let age = document.getElementById("age");
//   let city = document.getElementById("city");

//   let newel = document.createElement("ul");

//   newel.innerHTML = `<li>${name.value} </li><button>del</button>
//   <li> ${email.value}
//   </li> <li> ${age.value}</li>
//   <li> ${city.value} </li>`;

//   parent.append(newel);
// });
