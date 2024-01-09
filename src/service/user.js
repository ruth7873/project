import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Actions from "../store/action"

export function SetUser(data) {
    const navigate = useNavigate();

    return dispatch => {
        axios.post('http://localhost:8080/api/user/login', { Username: data.userName, Password: data.password })
        .then((d) => {
            console.log(d)
            dispatch({ type: Actions.SET_USER, user: d.data })
            // alert(`welcome ${ data.userName}!!!`)
            // localStorage.setItem("user" ,JSON.stringify(data))
            // navigate("/homepage")
        }).catch((error) => {
            alert(error.response.data)
            console.log(data);
            navigate("/signUp",{state:data})
        })
    }
}