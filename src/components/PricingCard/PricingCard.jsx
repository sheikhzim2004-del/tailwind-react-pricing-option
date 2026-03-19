import React from 'react';
import PricingFeature from '../PricingFeatur/PricingFeature';
import { TfiMoney } from 'react-icons/tfi';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    const {name, price, duration, description, features} = pricing;
    return (
        <div className='bg-amber-200 p-4 shadow-xl rounded-2xl flex flex-col'>
            {/* header section */}
            <div className='flex justify-between mb-4'>
                <h2 className='text-4xl font-bold'>{name}</h2>
                <h4 className='text-2xl flex'>${price}/{duration}</h4>
            </div>

                {/* card container */}
            <div className='p-5 bg-amber-900 rounded-2xl flex-1'>
                <p className='text-2xl mb-3 text-blue-200'>{description}</p>
                {
                    features.map((featur, index) => <PricingFeature
                        key={index} 
                        featur={featur}></PricingFeature>)
                }
            </div>
            <button className="btn w-full bg-black hover:bg-green-900 text-white rounded-xl mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;