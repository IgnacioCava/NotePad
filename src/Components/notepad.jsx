import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { create } from '../Actions'
import Notes from './notes'
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
    const dispatch = useDispatch()

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
        </Notepad>
    )
}

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