import React,{useState} from 'react'
import CustomButton from '../../components/button/button'
import {useNavigate} from 'react-router-dom'
import './loginPage.css'

export default function LoginPage() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    const login = async ()=>{
        console.log(username)
        try{
            const response = await fetch('http://127.0.0.1:8000/api/login/', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({
                        username:username,
                        password:password
                    })
                
            })
            const json = await response.json()
            console.log(json.token)
            localStorage.setItem("token",json.token)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div id="container">
            <h2 style={{color:'white'}}>Sign In</h2>
            <div id="inp-container">
                <input className="inp-box" type="text" placeholder='Username' onChange={(event)=> setUsername(event.target.value)}></input>
                <input  className="inp-box" type="password" placeholder='Password' onChange={(event)=> setPassword(event.target.value)}></input>
                <CustomButton text="SIGN IN" press={{
                    login
                    }}></CustomButton>
                <a href="/register">You don't have an account? Click to sign up !</a>
            </div>
        </div>
    )
}

