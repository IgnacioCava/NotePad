import { CREATE, ERASE, EDIT, FOCUSED, UNFOCUS } from '../Actions';

const initialState = {
    currentNotes: [],
    focusedNote: []
}

var id=0

export default function reducer(state=initialState, action){
    switch (action.type) {
        case CREATE:
            return {
                ...state, currentNotes: state.currentNotes.concat({
                    title:action.noteTitle,
                    content:action.noteContent,
                    id:id++
                })
            }
            
        case ERASE:
            return {...state, currentNotes: state.currentNotes.filter((notes)=>notes.id!==action.id)}

        case EDIT:
            return {...state, ...state.currentNotes.map((notes)=>{
                if(notes.id===action.id){
                    notes.content=action.editedContent
                }
            })}

        case FOCUSED:
            return{...state, focusedNote: (state.currentNotes.filter((notes)=>notes.id==action.id))}

        case UNFOCUS:
            return{...state, focusedNote: []}

        default:
            return state;
    }
}
