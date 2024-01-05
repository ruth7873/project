import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const App = () => {

    const user = useSelector(state => state.user.user)

    useEffect(() => {
        if (!user) {
            Navigate('/login');
        }
        else {
            Navigate("/home")
        }
    }, [user])

   

    return <div> myredux</div>
}

export default App;