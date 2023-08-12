import React from 'react'

export default function SocialButton({Linkedin, Facebook, Github}) {
    return (
        <div className='socialButton'>
            <a href="https://www.linkedin.com/" target='_blank'><img src={Linkedin} alt="linkedin" className='img_icon' /></a>
            <a href="https://es-la.facebook.com/" target='_blank'><img src={Facebook} alt="Facebook" className='img_icon' /></a>
            <a href="https://github.com/" target='_blank'><img src={Github} alt="github" className='img_icon'/></a>
        </div>
    )
}
