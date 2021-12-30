export const CREATE = 'CREATE'
export const ERASE = 'ERASE'
export const EDIT = 'EDIT'
export const FOCUSED = 'FOCUSED'
export const UNFOCUS = 'UNFOCUS'

export function create(title, content, id){
    return{
        type: CREATE,
        noteTitle: title,
        noteContent: content,
        id,
    }
};

export function erase(id){
    return{
        type: ERASE,
        id
    }
};

export function edit(content, title, id){
    return{
        type: EDIT,
        editedContent: content,
        editedTitle: title,
        id
    }
};

export function focused(id){
    return{
        type: FOCUSED,
        id
    }
};

export function unfocus(){
    return{
        type: UNFOCUS
    }
}