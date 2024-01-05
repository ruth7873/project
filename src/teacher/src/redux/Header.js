import { useSelector } from "react-redux";

const Header = () => {
    const { name, count } = useSelector(state => ({ name: state.user, count: state.count }));

    return name ? <p> {name} count:{count}</p> : <div>plees login</div>
}

export default Header