import {useState,useEffect} from 'react'

function getValue(key,defValue){
    const storage = localStorage.getItem(key)
    const data = storage !== null ? JSON.parse(storage) : defValue

    return data || defValue
}

export const useLocalStorage = (key,defValue)=>{
    const [data,setData] = useState(getValue(key,defValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(defValue));
      }, [key, defValue]);

    return [data,setData]
}
