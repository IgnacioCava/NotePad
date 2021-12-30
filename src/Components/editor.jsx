import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { erase, edit, focused, unfocus } from '../Actions'
import styled from "styled-components"
import './greyback.png'
import './backgrounds.css'

export default function Editor(){

    const focusedNote=useSelector(state=>state.focusedNote[0])

    const [newNoteContent, setNoteContent] = useState(focusedNote.content)
    const [newNoteTitle, setNoteTitle] = useState(focusedNote.title)

    const dispatch = useDispatch()

    console.log(newNoteContent)

    useEffect(()=>{
        var editable=document.getElementById('edit')
        if(editable){
            if((newNoteContent===focusedNote.content)&&(newNoteTitle===focusedNote.title)) {
                editable.disabled=true
                editable.style.backgroundColor='unset'
            }
            else {editable.disabled=false
                editable.style.backgroundColor='rgb(107, 191, 219)'
            }
        }
    })

    useEffect(()=>{
        
    }, [focusedNote.content, focusedNote.title])

    return(
        <form style={{height:'100%'}} onSubmit={(event) => {
            event.preventDefault()
            dispatch(edit(newNoteContent, newNoteTitle, focusedNote.id))
            dispatch(focused(focusedNote.id))
        }}>

            <StyledEditor className="inputAreaBg">
                
                <InputTitle className='inputArea' name='InputArea' value={newNoteTitle} 
                onChange={(create)=>setNoteTitle(create.target.value)}/>

                <InputContent className='inputArea' name='InputArea' value={newNoteContent} 
                onChange={(create)=>setNoteContent(create.target.value)}/>
                
                <Move>
                    <input type='button' className='input' id='back' onClick={()=>{dispatch(unfocus())}}/>       
                    <input type='submit' className='input' id='edit' value='          '/>
                    
                    <input type='button' className='input' id='erase' onClick={()=>{
                        dispatch(unfocus())
                        dispatch(erase(focusedNote.id))
                        }}/>
                </Move>

            </StyledEditor>
        </form>
        
    )
}

const Move = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    right:0;
    background-color: transparent;
    > input{
        height: 100%;
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        background-color:#ffffff;
        transition: .3s;
    }
    > #edit{
        background-color:#ffffff;
    }
    > #edit:disabled{
        background-color:#ffffff99;
        transition: .5s;
    }
`
const InputTitle = styled.textarea`
width:100%;
height: 20%;
overflow: auto;
resize: none;
padding: 20px;
font-size:large;
font-weight: bold;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 10px;
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
    border-radius: 4px;
}
`

const InputContent = styled.textarea`
    width:100%;
    height: 100%;
    overflow: auto;
    resize: none;
    padding: 20px;
    font-size:medium;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 10px 10px 0 0;
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

const StyledEditor = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`