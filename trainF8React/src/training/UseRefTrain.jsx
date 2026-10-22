import { useRef, useState } from "react";

export default function UseRefTrain(){
    const [count, setCount] = useState(60)
    let timerId = useRef()

    /*
    khi ấn start, nó sẽ tạo ra closure hiện tại với timerId = 1
    và khi nó đến sau 1 giây, nó chạy setCount
    setCount re-render hay là gọi lại component này
    nó sẽ có 1 closure mới tinh và ko liên quan gì cái cũ, timerId cũng mới
    nên nhánh stop sẽ ko bắt được và chỉ bắt được trước khi 1 giây render
    */

    /*
    useRef là 1 hàm nhận vào inital value và chỉ dùng một lần
    sau nó sẽ dùng hàm khác, nó trả về object là {current: value}
    nên muốn lấy giá trị thì phải chọc vào current
    dùng để tham chiếu biến value ra ngoài component, khiến nó
    ko bị lệ thuộc vào closure
    */

    const handleInput = (action) => {
        if(action === 'Start'){
            timerId.current = setInterval(() => {
                setCount(prev => prev - 1)
            }, 3000)
            console.log('start'+ timerId.current)
        }
        else{
            clearInterval(timerId.current)
            console.log('stop'+timerId.current)
        }
    }
    /*
    useRef thường đc dùng để lưu React element, nó có thể lưu các dom element
    <h1 ref={h1Ref}>{count}</h1>
    nó tự gán element này là h1Ref.current và current cũng sẽ tự cập nhật lại
    nếu element thay đổi
    */
   const h1Ref = useRef()
   console.log(h1Ref.current)

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={() => handleInput('Start')}>Start</button>
            <button onClick={() => handleInput('Stop')}>Stop</button>
        </div>
    )
}