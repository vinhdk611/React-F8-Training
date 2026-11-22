import { INPUT, ADD, DELETE, SHOW_TOTAL } from "./constaint"
const initialState = {
    person: {
        fullName: '',
        iq: '', 
        symptom: '', 
        procedure: '', 
        salary: ''
    },
    people: [],
    showTotal: false
}

function reducer(state, action) {
    switch(action.type){
        case INPUT:
            return {
                ...state,
                person: action.payload
            }
        case ADD:
            return {
                ...state,
                people: [...state.people, action.payload]
            }
        case DELETE:
            const newPeople = [...state.people]
            newPeople.splice(action.payload, 1)
            return {
                ...state,
                people: newPeople
            }
        case SHOW_TOTAL:
            return {
                ...state,
                showTotal: action.payload
            }
        default: throw new Error("Action không thỏa mãn !!")
    }
}

const action = (type, payload) => {
    return {
        type: type,
        payload: payload
    }
}

export { action, initialState }
export default reducer
