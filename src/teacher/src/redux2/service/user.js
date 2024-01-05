import axios from "axios"


//GetUser()
export const GetUser = () => {
    return axios.get("https://jjfadsfa", {})
}


//disptach(GetUserDispatch())
export const GetUserDispatch = () => {
    return dispatch => {
        axios.get("https://jjfadsfa", {})
            .then(x => {
                // dispatch({ type: SET_USER, user: x.data })
            })

    }
}