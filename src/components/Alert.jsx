import React from 'react';

export default function Alert({ message, success }) {
  if (success) {
    return <div className="alert alert-success" role="alert">Registro exitoso!</div>;
  }

  if (message) {
    return <div className="alert alert-danger" role="alert">{message}</div>;
  }

  return null; 
}

