const fs = require('fs') 
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }
// //data stored as js object

// //JSON.stringify: js method that takes in an object, array or any value and returns the JSON string representation
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync ("1-json.json", bookJSON)
// console.log(bookJSON)

// //JSON.parse: takes in the JSON string and gives us back the object
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

//a buffer which is a way for node js to represent binary data
// const dataBuffer = fs.readFileSync('1-json.json') // read the file getting our binary data
// const dataJSON = dataBuffer.toString() // convert that data into a standard string in js
// const data = JSON.parse(dataJSON) // parsed that JSON data into an object
// console.log(data.title) // access a property from it

// Challenge:
const dataBuffer = fs.readFileSync('1-json.json') // to load JSON data in the file 1-json.json
const dataJSON = dataBuffer.toString() // convert to string. dataJSON: which will get its value from using the buffers to string method: dataBuffer.toString() 
const user = JSON.parse(dataJSON) //parse into an object

//change data
user.name = "HSamoen"
user.age = 23

const userJSON = JSON.stringify(user) // stringify user object
fs.writeFileSync('1-json.json', userJSON) // writing to the exact file to override the original data