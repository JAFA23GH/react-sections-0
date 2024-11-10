import React from 'react'
import FeatureItem from './FeatureItem';

const FeatureSection = (props) => {
    return (
        <div className='flex flex-col md:flex-row justify-between  mx-28 mb-20'>
            <FeatureItem         
                number={props.items[0].number}
                title={props.items[0].title}
                description={props.items[0].description}     
            />
            <FeatureItem           
                number={props.items[1].number}
                title={props.items[1].title}
                description={props.items[1].description}     
            />
            <FeatureItem           
                number={props.items[2].number}
                title={props.items[2].title}
                description={props.items[2].description}     
            />
            <FeatureItem           
                number={props.items[3].number}
                title={props.items[3].title}
                description={props.items[3].description}     
            />
        </div>        
        );
}
export default FeatureSection