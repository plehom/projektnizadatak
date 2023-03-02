import React,{useEffect,useState} from 'react'
import './mainPage.css'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import {Link,useNavigate} from 'react-router-dom'

const MainPage  = ()=>{
    const [loggedIn,setLoggedIn] = useState(false)
    const [notes,setNotes] = useState([])
    const [token,setToken] = useState("")

    const navigate = useNavigate()

    const getData = async ()=>{
        const st = localStorage.getItem("token")
        setToken(st)
        
        console.log("token", token)

        
        try{
            const response = await fetch('http://127.0.0.1:8000/api/notes/get/', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization':'Token ' + st
                    },
                
                })
                const json = await response.json()
                console.log(json)
                setNotes(json.data)
                setLoggedIn(true)
                console.log(loggedIn)
                return json.data
        }catch(err){
            console.log(err)
            setLoggedIn(false)
        }

        
    
    }

    useEffect(()=>{
        getData()
    },[])

   
    console.log(token)
    return(
        <div id="container">
            
            <h1>Welcome to Main Page !</h1>
            
            <div id="content">
                {!loggedIn ? <h2>LOGIN</h2>
                :
                 <div>
                        <h2>My Notes </h2>
                        <div id="items">
                        {
                            notes.map((item)=>(
                                
                                <Link style={{textDecoration:'none'}}to={{
                                    pathname:"/detail/"+ item.id
                                }}>
                                    <div key={item.id} className="item">
                                        <h2>{item.name}</h2>
                                        <p>{item.date}</p>
                                    </div>
                                </Link>
                            ))
                        }

                        </div>
                        <Link id="create-button" to="create">
                            +
                        </Link>

                    </div>



                       
                }
            </div>
        </div>
    )
}

export default MainPage