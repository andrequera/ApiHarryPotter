import React from 'react'
import { useParams } from 'react-router-dom'

const Personaje1 = () => {
    const params = useParams();
    console.log(params.id);

    return (
        <div>
            en personaje
        </div>
    )
}

export default Personaje1
