import { useContext } from "react"
import Content from "./Content"
import { ThemeProvider, ThemeContext } from "./ThemeContext"

function Display(){
    const context = useContext(ThemeContext)
    return (
        <div style={{ padding: 20 }}>
                <button onClick={context.handleChange}>Toggle theme</button>
                <Content />
            </div>
    )
}
function UseContextTrain() {
    //const context = useContext(ThemeContext)
    //ko đc gọi useContext bên ngoài context provider, chỉ đc gọi bên trong
    return (
        // <ThemeProvider>
        //     <div style={{ padding: 20 }}>
        //         <button onClick={context.handleChange}>Toggle theme</button>
        //         <Content />
        //     </div>
        // </ThemeProvider>
        <ThemeProvider>
            <Display/>
        </ThemeProvider>
    )
}

export default UseContextTrain