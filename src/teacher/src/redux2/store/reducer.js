import * as Actions from './action'

const initalseState = {
    user: null,
    count: 0,
    mass: null,
}

const reducer = (state = initalseState, action) => {
    switch (action.type) {
        case Actions.SET_USER:

        axios.get
            return { ...state, user: action.user, mass: "" }
        case "SET_MASS":
            return { ...state, mass: action.data }
        default: return { ...state }
    }
}

// reducer({ type: "ADD", payload: "dvora", data: "lll" })

export default reducer;