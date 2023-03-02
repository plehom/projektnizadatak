import React from 'react' 
import './button.css'

const CustomButton = (props) =>{
    return(
        <button onClick={props.press}>
            {props.text}
        </button>
    )
}
export default CustomButton