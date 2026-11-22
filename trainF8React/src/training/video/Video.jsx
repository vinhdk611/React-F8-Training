import video1 from './myVideo.mp4';
import { forwardRef, useImperativeHandle, useRef } from "react"

function Video(props, ref) {
    //ref là object hay là gói đựng các phương thức cần dùng của cha
    //phải dùng useRef vì ref ở đây là object của forwardRef, ko liên quan
    //đến DOM nên ko dùng như 1 ref ở đây, phải tạo useRef
    const videoRef = useRef()

    //sử dụng useImperativeHandle để cho truy cập
    //chỉ những thuộc tính cần dùng của ref để đảm bảo tính đóng gói
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    
    return (
        <video
            ref={videoRef}
            src={video1}
            width="300"
        />
    );
}
//khi gọi component video thì nó sẽ qua thằng component forwardRef trước
//forwardRef có Video bên trong và sẽ xử lý và truyền ref vào Video
//khi có forwardRef bọc thì component có 2 đối số là props thông thường
//và ref(cái mà forwardRef truyền cho mình)
export default forwardRef(Video);