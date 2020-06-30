import React, {useContext,useState} from 'react'
import {Context} from '../Context/AuthContext'


function Image () {
    
    const { AddImage } = useContext(Context)

    const handleSubmit = async function(event) {
        event.preventDefault()
        const file = document.getElementById('input-file').files[0]
     try {
        await AddImage(file)
     }catch(err) {
         console.log(err)
     }
    }

    return (
        <div className="container-create-rifa">
            <div className="container-form">

                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Arial"}}>
                        <h1> <span className="orange">A</span>dicionar <span className="orange">I</span>magem</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <input  type="file" ></input>
                    <button type="submit">Enviar Arquivo</button>
                    </form>
            </div>
        </div>
    )
}


export default Image