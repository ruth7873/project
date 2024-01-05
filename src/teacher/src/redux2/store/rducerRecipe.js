import * as Actions from './action'

const initalseState = {

    recipes: []
}

const reducer = (state = initalseState, action) => {
    switch (action.type) {
        case "SET_RECIPE":
            return { ...state, recipes: action.data }
        case "ADD_RECIPE":
            const recipes = [...state.recipes];
            recipes.push(action.recipe);
            return { ...state, recipes }
        case "EDIT_RECIPE": {
            const recipes = [...state.recipes];
            const findIndex = recipes.findIndex(x => x.Id == action.recipe.Id);
            recipes[findIndex] = action.recipe;
            return { ...state, recipes }
        }
        case "DELETE_RECIPE": {
            const recipes = state.recipes.filter(x => x.id != action.id);
            return { ...state, recipes }
        }
        default: return { ...state }
    }
}

// reducer({ type: "ADD", payload: "dvora", data: "lll" })

export default reducer;