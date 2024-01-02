import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import * as yup from "yup"
import 'semantic-ui-css/semantic.min.css'
import { FormField, Form } from 'semantic-ui-react'

let schema = yup
    .object({
        Username: yup.string().required(),
        Name: yup.string().required(),
        Adress: yup.string().required(),
        Email: yup.string().email().required(),
        Phone: yup.string().required(),
        Tz:yup.string().required(),
        Password: yup.string().required(),
    })
    .required()


export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const navigate = useNavigate();
    const onSubmit =(data,e)=>{
        console.log("sdfghjkhgfd")
              {axios.post('http://localhost:8080/api/user/sighin',{
                  Username:data.Username,
                  Password:data.Password,
                  Name:data.Name,Phone:data.Phone,Email:data.Email,
                  Tz:data.Tz}).then((d)=>{console.log(d) }).catch((error) => {
                alert(error.response.data)
                // navigate("/signUp")
                schema=null
                // console.log("e",e,data)
                e.preventDefault()
                register("","","","","")
            })
    }}


    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>User Name: </label>
            <input type="text" placeholder="user name" {...register("Username")} />
            <p>{errors.Username?.message}</p>

            <label>Name: </label>
            <input type="text" placeholder="name" {...register("Name")} />
            <p>{errors.Name?.message}</p>

            <label>Adress: </label>
            <input placeholder="Adress" {...register("Adress")} />
            <p>{errors.Adress?.message}</p>

            <label>Email: </label>
            <input type="email" placeholder="email" {...register("Email")} />
            <p>{errors.Email?.message}</p>

            <label>Phone:</label>
            <input type="text" placeholder="phone" minLength={7}{...register("Phone")} />
            <p>{errors.Phone?.message}</p>

            <label>Tz:</label>
            <input placeholder="Tz" minLength={9} maxLength={9} type="text" {...register("Tz")} />
            <p>{errors.Tz?.message}</p>

            <label>Password: </label>
            <input
             placeholder="Password"
            type="password"{...register("Password")} />
            <p>{errors.Password?.message}</p>


            <input type="submit" />
        </form>
    )
}