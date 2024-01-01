//import Test_redux_fieldArray from './Test_redux_fieldArray'
import 'semantic-ui-css/semantic.min.css'
import {Card} from 'semantic-ui-react'
export default (props)=>{

    return <>
    <Card>
    <p>{props.props.Name}</p>
    <p>Category: {props.props.CategoryId}</p>
    <p>Description: {props.props.Description}</p>
    <p>Duration: {props.props.Duration}</p>
    <p>Difficulty: {props.props.Difficulty}</p>
    Ingrident: {props.props.Ingrident.map((x,i)=><div key={i}>{x.Name} {x.Count} {x.Type}</div>)}
    Instructions: {props.props.Instructions.map((x,i)=><div key={i}>{x.Inst}</div>)}
  
    <img src={props.props.Img}></img>
    
    </Card>
    </>
}