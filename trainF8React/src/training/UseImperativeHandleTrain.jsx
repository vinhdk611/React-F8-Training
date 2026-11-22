import { useRef } from "react"
import Video from "./video/Video"
function UseImperativeHandleTrain(){
    const videoRef = useRef()

    const handlePlay = () => {
        videoRef.current.play()
        console.log(videoRef)
    }

    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <div>
            {/* truyền props là ref cho function component
            nhưng function component mặc định là ko truyền ref 
            được từ con <--> cha qua props thông thường
            videoRef sẽ ko lấy được

            phải dùng forwardRef - HOC dùng để chuyển tiếp ref
             */}
            <Video ref={videoRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default UseImperativeHandleTrain