import React from 'react'
import {useState} from 'react'

export default function Products(props){
    const items = props.item;
    const [text,setText] = useState('Product List')
    return(
        <>
        <h1>{text}</h1>
        <ul>
            {items.map((data,index)=>(
                <li key="index">{data.name}</li>
            ))}
        </ul>
        </>
    )
}