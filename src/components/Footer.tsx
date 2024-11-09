import React from 'react'

function Footer(){
    return(        
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-cover bg-center bg-amber-500">
            <div className="w-full h-full bg-teal-500 clippeando">
                 <div className='relative left-3/4 top-1/4'>
                    <ul>
                        <li className='pt-5 bg-white'><a href="">Nosotros</a></li>
                        <li><a href="">Servicios</a></li>
                        <li><a href="">Servicios</a></li>
                        <li><a href="">Trabajos</a></li>
                    </ul>
                 </div>
            </div>  
        </div>        
    );
};

export default Footer