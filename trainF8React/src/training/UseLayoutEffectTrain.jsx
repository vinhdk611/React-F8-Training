//useLayoutEffect:

import { useState, useEffect, useLayoutEffect } from "react"

/*
1. cập nhật lại state
2. cập nhật dom(mutated)
3. gọi cleanup nếu deps thay đổi (sync)
4. gọi useLayoutEffect callback (sync)
5. render lại ui
*/
export default function UseLayoutEffectTrain() {
    const [count, setCount] = useState(0)

    //chỗ này khi ấn lên số 4 thì handleRun sẽ gọi setCount là 4
    //nó sẽ render lại, useEffect phát hiện count thay đổi nhưng
    //ko chạy callback luôn vì hàm callback chỉ chạy khi dom thay đổi xong
    //thế nên từ 3 -ấn nút--> 4 -callback--> 0
    //--> ui ko đẹp
    // useEffect(() => {
    //     if (count > 3) setCount(0)
    // }, [count])

    /*
    useLayoutEffect:
    1. cập nhật lại state
    2. cập nhật dom(mutated)
    (mutated là đột biến, có 1 object rồi nó 
    sửa property trong object đó)
    3. gọi cleanup nếu deps thay đổi (sync)(<--useEffect thì là bất đồng bộ)
    4. gọi useLayoutEffect callback (sync)(<--useEffect thì là bất đồng bộ)
    5. render lại ui(<--- thay đổi)
    */
    useLayoutEffect(() => {
        if (count > 3) setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}