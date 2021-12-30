import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { create, focused} from '../Actions'
import Notes from './notes'
import Editor from './editor'
import styled from "styled-components"

export default function Noteboard(){

    const currentNotes=useSelector(state=>state.currentNotes)
    var focusedNote=useSelector(state=>state.focusedNote)
    const dispatch = useDispatch()

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