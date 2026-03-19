import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({pricingPromiss}) => {
    const pricingData = use(pricingPromiss);
    // console.log(pricingData)
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl text-center mb-5'>Get Our Membership</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                pricingData.map((pricing, index) => <PricingCard 
                    key={index}
                    pricing={pricing}></PricingCard>)
            }
            </div>
        </div>
    );
};

export default PricingOption;