import React, { Component } from 'react';
import "./NoteContent.css";

class NoteContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Content: ""
        }
    }

    render() {
        return( 
        <div className="col s8">
        <textarea id="textarea1" placeholder="Start Writing!">         
        </textarea>
        </div>
        );
    }
}


export default NoteContent;