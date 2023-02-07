const chalk = require('chalk')// load in npm 'chalk' library
const yargs = require('yargs')//load in the yargs library
const notes = require('./notes.js') // module // (./) *relative path to the file we are trying to load



//customize yargs version
yargs.version('1.1.0')


//add,remove, read, list

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title' ,
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        // setup command to take a required "--title" option
        title: { 
            decribe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//create List command
yargs.command({
    command: 'list',
    describe: 'List your notes!',
    handler() {
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note!',
    builder: {
        title: {
            describe: 'Read a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse() // goes through the process of parsing the arguments with all of the configuration details provided with yargs command calls up above

// console.log(yargs.argv) //parsing our options

