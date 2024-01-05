import { useSelector } from "react-redux";

const Header = ({ userId }) => {

    const { countUser, mass, MyRecippes } = useSelector(state => ({
        countUser: state.user.count,
        mass: state.user.mass,
        MyRecippes: state.recipe.recipes.filter(x => x.userId == state.user.user.Id)
    }))
    return <div> my name is{user}</div>
}

export default Header;