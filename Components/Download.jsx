import React from 'react';
import image1 from '../Images/iphone1.png'
import image2 from '../Images/iphone2.png'
import download from '../Images/downloadIcon.png'

const Download = () => {
    return (
        <div className='bg-[#F2F5F9] h-[65vh] px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-full gap-4 p-4 bg-[#0F67FE] rounded-xl relative'>
                <div className='relative top-4 overflow-hidden'>
                    <img src={image2} className='hidden md:block md:h-full left-[5vw] bottom-0 absolute'/>
                    <img src={image1} className='hidden md:block md:h-full left-[15vw] bottom-[-50px] absolute z-10'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='flex items-center mb-8'>
                        <span className=' bg-sky-500 h-3 w-3 rounded'></span>
                        <p className='plus-font text-white pl-3'>Download The App</p>
                    </div>
                    <div className='max-w-sm plus-font text-5xl font-bold mb-6'>
                       <h3 className='text-white'> Personalize Your Health With Asklepios, Now!</h3>
                    </div>

                    <div className='flex items-center mt-5'>
                        <div className='text-white flex items-center border-2 transition-all hover:scale-105 cursor-pointer plus-font border-white p-2 px-5 rounded-md'>
                            Google play
                            <img src={download} className='h-5 w-5 ml-2'/>
                        </div>
                        <div className='text-white flex items-center border-2 ml-2 transition-all hover:scale-105 cursor-pointer plus-font border-white p-2 px-5 rounded-md'>
                            App store
                            <img src={download} className='h-5 w-5 ml-2'/>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}

export default Download