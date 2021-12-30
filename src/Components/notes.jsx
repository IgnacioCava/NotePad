import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { erase, edit, focused, unfocus } from '../Actions'
import styled from "styled-components"

export default function Notes({notes}){

    const [update, Updater] = useState(0)
    const [newNoteContent, setNoteContent] = useState('')

    function Update(){
        Updater(update+1)
        if(update>0) Updater(0)
    }

    const focusedNote=useSelector(state=>state.focusedNote)
    //console.log(focusedNote)

    const dispatch = useDispatch()
    
    var key=0
    if(notes){   
        return(
            <AllNotes>
                {notes.map(note=> 
                    <Note key={key++} onClick={()=>{
                        if(focusedNote.length>0&&focusedNote[0].id===note.id) dispatch(unfocus())
                        else dispatch(focused(note.id))
                    }}>
                        <p>Título: {note.title}</p>
                        <hr/>
                        <p>{note.content}</p>   
                    </Note>
                )}
            </AllNotes>
        )
    }
}

const Note = styled.div`
    background-color:grey;
    position: relative;
    margin: 10px;
`

const AllNotes = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    position:relative;
    justify-content: center;
    width: 90%;
    overflow: auto;
`