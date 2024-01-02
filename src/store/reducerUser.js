import * as Actions from './action'

const initalseState = {
    user: null,
}

const reducer = (state = initalseState, action) => {
    switch (action.type) {
        case Actions.SET_USER:
            return { ...state, user: action.user}
        default: return { ...state }
    }
}


// reducer({ type: "ADD", payload: "dvora", data: "lll" })

export default reducer;