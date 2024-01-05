import axios from "axios"

export const getCATEGORY = () => {
    return axios.get("htttp:,,,")
}

export const getCATEGORYDispatch = () => {
    return dispatch => {

        axios.get("htttp:,,,").then(x =>
            dispatch({ type: "CATEGORY", data: x.data }))
    }
}