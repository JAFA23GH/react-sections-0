import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(        
        <div className="w-full min-h-1/2 md:h-1/2 bg-cover bg-center bg-amber-500">
            <div className="md:px-40 w-full h-full bg-teal-500 clippeando">
                <div className='flex flex-col md:flex-row md:justify-between items-center max-w-[1000px] h-full'>
                    <div className='items-center justify-center py-5 sm:pt-0'>
                        <ul>
                            <li className='footer-text'><a href="">Nosotros</a></li>
                            <li className='footer-text'><a href="">Servicios</a></li>
                            <li className='footer-text'><a href="">Servicios</a></li>
                            <li className='footer-text'><a href="">Trabajos</a></li>
                        </ul>
                    </div>
                    <div className='items-center sm:h-40 md:order-first max-w-[200px]'>
                        <img className="relative object-contain w-full h-3/4" src="/src/assets/divino.jpg" alt="" />
                        <div className='flex justify-between items-center mt-2'>                    
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
                            </a>
                            <a href="https://www.instagram.com/myaccount" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="text-white" />
                            </a>
                            <a href="https://www.facebook.com/myaccount" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>  
        </div>        
    );
};

export default Footer;