import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { erase, edit, focused, unfocus } from '../Actions'
import styled from "styled-components"
import './greyback.png'
import './backgrounds.css'

export default function Editor(){

    const focusedNote=useSelector(state=>state.focusedNote[0])

    const [newNoteContent, setNoteContent] = useState(focusedNote.content)
    const [update, Updater] = useState(0)

    const dispatch = useDispatch()

    console.log(newNoteContent)

    function Update(){
        Updater(update+1)
        if(update>0) Updater(0)
    }

    useEffect(()=>{
        document.getElementById(focusedNote.content)
    }, [focusedNote.content])

    return(
        <form style={{height:'100%'}} onSubmit={(event) => {
            event.preventDefault()
            dispatch(edit(newNoteContent, focusedNote.id))
            dispatch(focused(focusedNote.id))
        }}>

            <StyledEditor>
                
                <InputArea name='InputArea' value={newNoteContent} 
                onChange={(create)=>setNoteContent(create.target.value)}/>
                
                <Move>
                    <input type='button' className='input' id='back' onClick={()=>{dispatch(unfocus())}}/>       
                    <input type='submit' className='input' id='edit' value='Editar'/>
                    <input type='button' className='input' id='erase' value='Borrar' onClick={()=>{
                        dispatch(erase(focusedNote.id))
                        dispatch(unfocus())
                        }}/>
                </Move>

            </StyledEditor>
        </form>
    )
}

const Move = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    right:0;
    border-radius: 100%;
    > input{
        height: 100%;
        width: 100%;
        border: 1px solid #ccc;
        background-color:#ffffff;
    }
    @media (max-width:800px) {
        flex-direction: row;
        > input{
            height: 40px;
            
        }
    }
`

const StyledEditor = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    @media (max-width:800px) {
        flex-direction: column;
    }
`

const InputArea = styled.textarea`
    width:100%;
    height: 100%;
    overflow: auto;
    resize: none;
    padding: 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-right:0px;
    border-radius: 4px 0 0 4px;
    outline: none;
    background-color: #ffffff99;
    transition: .3s;
    &:hover{
        background-color: #ffffff;
    }
    &:focus{
        background-color: #ffffff;
    }
    @media (max-width:800px) {
        border: 2px solid #ccc;
        border-bottom:0px;
        border-radius: 4px 4px 0 0;
    }
`