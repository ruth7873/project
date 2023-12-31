
import { Link, useLocation, useNavigate } from "react-router-dom"
import SignUp from "./SignUp"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import HomePage from "../pages/HomePage"
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import * as Actions from "../store/action"
import Header from "../Header"
const schema = yup
    .object({
        userName: yup.string().required(),
        password: yup.string().min(3).required(),
    })
    .required()

export default function App() {
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const { state } = useLocation()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),defaultValues:{userName:state?.Username,password:state?.Password}
    })
    const onSubmit = (data) => {
        axios.post('http://localhost:8080/api/user/login', { Username: data.userName, Password: data.password })
            .then((d) => {
                console.log(d)
                dispatch({ type: Actions.SET_USER, user: d.data })
                alert(`welcome ${ data.userName}!!!`)
                localStorage.setItem("user" ,JSON.stringify(data))
                navigate("/homepage")
            }).catch((error) => {
                alert(error.response.data)
                console.log(data);
                navigate("/signUp",{state:data})
            })
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>User Name: </label>
            <input placeholder={"user name"} type="text" {...register("userName")} />
            <p>{errors.userName?.message}</p>

            <label>Password: </label>
            <input type="password"{...register("password")} />
            <p>{errors.password?.message}</p>

            <Link to={'/signUp'}>Don't have an account yet? Sign up now</Link>
            <br />

            <input type="submit" />
        </form>
        
    )
}