
const notes = require('./notes')
const chalk = require('chalk')
//const msg = note();
const yargs = require('yargs');

//customise yargs version
yargs.version('1.1.0')

//add,remove,read,list
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string',
        },
        body:{
            describe:'note content',
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
});
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string',
        }
    },
    handler (argv){
        notes.removeNotes(argv.title)
       // console.log('remove')
    }
});


 yargs.command({
    command:'list',
    handler(){
        notes.listNotes();
    }
})


yargs.command({
    command:'read',
    describe:'read command',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
      //  console.log('read')
     // console.log(argv.title);
        notes.readNote(argv.title);
    }
});



yargs.parse()
