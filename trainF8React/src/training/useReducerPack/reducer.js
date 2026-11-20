import {ADD, INPUT, DELETE, SHOW_TOTAL} from './constant'

export const initState = {
    job: {
        name: '',
        price: ''
    },
    jobs: [],
    showTotal: false
}

export default function reducer(state, action) {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                job: action.payload
            }
        case ADD:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        case SHOW_TOTAL:
            return {
                ...state,
                showTotal: action.payload
            }

        default:
            throw new Error('KO TỒN TẠI ACTION')
    }
}