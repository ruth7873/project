import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const MyPost = () => {
    // const { userId, name } = useParams();

    // const data = useLocation();
    const { state, pathname } = useLocation();
    const { userId, name } = state;
    console.log(state, pathname, userId, name)

    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedpost] = useState();


    useEffect(() => {
        setSelectedpost(null)
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(x => {
                console.log(x.data)
                setPosts(x.data)
            })
            .catch(err => console.error(err))
            .finally()
        return () => {
        }
    }, [userId])





    return <>

        <h1> הפוסטים של : {name}</h1>
        <ul>{posts.map(x => <li>
            <h6>{x.title}</h6>
            <p>{x.body}</p>

            <button onClick={() => setSelectedpost(x.id)}>הערות</button></li>)}
        </ul>



    </>
}

export default MyPost;