import React, { useState } from 'react';
import Alert from './Alert';

export default function Formulario() {
  const [input, setInput] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  function inputHandler(e) {
    setInput({ ...input, [e.target.id]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    setError(null);
    setSuccess(false); 

    // verificar el correo 
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(input.email)) {
      setError('Por favor, introduce una dirección de correo electrónico válida.');
      return;
    }

    // verificar que los campos no esten vacios
    if (!input.password1 || !input.password2) {
      setError('Por favor, ingresa una contraseña.');
      return;
    }

    // verificar contraseñas iguales 
    if (input.password1 !== input.password2) {
      setError('Las contraseñas no coinciden.');
      return;
    }

   
    console.log('Formulario procesado con éxito:', input);
    setSuccess(true);
  }

  return (
    <form action="submit" onSubmit={(e) => submitHandler(e)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="registro">
      <input onChange={(e) => inputHandler(e)} type="text" className="form-control" id="nombre" placeholder="Nombre" />
      <input onChange={(e) => inputHandler(e)} type="email" className="form-control" id="email" placeholder="tuemail@ejemplo.com" />
      <input onChange={(e) => inputHandler(e)} type="password" className="form-control" name="password1" id="password1" placeholder="Contraseña" />
      <input onChange={(e) => inputHandler(e)} type="password" className="form-control" name="password2" id="password2" placeholder="Confirma tu contraseña" />
      <button type="submit" className="btn btn-outline-success">Registrarse</button>
      <Alert message={error} success={success} />
    </form>
  );
}


