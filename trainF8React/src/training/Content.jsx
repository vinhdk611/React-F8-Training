import { memo } from "react"

//memo kiểm tra xem lần re-render đó có khiến component này có thay đổi prop hay ko
//nếu có thì sẽ áp dụng re-render như thường, nếu ko thì ko cho re-render 
function Content(){
    console.log("Re-render")

    return (
        <h2>Hello ae F8</h2>
    )
}
//export default Content
export default memo(Content)