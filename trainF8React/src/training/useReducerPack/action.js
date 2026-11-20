import {ADD, INPUT, DELETE, SHOW_TOTAL} from './constant'
export const inputAction = (inputVal) => {
    return {
        type: INPUT,
        payload: inputVal
    }
}

export const addAction = (job) => {
    return {
        type: ADD,
        payload: job
    }
}

export const deleteAction = (index) => {
    return {
        type: DELETE,
        payload: index
    }
}

export const showTotalAction = (showTotal) => {
    return {
        type: SHOW_TOTAL,
        payload: showTotal
    }
}