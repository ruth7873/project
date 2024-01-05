import { useEffect, useState } from "react"
import { getCATEGORY, getCATEGORYDispatch } from "./service/category"
import { useDispatch, useSelector } from "react-redux"

const Category = () => {

    const [category, setCategoty] = useState([])
    useEffect(() => {
        getCATEGORY().then(x => setCategoty(x.data))
    }, [])


    const categoryDispatch = useSelector(state => state.recipe.categories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCATEGORYDispatch())
    }, [])

    return category.map(x => <div></div>)
}

export default Category