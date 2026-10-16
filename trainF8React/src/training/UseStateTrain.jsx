import { useState } from "react";

function UseStateTraining1() {
    //giá trị khởi tạo là 1
    const [counter, setCounter] = useState(1);
    //hàm xử lý và sẽ thực thi việc tăng counter = 1
    /*
    thực ra khi gọi hàm setCounter thì 
    react sẽ gọi lại hàm UseStateTraining vơi useState có initState là 2
    chạy setCounter xong thì nó thành 2 và trở thành initState cho lần tiếp theo
    => component sẽ re-render sau khi setState
    thế nên khi vào lại thì counter mới được cập nhật bằng 2
    */
    const handleIncrease = () => {
        setCounter(counter + 1)
    }
    return (
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

function UseStateTraining2() {
    const [counter, setCounter] = useState(1);

    const handleIncrease = () => {
        setCounter(counter + 1)
        setCounter(counter + 1)
        setCounter(counter + 1)
        //mặc dù gọi nhiều thì nó vẫn chỉ là 2
        /*
        react nó sẽ gom tất cả hàm thành ngăn xếp 
        và sẽ chạy hàng loạt rồi gọi component UseStateTraining 1 lần duy nhất

        --> dùng callback với setState
        */
    }
    return (
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

function UseStateTraining3() {
    const [counter, setCounter] = useState(1);

    const handleIncrease = () => {
        setCounter((prevState) => {
            return prevState + 1
        })
        setCounter((prevState) => {
            return prevState + 1
        })
        setCounter((prevState) => {
            return prevState + 1
        })
        setCounter((prevState) => {
            return prevState + 1
        })
        /*
        tưởng tượng hàm setState sẽ như này:
        function setCounter(valueOrFunction) {
           if (typeof valueOrFunction === 'function') {
                currentState = valueOrFunction(currentState);

            } else {
                currentState = valueOrFunction;
            }
        }
            khi có nhiều hàm set, nó sẽ gộp lại thành một hàm set lớn 
            gồm các phần bên trong được gộp lại
            đây là lý do vì sao callback có thể giúp ta thay đổi state khi
            viết nhiều lần

            hay nói cách khác: nếu dùng callback cho initState thì
            initValue sẽ được gán bằng giá trị trả về của hàm
        */
    }
    return (
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

function UseStateTraining4() {
    const [info, setInfo] = useState(
        {
            userName: "vinh",
            password: "123",
            email: "vinh@gmail.com",
            balance: 10,
            hasGirlFriend: false
        }
    );

    const handleSubmit = () => {
        setInfo((prev) => {
            const check = prev.hasGirlFriend && (prev.balance % 2 === 0)
            let checkStatus = check ? 'Happy' : 'Sad'

            return {
                ...prev,
                status: checkStatus,
                balance: prev.balance + 1,
                hasGirlFriend: true
            }
        })
    }
    return (
        <div className="App">
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleSubmit}>Increase</button>
        </div>
    )
}
const gifts = ['CPU', 'RAM', 'RBG']

function UseStateTraining5() {
    const [gift, setGift] = useState('Chưa có phần thưởng');

    const handleSubmit = () => {
        setGift(() => {
            var index = Math.floor(Math.random() * gifts.length)
            console.log(index)
            return gifts[index]
        })
    }
    return (
        <div className="App">
            <h1>{gift}</h1>
            <button onClick={handleSubmit}>Lấy thưởng</button>
        </div>
    )
}

//one way binding: ràng buộc 1 chiều: 
//chiều 1: state -> ui(cốt lõi của React, state thay đổi thì ui thay đổi theo re-render)
//chiều 2: ui -> state(thủ công gán hàm event(onChange, onClick, ...) với setState để thay đổi state --> React chỉ hỗ trợ 1 way binding)
//two way binding:
function UseStateTraining6() {
    const [name, setName] = useState('');

    return (
        //chiều 1: giao diện thay đổi ký tự(onChange), state thay đổi theo
        //chiều 2: state cập nhật data(onClick), giao diện cập nhật theo(value={})
        <div style={{ padding: 32 }}>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setName('Nguyen Van B')}>Change</button>
        </div>
    )
}

const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'JavaScript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]

function UseStateTraining7() {
    //2 ways binding: 
    //chiều 1: chọn checkbox, giao diện thay đổi và state checked thay đổi(onChange)
    //chiều 2: state checked giống với course.id nào thì ui radio của course đó mới được sáng
    const [checked, setChecked] = useState();
    console.log(checked)
    const handleSubmit = () =>{
        console.log({id: checked})
    }

    return (
        <div style={{ padding: 32 }}>
            {courses.map(course => (
                <div key={course.id}>
                    <input 
                    type="radio"
                    checked={checked === course.id}
                    onChange={() => setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

function UseStateTraining8() {
    //2 ways binding: 
    //chiều 1: chọn checkbox, giao diện thay đổi và state checked thay đổi(onChange)
    //chiều 2: state checked chứa course.id nào thì ui check của course đó mới được tick
    //checked lưu list các id là những ô checkbox có quyền tick
    const [checked, setChecked] = useState([]);
    console.log(checked)
    const handleSubmit = () =>{
        console.log({id: checked})
    }

    const handleChecked = (id) =>{
        //
        setChecked(prev => {
            const isChecked = prev.includes(id)
            if(isChecked) {
                return prev.filter((item) => item !== id)
            }
            else{
                return [...prev, id]
            }
        }
        
    )

    }

    return (
        <div style={{ padding: 32 }}>
            {courses.map(course => (
                <div key={course.id}>
                    <input 
                    type="checkbox"
                    checked={checked.includes(course.id)}
                    onChange={() => handleChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default function UseStateTraining() {   

    const [job, setJob] = useState('');

    return (
        <div style={{ padding: 32 }}>
            <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleDelete}>Delete</button>
            <ul>
                {jobs.map(job => (
                    <li>{job}</li>
                ))}
            </ul>
        </div>
    )
}