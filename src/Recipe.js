//import Test_redux_fieldArray from './Test_redux_fieldArray'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux/es/hooks/useSelector"
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'
export default (props) => {

    const user = useSelector(state => state.user.user);
    // const buies = useSelector(state => state.buy.buies);

    const dispatch = useDispatch();
    function AddToBuy(i) {
        // let prod=buies.find(n=>i==n.Name);
        // if(prod===null)
        {
            console.log("add buy", i);
            dispatch({ type: "ADD_BUY", data: { Name: i, user: user.Id } })
        }
        // else  { dispatch({type:"EDIT_BUY",data:{Name:i,user:user.Id,Count:prod.Count}})}
    }

    return <>
        <Card>
            <p>{props.props.Name}</p>
            <p>Category: {props.props.CategoryId}</p>
            <p>Description: {props.props.Description}</p>
            <p>Duration: {props.props.Duration}</p>
            <p>Difficulty: {props.props.Difficulty}</p>
            Ingrident: {props.props.Ingrident.map((x, i) =>
                <div key={i}>
                    <div>{x.Name} {x.Count} {x.Type}</div>
                    <button onClick={() => AddToBuy(x.Name)}>buy</button>
                </div>)}
            Instructions: {props.props.Instructions.map((x, i) =>
                <div key={i}>
                    {x.Inst}</div>)}

            <img src={props.props.Img}></img>

        </Card>
    </>
}