// const square = function (x) {
//     return x * x
// }

//arrow function
// const square = (x) => {
//     return x * x
// }

//shorthand syntax
// const square = (x) => x * x

// console.log(square(2))

const event = {
    name: 'Birthday Party',
    guestList: ['HSamoen', 'Jen', 'Mike'],
    //using arrow functions will not work for this. **arrow functions do not bind their own value
    //standard function with alternative syntax
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()