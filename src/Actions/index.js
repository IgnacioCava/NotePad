export const CREATE = 'CREATE'
export const ERASE = 'ERASE'
export const EDIT= 'EDIT'

export function create(title, content, id){
    return{
        type: CREATE,
        noteTitle: title,
        noteContent: content,
        id
    }
};

export function erase(id){
    return{
        type: ERASE,
        id
    }
};

export function edit(content, id){
    return{
        type: EDIT,
        editedContent: content,
        id
    }
};