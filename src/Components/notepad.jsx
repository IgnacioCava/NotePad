import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { create, focused, unfocus } from '../Actions'
import Notes from './notes'
import Editor from './editor'
import styled from "styled-components"
import plus from '../plussign.png'

export default function Noteboard(){

    const [update, Updater] = useState(0)
    const [newNoteTitle, setNoteTitle] = useState('')
    const [newNoteContent, setNoteContent] = useState('')

    function Update(){
        Updater(update+1)
        if(update>0) Updater(0)
    }

    const currentNotes=useSelector(state=>state.currentNotes)
    const focusedNote=useSelector(state=>state.focusedNote)
    const dispatch = useDispatch()

    console.log(focusedNote)

    return(
        <Notepad>
                <form onSubmit={(event) => {
                    var options = document.getElementById('options').value
                    console.log(options)
                    
                    event.preventDefault()
                    dispatch(create(newNoteTitle, newNoteContent))}}>

                    <input type='submit' value='Agregar'/>
                    <select id='options'>
                        <option value="Nota">Nota</option>
                        <option value="Lista">Lista</option>
                    </select>
                    <input type='text' placeholder="Título" onChange={(create)=>setNoteTitle(create.target.value)}/>
                    <input type='text' placeholder="Contenido" onChange={(create)=>setNoteContent(create.target.value)}/>

                    
                </form>
                <Notes notes={currentNotes}/>
                {focusedNote.length?
                <FullNote>
                    <div>
                        {/* <p>{focusedNote[0].title} {focusedNote[0].id}</p> */}
                        
                        <Editor/>
                        {/* <p>{focusedNote[0].content}</p> */}
                        
                    </div>
                    
                </FullNote>
                :null}
        </Notepad>
    )
}

const FullNote = styled.div`
    position:absolute;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #49494986;
    > div{
        /* >div{
            width:50%;
            background-color: white;
        } */
        width: 90%;
        height: 90%;
        background-image: url('./paper.jpg');
    }
`

const Notepad = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: 3px solid black;
    border-radius: 15px;
    height: 70vh;
    width: 80vw;
    position: absolute;
    margin: auto;
    margin-top: 10vh;
    right:0;
    left:0;
`

// var closeTab=function(e){
    //     var add=document.getElementsByClassName('CreateTab')[0]
    //     if(e.target!==add) {
    //         document.querySelector('.ExpandList').style.opacity='0'
    //         document.querySelector('.ExpandList').style.height='0%'
    //     }
    //     else {
    //         document.querySelector('.ExpandList').style.opacity='1'
    //         document.querySelector('.ExpandList').style.height='3rem'
    //     }
    // }
   
    //document.addEventListener('click',closeTab,false)