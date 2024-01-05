import { useState } from "react"
import { useDispatch } from "react-redux";
import * as Actions from './store/action'


const Login = () => {
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');

    return <div>
        <input value={userName} onChange={({ target }) => setUserName(target.value)} />
        <button onClick={() => dispatch({ type: Actions.SET_USER, user: userName })}>עדכון במערכת</button>
    </div>
}

export default Login