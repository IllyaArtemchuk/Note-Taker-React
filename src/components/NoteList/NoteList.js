import React, { Component } from 'react';
import NoteStripe from "./NoteStripe";

class NoteList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        }

        this.notesRef = this.props.firebase.database().ref('notes')
    }

    componentDidMount() {
        this.notesRef.on("child_added", snapshot => {
            const note = snapshot.val();
            note.key = snapshot.key;
            this.setState({ notes: this.state.notes.concat(note) })
        })
        console.log("this is notes", this.state.notes)
    }

    renderNotesList() {
        console.log(this.state.notes)
        if(this.state.notes[0] === undefined) {return};

        {return(this.state.notes.map((note)=> 
            <NoteStripe  key={note.key} title={note.title} />
        ))
    }
}

    render() {
      return (
        <div className="col s4 notelist">
         <table className="teal-text">
             <thead>
             </thead>
             <tbody>
                 {this.renderNotesList()}
             </tbody>
         </table>
        </div>
      );
    }
  }
  
  export default NoteList;