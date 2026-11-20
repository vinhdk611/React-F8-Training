import { useState, useCallback } from "react"
import Content from "./Content"

function UseCallbackReactMemoTrain(){
    const [count, setCount] = useState(0)

    //dependency trống, nó sẽ trả về hàm cũ với địa chỉ cũ thay vì hàm mới như mỗi lần render
    //nên so sánh === sẽ đúng
    //nếu như cần dùng hàm mới dựa trên data mới như đối số của hàm props thì sẽ thêm vào mảng dependency
    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return (
        <div style={{ padding: '10px 32px' }}>
            <Content/>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Click me!</button>
        </div>
    )
}

export default UseCallbackReactMemoTrain