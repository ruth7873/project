import { useLocation } from "react-router-dom"

const Login = () => {
    const { state } = useLocation();
    return <div>הרשמה


       <h6>{state.mass} הכמות: {state.count}</h6> 
    </div>
}

export default Login