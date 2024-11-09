import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(        
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-cover bg-center bg-amber-500">
            <div className="w-full h-full bg-teal-500 clippeando">
                <div className='absolute inset-y-0 left-0 top-1/4 ml-20 sm:ml-40 height-20 bg-white h-40'>
                    <img className="relative object-contain w-full h-full" src="/src/assets/divino.jpg" alt="" />
                    <div className='grid-cols-3 mt-2'>                    
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-white mr-4" />
                        </a>
                        <a href="https://www.instagram.com/myaccount" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white mr-4" />
                        </a>
                        <a href="https://www.facebook.com/myaccount" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white" />
                        </a>
                    </div>
                </div>
                <div className='absolute inset-y-0 right-0 top-1/4 mr-20 sm:mr-40'>
                    <ul>
                        <li className='footer-text'><a href="">Nosotros</a></li>
                        <li className='footer-text'><a href="">Servicios</a></li>
                        <li className='footer-text'><a href="">Servicios</a></li>
                        <li className='footer-text'><a href="">Trabajos</a></li>
                    </ul>
                </div>
            </div>  
        </div>        
    );
};

export default Footer