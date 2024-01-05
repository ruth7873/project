import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux";
import * as Actions from "./store/action"
export default function ({ prop }) {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const onLogOut=()=>{
        dispatch({ type: Actions.SET_USER, user:null });
        alert("good buy!!!!")
    }
    return <>
        {!localStorage.getItem("user")? 
            <div>
                <Link to={'/login'}>Log in | </Link>
                <Link to={'/signUp'}>Sign Up</Link></div> :
            <div>
                <Link to={'/homePage'}> Home Page |</Link>
                <Link to={'/recipe'}> Recipes |</Link>
                <Link to={'/recipe/:user'}> My Recipes |</Link>
                <Link to={'/shopping'}> Shopping |</Link>
                <Link onClick={onLogOut} to={'/login'}> Change User</Link>
            </div>
        }
    </>
}