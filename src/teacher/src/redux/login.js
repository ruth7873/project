import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    // const submit = (data) => {
    //     dispatch({ type: "ADD_USER", newUser: data })
    // }

    return <>

        <input value={name} onChange={({ target }) => setName(target.value)} />
        <input value={phone} onChange={({ target }) => setPhone(target.value)} />
        <input value={Email} onChange={({ target }) => setEmail(target.value)} />
        <button onClick={() => dispatch({ type: "ADD_USER", newUser: { name, phone, Email } })}>send</button>
    </>
}

export default Login;