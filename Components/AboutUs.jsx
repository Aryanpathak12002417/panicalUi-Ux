import React from 'react';
import badge from '../Images/badge.png'
import plus from '../Images/plus.png'
import learnMore from '../Images/learnMore.png'

const AboutUs = () => {
    return (
        <div className='bg-[#F2F5F9] p-5'>
            <div className='bg-[#242E49] rounded-2xl  p-16'>
                <div className='flex'>
                    <div className="flex shrink justify-center items-center bg-[#8A3FFC] rounded-xl mr-4 text-white p-4">
                        <div className='mr-2 bg-[#A56EFF] rounded-xl h-10 w-10 flex justify-center items-center'>
                            <img src={badge} className='h-6 w-6'/>
                        </div>
                        <p className='hidden md:block plus-font font-semibold'>Personalized</p>
                    </div>
                    <div className="flex shrink grow justify-between items-center bg-[#3D4966] rounded-xl mr-4 text-white p-4 overflow-hidden">
                            <span className='bg-[#5D6A85] h-3 w-3 rounded-sm'></span>
                            <p className='plus-font font-semibold px-10'>Nutrition</p>
                            <span className='bg-[#5D6A85] h-3 w-3 rounded-sm'></span>
                            <p className='plus-font font-semibold px-10'>Mindfulness</p>
                            <span className='bg-[#5D6A85] h-3 w-3 rounded-sm'></span>
                            <p className='plus-font font-semibold px-10'>wellness</p>
                            <span className='bg-[#5D6A85] h-3 w-3 rounded-sm'></span>
                    </div>
                </div>
                <div className='flex justify-between items-center bg-[#0F67FE] rounded-xl my-8 p-4'>
                    <img src={plus}/>
                    <p className='plus-font font-semibold text-white'>Healthcare</p>
                    <img src={plus}/>
                </div>
                <div className='flex w-full mb-16'>
                    <div className="flex grow justify-center items-center bg-artificial-intelligence bg-[#3D4966] rounded-xl mr-4 text-white p-4 overflow-hidden">
                            <p className='plus-font font-semibold px-10'>Artificial Intelligence</p>
                    </div>
                    <div className="flex justify-center items-center bg-machine-learning bg-cover bg-[#8A3FFC] rounded-xl mr-4 text-white p-4">
                        <p className='plus-font font-semibold px-10 py-4'>Machine Learning</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row w-full justify-between'>
                    <h1 className='text-white max-w-md text-xl  mb-4 items-center md:text-4xl plus-font font-extrabold'>We create better health experience through AI/ML technology.</h1>
                    <div className='max-w-sm'>
                        <p className='text-[#DCE1E8] plus-font text-sm font-light'>We leverage AI and machine learning to create an accessible health experience for everyone on planet earth.</p>
                        <button className='flex w-full md:w-44 hover:scale-105 transition-all justify-center items-center cursor-pointer mt-8 border rounded-lg py-3 px-8 text-white plus-font font-semibold text-[12px]'>Learn More
                        <img src={learnMore} className='ml-3'/>
                        </button>
                       
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default AboutUs;
