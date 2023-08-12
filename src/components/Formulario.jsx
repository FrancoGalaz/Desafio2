import React from 'react'
import { useState } from 'react'
export default function Formulario() {
    
    const [input , setInput] = useState({})


    function inputHandler(e){
        setInput({...input,[e.target.id]: e.target.value})
    }

    function submitHandler(e){

    }

    return (
        <form action="submit" onSubmit={(e)=>submitHandler(e)} style={{display:'flex', flexDirection:'column', gap:'10px'}} className='registro'>
            <input onChange={(e)=>inputHandler(e)} type="text" class="form-control" id="nombre" placeholder="Nombre"/>
            <input onChange={(e)=>inputHandler(e)} type="email" class="form-control" id="email" placeholder="tuemail@ejemplo.com"/>
            <input onChange={(e)=>inputHandler(e)} type="password"  class="form-control" name="password1" id="password1" placeholder='Contraseña' />
            <input onChange={(e)=>inputHandler(e)} type="password"  class="form-control" name="password2" id="password2" placeholder='Confirma tu contraseña' />
            <button type="submit" class="btn btn-outline-success">Registrarse</button>
        </form>
    )
}
