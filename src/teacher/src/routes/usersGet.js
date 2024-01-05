import axios from 'axios'
import { Fragment, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'

const App = () => {

    const navig = useNavigate();
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(x => {
                setUsers(x.data)
                // if (!x.data.length) {
                //     // return <Link to={`${x.id}/${x.name}`}>  הצג פוסטים</Link>

                //     navig("/login", { state: { mass: "ריק" } })
                // }
                // else if (x.data.length > 5) {
                //     // return <Link to={`${x.id}/${x.name}`}>  הצג פוסטים</Link>

                //     navig("/login", { state: { mass: "יותר מידי, מומלץ להוריד במידע", count: x.data.length } })
                // }
                // console.log(x.data);
            })
            .catch(err => console.error(err))
            .finally()

    }, [])

    const nav = (userId, name) => {
        navig("post", { state: { userId, name } })
    }

    return <Fragment>

        <ul>{users.map(x => <li>{x.name}

            {x.id == userId ? <h1>מוצג למטה</h1> :
                <button onClick={() => nav(x.id, x.name)}>הצג פוסטים</button>
                // <Link to={`${x.id}/${x.name}`}>  הצג פוסטים</Link>
            }

        </li>)}</ul>

        <Outlet />

        <hr />
    </Fragment>
}

export default App;