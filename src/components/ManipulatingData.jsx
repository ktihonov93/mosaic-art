import React from 'react'
import axios from 'axios';
const getData =() => {
    axios.get('https://api.harvardartmuseums.org/object?title=cat&apikey=0000-0000-0000-0000')
    .then(res => res.json())
    .then(data)
}

export default function ManipulatingData() {
    return (
        <div>
            
        </div>
    )
}
