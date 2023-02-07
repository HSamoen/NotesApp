const fs = require('fs')
const chalk = require('chalk')

//Add Notes 
const addNote = (title, body) => {
    const notes = loadNotes()
     //to ensure that no duplicate titles are allowed--function takes in a callback; checks (filters) through the objects for a title match
    const duplicateNote = notes.find((note) => note.title === title)

    //if title does not match any existing titles --push new object to the list "New note added!" will be diplayed, otherwise no action is taken and "note title taken!" will be displayed
    if(!duplicateNote) { 
        notes.push({
            title: title,
            body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

//Remove Notes
const removeNote = (title) => {
   const notes = loadNotes()
   //find notes we want to keep: true--keep in array; false--do not want to keep
   const notesToKeep = notes.filter((note) => note.title !== title)

   if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
   } else {
    console.log(chalk.red.inverse('No note found!'))
   }
}

//List Notes
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

//Read Notes
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

//Save Notes
const saveNotes = (notes) => {
    // the JSON.stringify() static method converts a JavaScript value to a JSON string
    const dataJSON = JSON.stringify(notes) 
    //writeFileSync() is a synchronous method. The fs. writeFileSync() creates a new file if the specified file does not exist.
    fs.writeFileSync('notes.json', dataJSON)
}

//Load Notes
const loadNotes = () => {
    try {
        //readFileSync(): read the file and return its content.
        const dataBuffer = fs.readFileSync('notes.json')
        //buffers are objects that store arbitrary binary data
        //toString() method convert the buffer to a string
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        //if notes do not load then return an empty array
        return []
    }
    
}

//module.exports //return value from when you require the file
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}


//FileSystems=  the way in which files are named and where they are placed logically for storage and retrieval.