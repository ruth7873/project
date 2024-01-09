import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector"
import axios from 'axios';


export default () => {
    const [buies, setBuies] = useState([]);
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("in use effect", user.Id);
        axios.get(`http://localhost:8080/api/bay/${user.Id}`)
            .then((res) => { console.log(res.data); setBuies(res.data); })
            .catch((error) => console.error(error));
    }, [])
    console.log("afhjhh", buies);
    function deleteProd(x) {
        console.log("delete buy", x);
        dispatch({ type: "DELETE_BUY", data: { Name: x.Name, user: user.Id, Id: x.Id } })
    }
    function editAdd(x, count) {
        console.log("+/- buy", x);
        if (x.Count + count == 0)
            deleteProd(x);
        else
            dispatch({ type: "EDIT_BUY", data: { Name: x.Name, user: user.Id, Count: count } })
      }

    return <>
        shopping

        {buies?.map((x, id) => (
            <div key={id}>
                <div>{x.Name}</div>
                <div>{x.Count}</div>
                <button onClick={() => editAdd(x, 1)}>+</button>
                <button onClick={() => editAdd(x, -1)}>-</button>
                <button onClick={() => deleteProd(x)}>I had</button>
            </div>
        ))}
    </>
}