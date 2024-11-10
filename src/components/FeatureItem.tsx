import React from 'react'

function FeatureItem(props) {
    return (
            <div className='flex-1 flex-col flex-grow flex-basis-0 my-2 md:my-0 md:mx-2'>           
                    <h1 className='text-2xl text-amber-500 font-bold'>{props.number}</h1>
                    <h2 className='text-lg text-cyan-500 font-bold'>{props.title}</h2>
                    <p className='text-black font-bold'>{props.description}</p>     
            </div>
        );
}
export default FeatureItem