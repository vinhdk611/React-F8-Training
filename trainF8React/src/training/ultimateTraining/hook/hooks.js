import { useContext } from "react"
import UltimateContext from "../myContext/UltimateContext"

export const useStore = () => {
    const [state, dispatch] = useContext(UltimateContext)
    return [state, dispatch]
}
