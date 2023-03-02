import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import './detailPage.css'


const DetailPage = ()=>{
    const [note,setNote] = useState("")

    const {id} = useParams()

    const getDetails = async () =>{
        const token = localStorage.getItem("token")
        try{
            const response = await fetch('http://127.0.0.1:8000/api/notes/detail/'+ id, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization':'Token ' + token
                    },
    
                
            })
            const json = await response.json()
            setNote(json.data)
            console.log(json.token)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getDetails()
    },[])

    return(
        <div id="container">
            <h2 style={{color:'white'}}>{note.name}</h2>
            <div id="content">
                <h3>{note.content}</h3>
                <a>{note.date}</a> 
            </div>
        </div>
    )
}

export default DetailPage