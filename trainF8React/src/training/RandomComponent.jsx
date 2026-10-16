import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums']

function RandomComponent1() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    /*
    dùng cho side effect vì nếu ko dùng thì các công việc side effects sẽ được ưu tiên
    hơn so với sửa dom -> nếu công việc phức tạp thì có thể khiến ui bị đình trệ
    */
    useEffect(() => {
        //chỗ này bị gọi cả khi gõ chữ vì mỗi lần gõ chữ
        //thì lại gọi setTitle -> lại re-render
        //chưa chạy luôn, đợi sau return thêm dom thì mới gọi callback
        console.log('Mounted')
    })

    // để đây thì lúc nào re-render thì vẫn cứ chạy hàm này
    // fetch('')
    // .then(res => res.json)
    // .then(post => {
    //     console.log(post)
    // })

    //chỉ gọi cái này 1 lần duy nhất khi mounted
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(post => {
    //             console.log(post)
    //         })
    // }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type]) //chạy callback khi type thay đổi

    return (
        <div>
            <h1>{width}</h1>
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}>
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
    //thêm cái element từ return này xong thì mới chạy useEffect
}

const sections = ['todos', 'users', 'albums']
function RandomComponent2() {
    const [page, setPage] = useState('todos')
    const [list, setList] = useState([])
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${page}`)
            .then(response => response.json())
            .then(data => {
                setList(data)
            })
            console.log('hello1')
    }, [page])

    //scroll
    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }

        //event phạm vi window, ngoài component
        /*
        khi unmount component, sự kiện vẫn còn trong ram
        chỗ này nếu mounted lại mà lướt xuống thì sẽ bị tạo ra 2 window event
        --> memory leak
        */
       console.log('hello2')
        window.addEventListener('scroll', handleScroll)
        //cleanup function-hàm trả về của useEffect là hàm cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleMovingTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setShowGoToTop(false)
    }
    return (
        <div>
            {sections.map(section => (
                <button
                    key={section}
                    onClick={() => setPage(section)}
                    style={page === section ? {
                        color: '#003f21',
                        backgroundColor: 'yellow'
                    } : {}}
                >{section}
                </button>
            ))}
            <ul>
                {list.map(item => (
                    <li key={item.id}>{JSON.stringify(item)}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                    onClick={handleMovingTop}
                >
                    Go To Top
                </button>
            )}
        </div>
    )
}

function RandomComponent3() {
    //đồng hồ đếm ngược
    const [countDown, setCountDown] = useState(180)

    //vòng lặp vô hạn, mỗi lần chạy là lại gọi setCountDown --> re-render
    // setInterval(() => {
    //     setCountDown(countDown - 1)
    // }, 1000)

    useEffect(() => {
        const timerId = setInterval(() => {
            //dùng callback vì nó sẽ giúp mình lấy state được cập nhật
            //ở trước làm state ở đằng sau
            setCountDown((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )
}

//cleanup function luôn đc gọi trước khi callback trừ lần mounted đầu
//là để clean phần callback trước(hàm callback ở đây là hàm của useEffect nhé)
function RandomComponent4() {
    const [pic, setPic] = useState()

    useEffect(() => {
        return () => {
            //dùng để tránh mounted đầu pic là undefined
            //URL.revokeObjectURL(pic.preview): xóa bỏ đối tượng pic là url trong ram
            pic && URL.revokeObjectURL(pic.preview)
        }
    }, [pic])
    const handlePreviewAvt = (e) => {
        //lấy đối tượng là file ảnh
        const file = e.target.files[0]
        //add thêm thuộc tính preview là url của nó để lát in ra src
        //URL.createObjectURL(file): lưu trữ url của đối tượng file trong ram
        file.preview = URL.createObjectURL(file)

        setPic(file)
    }
    return (
        <div>
            <input
            type="file"
            onChange={handlePreviewAvt}
            >
            </input>
            {pic && (
                <img src={pic.preview} width="80%"/>
            )}
        </div>
    )
}
const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì?'
    },
    {
        id: 2,
        name: 'SPA, MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]
export default function RandomComponent() {
    const [lessionId, setLessionId] = useState(1)
    //mỗi khi lessionId thay đổi, useEffect sẽ được gọi
    useEffect(() => {
        const handleComment = (detail) => {
            console.log(detail)
        }
        //chỉ lấy comment của kênh được chọn
        window.addEventListener(`lesson-${lessionId}`, handleComment)
        //cần phải dọn comment trước để tránh dò rỉ bộ nhớ
        return () => {
            window.removeEventListener(`lesson-${lessionId}`, handleComment)
        }
    }, [lessionId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li 
                    key={lessionId}
                    style={{
                        color: lessionId === lesson.id ?
                        '#333' :
                        'rgb(255, 43, 60)'
                    }}
                    onClick={() => setLessionId(lessionId.id)}
                    >{lesson}</li>
                ))}
            </ul>
        </div>
    )
}
