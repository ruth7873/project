import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector"

export default () => {
    let buies;
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        buies = dispatch({type:"SET_BUY",data:user.Id});},[])
    return <>
        shopping

        {buies?.map((x, id) => {
            <div key={id}>
            <div>{x.Name}</div>
            <div>{x.Count}</div>
            <button onClick={() => { dispatch({ type: "EDIT_BUY", data: { Name: x.Name, Count: x.Count + 1 } }) }}>+</button>
            <button>-</button>
            <button>I had</button>



        </div>
        })}
    </>
}