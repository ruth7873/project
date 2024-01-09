import * as Actions from './action'
import axios from 'axios';


const initalseState = {
    buies: [],
}
const reducerBuy = (state = initalseState, action) => {
    switch (action.type) {
        // case "SET_BUY": {
        //     axios.get(`http://localhost:8080/api/bay/:${action.data}`)
        //         .then((res) => { return { ...state, res } })
        //         .catch((error) => console.error(error))
        //     // const buies = state.buies.filter(x => x.userId === action.userId);
        // }
        case "ADD_BUY": {
            console.log("reducer", action);

            console.log("reducer", action.data);
            axios.post(`http://localhost:8080/api/bay`, { Name: action.data.Name, UserId: action.data.user, Count: 1 })
                .then((res) => {
                    const buies = [...state.buies];
                    console.log(buies)
                    buies.push(action.data);
                    console.log(action.data)
                    state=buies;
                    alert("נוסף בהצלחה!!!")
                }).catch((error) => console.error(error))
            return { ...state }

        }
        case "EDIT_BUY": {
            console.log("reducer", action);

            console.log("reducer", action.data);
            axios.post(`http://localhost:8080/api/bay`, { Name: action.data.Name, UserId: action.data.user, Count: action.data.Count })
                .then((res) => {
                    const buies = [...state.buies];
                    console.log(buies)
                    buies.push(action.data);
                    console.log(action.data)
                    state={...buies};
                    // alert("נוסף בהצלחה!!!")
                }).catch((error) => console.error(error))
            return { ...state }

        }
        case "DELETE_BUY": {
            console.log("delete: ", action.data)
            // const recipes = [...state.recipes];
            axios.post(`http://localhost:8080/api/bay/delete/${action.data.Id}`)
                .then(() => {
                    console.log("deleted!!!")
                })
                .catch((error) => { console.error(error) })
                return null;
                return { ...state }
        }
        default: return { ...state }
    }
}

// reducer({ type: "ADD", payload: "dvora", data: "lll" })

export default reducerBuy;