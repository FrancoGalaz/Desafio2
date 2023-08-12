import React from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'

export default function Registro({Linkedin, Facebook, Github}) {
    return (
        <div className='registro'>
            <h1>
                Crea una cuenta
            </h1>
        <SocialButton Linkedin={Linkedin} Facebook={Facebook} Github={Github}/>        
            <h5>O usa tu email para registrarte</h5>
        <Formulario/>




        </div>
    )
}
