import React from 'react';
import PricingFeature from '../PricingFeatur/PricingFeature';
import { TfiMoney } from 'react-icons/tfi';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    const {name, price, duration, description, features} = pricing;
    return (
        <div className='bg-amber-200 p-4 shadow-xl rounded-2xl' >
            {/* header section */}
            <div>
                <h2 className='text-4xl font-bold'>{name}</h2>
                <h4 className='text-2xl flex'>${price}/{duration}</h4>
            </div>

                {/* card container */}
            <div className='p-5 bg-amber-900 rounded-2xl'>
                <p className='text-2xl mb-3 text-blue-200'>{description}</p>
                {
                    features.map(featur => <PricingFeature featur={featur}></PricingFeature>)
                }
            </div>
        </div>
    );
};

export default PricingCard;