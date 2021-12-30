import { useDispatch, useSelector } from 'react-redux'
import { focused, unfocus } from '../Actions'
import styled from "styled-components"

export default function Notes({notes}){

    const focusedNote=useSelector(state=>state.focusedNote)

    const dispatch = useDispatch()
    
    var key=0
    if(notes){   
        return(
            <AllNotes>
                {notes.map(note=> 
                    <Note className='Note' key={key++} onClick={()=>{
                        if(focusedNote.length>0&&focusedNote[0].id===note.id) dispatch(unfocus())
                        else dispatch(focused(note.id))
                    }}>
                        <p className='title' style={{fontSize:'medium', fontWeight:'bold'}}>{note.title}</p>
                        <hr/>
                        <p className='content'>{note.content}</p>
   
                    </Note>
                )}
            </AllNotes>
        )
    }
}

const Note = styled.div`
    background-color:white;
    position: relative;
    margin: 10px;
    height: 100%;
    width: fit-content;
    min-height:10vh;
    max-height: 20vh;
    max-width: 20vw;
    min-width: 7vw;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 3px 5px 0px rgb(0 0 0 / 40%);

    > .title{
        margin: 0;
        direction:rtl;
        height: 25%;
        text-align: left;
        white-space: break-spaces;
        word-break:break-word;
        overflow:auto;
        width: fit-content;
        padding-left:2px;
        text-align:left;
        &::-webkit-scrollbar{
            background-color: transparent;
            width: 5px;
        }
        
        &::-webkit-scrollbar-thumb{
            background-color: #5c5cdb;
            border-radius: 10px;
        }
    }
    > .content{
        margin-top: 0;
        direction:rtl;
        max-height: 60%;
        text-align: left;
        white-space: break-spaces;
        word-break:break-word;
        overflow:auto;
        width: available;
        padding-left:2px;

        &::-webkit-scrollbar{
            
            background-color: transparent;
            width: 5px;
            
        }
        
        &::-webkit-scrollbar-thumb{
            direction:ltr;
            background-color: #5c5cdb;
            border-radius: 10px;
            
        }
    }
    
    &::after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        border-width: 16px 16px 0 0;
        border-style: solid;
        border-color: #658E15;
        border-radius: 50%;
        -webkit-box-shadow: -2px -9px 12px 1px rgb(0 0 0), -3px -3px 2px 1px rgb(0 0 0 / 10%);
        -moz-box-shadow: -2px -9px 12px 1px rgb(0 0 0), -3px -3px 2px 1px rgb(0 0 0 / 10%);
        box-shadow: -2px -9px 12px 1px rgb(0 0 0), -3px -3px 2px 1px rgb(0 0 0 / 10%);
        transform:rotate(135deg)
    }
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border-width: 0 0 16px 16px ;
        border-style: solid;
        border-color:  #ddd #7d8fad;
        -webkit-box-shadow: -2px -9px 12px 1px rgb(0 0 0), -3px -3px 2px 1px rgb(0 0 0 / 10%);
        -moz-box-shadow: -2px -9px 12px 1px rgb(0 0 0), -3px -3px 2px 1px rgb(0 0 0 / 10%);
        box-shadow: 3px 2px 2px 0px rgb(0 0 0 / 30%), 1px 1px 1px 0.1px rgb(0 0 0 / 10%);
    }
    @media (max-width:800px) {
        min-width: 12vw;
        max-width: 25vw;
    }
`
 
const AllNotes = styled.div`
    
    &::-webkit-scrollbar{
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #5c5cdb;
        border-radius: 10px;
    }
    align-items:center;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    position:relative;
    justify-content: center;
    align-content: flex-start;
    width: available;
    margin:10px;
    overflow: auto;
    width: 90%;
    height: 90%;
`