import React from 'react';
import testimonialImage from '../Images/testimonial.png'

const Testimonial = () => {
    return (
        <div className= 'bg-[#F2F5F9] p-5 pt-1'>
            <div className='bg-[#D0E4FF] rounded-2xl'>
                <div className='md:grid md:grid-cols-2 flex flex-col'>
                    <div className='flex justify-center items-center md:items-start flex-col p-16'>
                        <span className=' w-48 flex justify-center items-center mt-8 border-2  border-[#5D6A85] rounded-lg py-3 px-8 text-[#5D6A85] plus-font font-semibold text-[12px]'>Testimonial</span>
                        <h1 className='text-[#242E49] mt-10 max-w-sm text-3xl  mb-4 items-center md:text-5xl plus-font font-extrabold'>Trusted by Many</h1>
                    </div>
                    <div>
                        <img src={testimonialImage} className='h-full'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
