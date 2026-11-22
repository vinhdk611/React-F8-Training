import logger from "../reducer/logger"
import reducer, {initialState} from "../reducer/reducer"
import UltimateContext from "./UltimateContext"
import { useReducer } from "react"


function Provider({children}){
    const [state, dispatch] = useReducer(logger(reducer), initialState)

    return (
        <UltimateContext value={[state, dispatch]}>
            {children}
        </UltimateContext>
    )
}

export default Provider