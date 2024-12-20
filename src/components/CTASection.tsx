import React from 'react'

function CTA(){
    return(
        // <div className="relative h-screen">
            <div className="w-full h-1/2 bg-cover bg-center" style={{backgroundImage: "url('/src/assets/backgroundCTA.png')"}}>
                <div className="flex items-center justify-center h-full">
                    <div className="sm:w-80 md:w-2/5 ml-5 mr-5 sm:ml-0 sm:mr-0 h-1/2 bg-black flex flex-col items-center justify-center text-center p-5">
                        <p className='text-white font-mono font-black text-md md:text-lg lg:text-xl 2xl:text-3xl'>Rehabilita tu piscina y jardín con uno de nuestros expertos</p>
                        <button className="h-15  sm:h-1/2 w-60 mt-3 px-4 py-1 text-base text-white text-xl font-mono bg-amber-500">Solicita <br /> tu cotización</button>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default CTA