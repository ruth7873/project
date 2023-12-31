import { useState, useEffect } from 'react'
import Image from '../images/img.jpg'
import axios from 'axios'
import Recipe from '../Recipe';
import { useSelector } from  "react-redux/es/hooks/useSelector"
export default (byUser) => {
    const [Categories, setCategories] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [category, setCategory] = useState([]);
    const [myRecipes, setMyRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/recipe').then((r) => { setRecipes(r.data) })
        axios.get('http://localhost:8080/api/category').then((c) => { setCategories(c.data) })
    }, [])
    
    useEffect(()=>{console.log(category)
        {recipes.map(x => (!category || x.categoryId == category) ?
            <li key={x.Id}>
                <p key={x.Id}><Recipe props={x} /></p>
            </li> : null)}
    },category)
    return <>


        <img src={Image} style={{ width: 500 }}></img>

        {/* {recipes.map((x) =>
            <p key={x.Id}>{x.Name} </p>
        )
    } */}
    <hr/>
        {<select >
           { Categories.map((x) => 
            <option key={x.Id} value={x.id} >{x.Name}</option>)}
</select>
        }
        {recipes.map((x) =>
            <p key={x.Id}><Recipe props={x} /></p>
        )
        }
    </>
}