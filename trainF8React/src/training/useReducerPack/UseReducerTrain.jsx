import { useMemo, useReducer, useRef, useState } from "react"
import reducer, {initState} from "./reducer"
import { inputAction, addAction, deleteAction, showTotalAction } from "./action"
/*
Đề bài:
- nhập tên công việc và ấn add thì cập nhật list + focus lại vào ô nhập
- có dấu x ở mỗi công việc thì xóa bỏ công việc đó
*/
function UseReducerTrain() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs, showTotal } = state
    const { name, price } = job

    const inputRef = useRef()

    const total = useMemo(() => {

        const result = jobs.reduce((acc, cur) => {

            return acc + parseInt(cur.price)
        }, 0)

        return result
    }, [jobs])

    const handleSubmit = () => {
        dispatch(addAction(job))
        dispatch(inputAction({ name: '', price: '' }))
        inputRef.current.focus()
    }


    return (
        <div style={{ padding: '0 20px' }}>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={name}
                placeholder="Enter name ... "
                onChange={(e) => dispatch(inputAction({ ...job, name: e.target.value }))}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price ... "
                type="number"
                onChange={(e) => dispatch(inputAction({ ...job, price: e.target.value }))}

            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job.name} - {job.price}
                        <span onClick={() => dispatch(deleteAction(index))}>&times;</span>
                    </li>
                ))}
            </ul>
            {showTotal ?
                (
                    <>
                        <button onClick={() => dispatch(showTotalAction(false))}>Hide Total</button>
                        <h3>{total}</h3>
                    </>
                ) :
                (
                    <button onClick={() => dispatch(showTotalAction(true))}>Show Total</button>
                )}

        </div>
    )

}
export default UseReducerTrain