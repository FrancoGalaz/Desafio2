import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


function App() {
  const Linkedin="https://www.pngplay.com/wp-content/uploads/12/LinkedIn-PNG-Photo-Clip-Art-Image.png";
  const Facebook="https://e7.pngegg.com/pngimages/346/104/png-clipart-facebook-computer-icons-facebook-email-whatsapp-address-phone-instagram-ic-logo-desktop-wallpaper-thumbnail.png";
  const Github="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  return (
    <>
    <div className='main'>
      <Registro Linkedin={Linkedin} Facebook={Facebook} Github={Github}/>
    </div>
      
    </>
  )
}

export default App
