import * as actionsName from './action'
//userName
const initlaseState = {
    user: "",
    count: 15,
    mass: "",
    users: []
}

//setUserName
const reducer = (state = initlaseState, action) => {
    switch (action.type) {
        case actionsName.SET_USERNAME: {
            return { ...state, user: action.user, count: state.count + 1 }
        }
        case actionsName.FAILED: return { ...state, mass: action.mass }

        case "ADD_USER":
            {
                const users = [...state.users];
                users.push(action.newUser);
                return { ...state, users, mass: action.mass }
            }
        case "EDIT_USER":
            {
                const users = [...state.users];
                const findIndex = users.findIndex(x => x.id == action.userObj.id)
                users[findIndex] = action.userObj;
                return { ...state, users }
            }
        case "DELETE_USER":
            {
                const users = state.users.filter(x => x.id != action.userId)
                return { ...state, users }
            }

        default: return { ...state }
    }
}

export default reducer;