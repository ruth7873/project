import { Link, Route, useParams } from "react-router-dom"
import Header from "../header"


const Login = () => {

    const { name, id } = useParams()
    return <div>

        {recipe.map(x => <Link to={`/login/${x.name}/${x.userID}`} />)}

        <Route path="/login/:name/:id" element={<Header />} />
    </div>
}

export default Login