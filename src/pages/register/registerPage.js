import React,{useState} from 'react'
import CustomButton from '../../components/button/button'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import './registerPage.css'

export default function RegisterPage() {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const register = async ()=>{
        console.log(username)
        try{
            const response = await fetch('http://127.0.0.1:8000/api/register/', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({
                        username:username,
                        password:password,
                        first_name:firstName,
                        last_name:lastName,
                        email:email
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
            <h2 style={{color:'white'}}>Sign Up</h2>
            <div id="inp-container">
                <input className='inp-box' type="text" placeholder="First Name" onChamge={(event)=>setFirstName(event.targer.value)}></input>
                <input className='inp-box' type="text" placeholder="Last Name" onChamge={(event)=>setLastName(event.targer.value)}></input>
                <input className='inp-box' type="text" placeholder="Email" onChamge={(event)=>setEmail(event.targer.value)}></input>
                <input className="inp-box" type="text" placeholder='Username' onChange={(event)=> setUsername(event.target.value)}></input>
                <input  className="inp-box" type="password" placeholder='Password' onChange={(event)=> setPassword(event.target.value)}></input>
                <CustomButton text="SIGN UP" press={register}></CustomButton>
            </div>
        </div>
    )
}
