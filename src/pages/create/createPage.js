import React,{useState} from 'react'
import './createPage.css'

import CustomButton from '../../components/button/button'

const CreatePage = () =>{
    const [name,setName] = useState("Untitled")
    const [content,setContent] = useState("")

    const create = async () =>{
        const token = localStorage.getItem("token")
        try{
            const response = await fetch('http://127.0.0.1:8000/api/notes/create/', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization':'Token ' + token
                    },
                    body:JSON.stringify({
                        name:name,
                        content:content
                    })
                
            })
            const json = await response.json()
            console.log(json.token)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div id="container">
            
            <h1>Create your note </h1>
            <div id="content">
                <input type="text" id="input-title" placeholder="Untitled" onChange={(event) => setName(event.target.value)}></input>
                <textarea id="input-note" placeholder='Type your note here ' onChange={(event) => setContent(event.target.value)}></textarea>
                <CustomButton text="CREATE" press={create}/>
            </div>
        </div>
    )
}

export default CreatePage