import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { erase, edit } from '../Actions'
import styled from "styled-components"

export default function Notes({notes}){

    const [update, Updater] = useState(0)
    const [newNoteContent, setNoteContent] = useState('')

    function Update(){
        Updater(update+1)
        if(update>0) Updater(0)
    }

    const dispatch = useDispatch()
    
    var key=0
    if(notes){   
        return(
            <AllNotes>
                {notes.map(note=> 
                    <Note key={key++}>
                        <p>Título: {note.title}</p>
                        <hr/>
                        <p>{note.content}</p>
                        
                            <form onSubmit={(event) => {
                                event.preventDefault()
                                dispatch(edit(newNoteContent, note.id))
                                setNoteContent('')
                                }}>
                                <div style={{display:'flex', flexWrap:'wrap'}}>
                                    <input type='submit' value='Editar'/>
                                    <input type='text' style={{width:'100%', boxSizing:'border-box'}} placeholder='Nuevo contenido' size='15' onChange={(create)=>setNoteContent(create.target.value)}/>
                                    <input type='button' value='Borrar' onClick={()=>dispatch(erase(note.id))}/>
                                </div>
                            </form>
                            
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