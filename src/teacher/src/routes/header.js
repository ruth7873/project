import { Link } from "react-router-dom"

const Header = () => {
    return <>
        <Link to="/">דף הבית</Link><br />
        <Link to="/Signin">כניסה</Link><br />
        <Link to="/login">הרשמה</Link><br />
        <Link to="/about">אודות</Link><br/>
        <Link to="/User">משתמשים</Link>
    </>
}

export default Header