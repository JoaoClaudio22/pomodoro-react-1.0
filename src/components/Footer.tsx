import React from 'react'
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='footer'>
       <p>Todos os direitos reservados João Cláudio &copy; 2022</p> 
       <a target={'_blank'} href="https://github.com/JoaoClaudio22"> <FaGithub/> Github</a>
    </div>
  )
}

export default Footer