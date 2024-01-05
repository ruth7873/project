import { useSelector } from "react-redux"

const Mass = () => {
    const mas = useSelector(state => state.mass)
    return <div>{mas}</div>
}

export default Mass