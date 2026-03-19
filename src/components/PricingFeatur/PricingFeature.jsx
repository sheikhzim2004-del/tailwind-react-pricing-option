import React from 'react';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const PricingFeature = ({featur}) => {
    return (
        <div className=' text-white'>
            <p className='flex gap-2'><IoCheckmarkDoneSharp></IoCheckmarkDoneSharp>{featur}</p>
        </div>
    );
};

export default PricingFeature;