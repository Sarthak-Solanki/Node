const fs = require('fs')
const chalk = require('chalk')
const addNote = (title, body) => {
  const notes = loadNotes()
 // const dublicateNotes = notes.filter( (note) =>note.title === title)
 const dublicateNote = notes.find((note)=>note.title===title)
 debugger

  if (!dublicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
  } else {
    console.log('note titile taken')
  }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    // one way of doing it
    // notes.filter(function(note){
    //     console.log(note);
    //     if(note.title===title){
    //         //note.pop()
    //         console.log(note.title)
    //     }
    //     else{
    //     saveNotes(note)
    // }
    // });
    // ANOTHER WAY OF DOING IT
    const notesToKeep = notes.filter(note => 
        note.title !== title
    )
    if (notes.length === notesToKeep.length) {
      console.log(chalk.bgRed('no note FOUND'))
    } else {
      saveNotes(notesToKeep)
    }
  }
  
const listNotes = ()=>{
    console.log(chalk.bgGreen('printing notes'));
    console.log("in liust")
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(element.title+" "+element.body)
    });
}
  
const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJson)
}

const readNote= (title)=>{
    const note = loadNotes();
    const noteFound = note.find((note)=> note.title===title
    );
    if(noteFound){
        console.log(chalk.bgGreen(title))
        console.log(noteFound.body)
    }
    else{
        console.log(chalk.bgRed('No note found'));
        
    }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    const notes = JSON.parse(dataJson)
    return notes
  } catch (e) {
    console.log('file not present')
    return []
  }
}

module.exports = {
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes:listNotes,
  readNote:readNote,
}
