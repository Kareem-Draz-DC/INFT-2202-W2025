// JavaScript/Intro-to-JavaScript/intro.js
// console.log("Hello World!")

// Variables, Data Types
// var num = 5; // General declaration, previously was used to declare global scope
// let num1 = 5; // General declaration, variable takes on current scope
// const num2 = 5; // declaring constants, cannot be changed after

// Boolean - true/false
// null - null value
// undefined - undefined
// Number - number
// String - string (characters )
// Symbol - special type


// Expressions, Operators
// let num1 = 5
// let num2 = 10
// let num3 = 15

// console.log(num1 != num2) // true
// console.log(num1 == num2 && num2 != num3) // false
// console.log(num1 == num2 || num2 != num3) // true

// let add = num1 + num2
// let minus = num1 - num2
// multiply -> *
// division -> /
// modulo -> %

// Loops, Conditionals

// for (let i = 1; i <= 25; i+= 3) { // 1 4 7 10 13
//     if (i % 2 == 0) break
//     console.log(i)
// }

// Arrays, Objects

// let arr = [1,2,3, "hello", {myKey: "value"}, [1,2,3], () => {}]
// console.log(arr[3])

// arr.push("3") // add an element to the array
// arr.pop() // remove an element from the array
// console.log(arr.join()) 


// let arr = [1,2,3,4,5]

// 1. For loop
// for (let i = 0; i < arr.length; i++) {
//     arr[i] += 10
// }
// 2. ForEach
// arr.forEach(function(num, i) {
//     arr[i] += 10
// })

// console.log(arr)

// let car = {
//     brand: "honda", // key:value
//     year: 2005,
//     color: "yellow",
//     type: "odyssey",
//     engine: "off",
//     newCar: {
//         brand: "honda",
//         year: 2005
//     },
//     igniteEngine: () => {
//         this.engine = "on"
//     }
// }


// Functions
// console.log(sum)
// Function Declarations
function sum(a,b) {
    return a + b
}
// Function Expressions
let sum1 = function (a,b) {
    return a + b
}
// Arrow Functions
let sum2 = (a,b) => {
    return a + b
}
// console.log(sum(10, 20))

// Classes

// class Car {
//     constructor(type, brand, model, year) {
//         this.type = type
//         this.brand = brand
//         this.model = model
//         this.year = year
//         this.engine = "off"
//     }
//     startEngine() {
//         this.engine = "on"
//     }
// }


// let myVehicle = new Car("SUV", "Toyota", "Highlander", 2020)
// myVehicle.startEngine()

// console.log(myVehicle)

// DOM: Document Object Model 

console.log("hello browser!")
console.log(document)

// document.body.style.backgroundColor = "red";



// User Stories
// 1. AAU, I want to be able to type a new blog post into a text box
// 2. AAU, I want to be able to click on a button to publish my blog post
// 3. AAU, I want to be able to view all the blog posts
// 4. Bonus: AAU, I want to be able to delete blog posts



// Setup
function setupBlogPage() {
    // Create Form (After)
    // Create Input Element and display on page
    let blogInput = document.createElement("input")
    blogInput.setAttribute("type", "text")
    blogInput.setAttribute("id", "blogInput")
    document.body.appendChild(blogInput)
    // Create button to submit blog post
    let blogPostBtn = document.createElement("button")
    blogPostBtn.setAttribute("type", "submit")
    blogPostBtn.innerText = "Publish Blog Post"
    blogPostBtn.addEventListener("click", publishPost)
    document.body.appendChild(blogPostBtn)
}
setupBlogPage();
function publishPost(event) {
    // Grab data from input element
    let blogInputData = document.getElementById("blogInput").value
    console.log(blogInputData)
    let blogPost = document.createElement("div")
    blogPost.innerText = blogInputData
    document.body.appendChild(blogPost)
}

// Activity:

// 1. Store Input and button elements in an HTML form and attach to the form submission event the publishPost function using addEventListener()
// 2. Store blog posts in an array of objects that include the id and content
// {
//     id: 1
//     content: "my first blog post"
// }
// 3. Add another button to each blog post to delete the blog post

