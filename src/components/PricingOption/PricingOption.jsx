import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisiPricingCard from '../DaisiPricingCard/DaisiPricingCard';

const PricingOption = ({pricingPromiss}) => {
    const pricingData = use(pricingPromiss);
    // console.log(pricingData)
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl text-center mb-5'>Get Our Membership</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-15 m-4 md:m-auto'>
                {
                pricingData.map((pricing, index) => <PricingCard 
                    key={index}
                    pricing={pricing}></PricingCard>)
                }
            </div>

            {/* daisi card use */}
            <h2 className='text-5xl text-center mt-25'>Get Our Daisi Membership</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 m-4 md:m-auto'>
                {
                    pricingData.map((pricing, index) => <DaisiPricingCard 
                    key={index}
                    pricing={pricing}
                    ></DaisiPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;