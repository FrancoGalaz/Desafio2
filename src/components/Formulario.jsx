import React, { useRef, useState, useEffect } from 'react';
import Alert from './Alert';

export default function Formulario() {
  const [input, setInput] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const form = useRef();

  useEffect(() => { // Nuevo useEffect
    let timer;
    if (error || success) {
      timer = setTimeout(() => {
        setError(null);
        setSuccess(false);
      }, 3500);
    }
    return () => clearTimeout(timer); 
  }, [error, success]);

  console.log(input);
  function inputHandler(e) {
    setInput({ ...input, [e.target.id]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    setError(null);
    setSuccess(false); 

    //verificar si los camos estan completados
    if(!input?.nombre || !input?.password1 || !input?.password2){
      setError('Faltan campos obligatorios por llenar.');
      return;
    } else if (!emailPattern.test(input.email)) {     // verificar el correo 
      setError('Por favor, introduce una dirección de correo electrónico válida.');
      return;
    }else if (!input.password1 || !input.password2) {  // verificar que los campos no esten vacios
      setError('Por favor, ingresa una contraseña.');
      return;
    } else if (input.password1 !== input.password2) { // verificar contraseñas iguales 
      setError('Las contraseñas no coinciden.');
      return;
    }else{
      setSuccess(true);
      form.current.reset();
      setInput({...input, password1:""});
    }


  }

  return (
    <form ref={form} action="submit" onSubmit={(e) => submitHandler(e)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="registro">
      <input onChange={(e) => inputHandler(e)}  type="text" className="form-control" id="nombre" placeholder="Nombre" />
      <input onChange={(e) => inputHandler(e)} type="email" className="form-control" id="email" placeholder="tuemail@ejemplo.com" />
      <input onChange={(e) => inputHandler(e)} type="password" className="form-control" name="password1" id="password1" placeholder="Contraseña" />
      <input onChange={(e) => inputHandler(e)} type="password" className="form-control" name="password2" id="password2" placeholder="Confirma tu contraseña" />
      <button type="submit" className="btn btn-outline-success">Registrarse</button>
      <Alert message={error} success={success} />
    </form>
  );
}


