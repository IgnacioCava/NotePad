import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { create, focused} from '../Actions'
import Notes from './notes'
import Editor from './editor'
import styled from "styled-components"

export default function Noteboard(){

    const currentNotes=useSelector(state=>state.currentNotes)
    var focusedNote=useSelector(state=>state.focusedNote)
    const dispatch = useDispatch()

    const [u, U] = useState(0)

    function Update(){
        U(u+1)
    }

    console.log(currentNotes.length)
    console.log(focusedNote)

    // useEffect(()=>{
        
    // }, [focusedNote.content, focusedNote.title])

    // useEffect(()=>{
    //     focusedNote=currentNotes.length
    // },[currentNotes.length])

    return(
        <Notepad className='Notepad'>
                <div id='cloth'/>
                <Notes notes={currentNotes}/>
                {focusedNote.length>0?
                <FullNote>
                    <div>
                        <Editor/>
                    </div>
                </FullNote>
                :null}
                <form onSubmit={(event) => {
                    event.preventDefault()
                    dispatch(create(''))
                    console.log(currentNotes.length)
                    //Update()
                    dispatch(focused(currentNotes.length))
                    }}>
                    <button id='add' type='submit'>Add note</button>
                </form>
        </Notepad>
    )
}

const FullNote = styled.div`
    z-index: 10;
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
    overflow: overlay;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3b3b3b;
    border: 3px solid black;
    border-radius: 15px;
    height: 90vh;
    width: 80vw;
    position: absolute;
    margin: auto;
    margin-top: 5vh;
    right:0;
    left:0;
    justify-content: center
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