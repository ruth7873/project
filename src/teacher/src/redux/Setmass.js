import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionsName from './store/action'

const Setmass = () => {
    const dispatch = useDispatch();

    const [mass, setMass] = useState('');



    return <>
        <input value={mass} onChange={({ target }) => setMass(target.value)} />
        <button onClick={() => dispatch({ type: actionsName.FAILED, mass })}>send</button>
    </>
}

export default Setmass;