const fs = require('fs');

// fs.writeFile('output.txt', 'Node.js is awesome!', (err) => {
//     if (err) throw err;
//     console.log('File created!');
// });


// fs.appendFile('output.txt', '\n Node.js is good for learn!', (err) => {
//     if (err) throw err;
//     console.log('File append!');
// });

// fs.readFile('output.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });



// const EventEmitter = require('events');

// const fileEmitter = new EventEmitter();

// fileEmitter.on('fileRead', (content) => {
//     console.log('File Content:', content);
// });

// // Read file and emit event
// fs.readFile('output.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     fileEmitter.emit('fileRead', data);
// });



// const express  = require('express');
// const app = express();
// app.listen(3000,() => console.log("server running 3000"));

// ✅ Start with Callbacks → Arrow Functions → Promises → Async/Await 🚀
// =================================================
// Basic Callback Example

// function greet(name,callback) {
//     setTimeout(() => {
//         console.log("Hello, " + name);
//         callback();
//     }, 2000);

// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("John",sayGoodbye);
// sayGoodbye();



// const myPromise = new Promise((resolve, reject) => {
//     let success = false; // Change to false to test rejection

//     setTimeout(() => {
//         if (success) {
//             resolve("✅ Operation was successful!");
//         } else {
//             reject("❌ Something went wrong!");
//         }
//     }, 2000);
// });

// // Handling the promise
// myPromise
//     .then(result => console.log(result))  // Runs if resolved
//     .catch(error => console.error(error)) // Runs if rejected
//     .finally(() => console.log("🎯 Promise execution completed!"));         


// function fetchData() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("✅ Data received!"), 2000);
//     });
// }

// async function getData() {
//     console.log("Fetching data...");
//     let result = await fetchData(); // Waits for fetchData() to complete
//     console.log(result);
// }

// getData();
// console.log("This runs while waiting...");