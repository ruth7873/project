import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector"
import axios from 'axios';


export default () => {
    const [buies, setBuies] = useState([]);
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("in use effect", user.Id);
        axios.get(`http://localhost:8080/api/bay/${user.Id}`)
            .then((res) => { console.log(res.data); setBuies(res.data); })
            .catch((error) => console.error(error));
    }, [])
    console.log("afhjhh", buies);
    function editAdd(x) {
        let newP = { ...x };
        newP.Count = 1;
        console.log("sddffppp",newP);
        axios.post(`http://localhost:8080/api/bay`, { newP  }).then((res) => {
            setBuies(res)
            console.log("edit: ", res)
            const findIndex = buies.findIndex(x => x.Id === res.Id);
            buies[findIndex] = res;
        }).catch((error) => console.error(error))
    }

    return <>
        shopping

        {buies?.map((x, id) => (
            <div key={id}>
                <div>{x.Name}</div>
                <div>{x.Count}</div>
                <button onClick={() => editAdd(x)}>+</button>
                <button>-</button>
                <button>I had</button>



            </div>
        ))}
    </>
}