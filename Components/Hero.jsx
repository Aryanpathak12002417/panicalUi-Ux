import React from 'react';
import download from '../Images/downloadIcon.png';
import iphone from '../Images/iphoneHero.png'
import bloodPressure from '../Images/bloodPressure.png'
import smartHealthCard from '../Images/smartHealthCard.png'
import ageLogo from '../Images/ageLogo.png'
import Navbar from './Navbar';

const Hero = () => {
    return (
        <section className='h-screen shadow-inner-2xl bg-none md:bg-hero-background bg-cover bg-[#F2F5F9] relative mb-36 md:mb-0'>
            <Navbar/>
            <div className='flex flex-col md:grid grid-cols-2 auto-cols-min gap-4 mt-10 p-10 pb-0'>
                <div className='flex justify-center px-10'>
                    <div className='max-w-sm'>
                        <h1 className='text-[#242E49] text-4xl  mb-4 md:text-6xl plus-font font-extrabold'>Personalized AI Wellness & Healthcare</h1>
                        <h3 className='text-[#5D6A85] plus-font'>asklepios provides personalized healthcare AI analytics to help you empower your health.</h3>
                        <h3 className='text-[#5D6A85] plus-font mt-8'>Trusted by over <span className='font-extrabold'>400,000</span> users and counting.</h3>
                        <button className='hidden  transition-all hover:scale-105 md:flex z-10 shadow-md justify-center px-10 py-3 rounded-lg mt-10 text-white plus-font text-[12px] bg-[#0F67FE]'>
                            Download
                            <img className='h-4 w-4 ml-2' src={download}/>
                        </button>
                        <button className='flex md:hidden w-full z-10 shadow-md justify-center px-10 py-3 rounded-lg mt-10 text-white plus-font text-[12px] bg-[#0F67FE]'>
                            Download
                            <img className='h-4 w-4 ml-2' src={download}/>
                        </button>
                    </div>
                </div>
                <div className='md:flex justify-center hidden'>
                    <div className='relative flex justify-center'>
                        <img src={iphone} className='h-[50%] md:h-[76vh]'/>
                        <img src={bloodPressure} className=' hidden transition-all hover:scale-105 md:block h-40 absolute top-[60%] left-[-35px] z-10'/>
                        <img src={smartHealthCard} className=' hidden transition-all hover:scale-105 md:block h-44 absolute top-[17%] right-[-50px]'/>
                        <img src={ageLogo} className='hidden transition-all hover:scale-105 md:block h-28 absolute top-[65%] right-[-70px] z-10'/>
                    </div>
                </div>
            </div>

            <div className=' md:hidden p-2 pt-14 bg-[#F2F5F9] bg-hero-background bg-cover bg-bottom w-full'>
                <div className='flex justify-center'>
                    <img src={iphone} className='h-[44vh]'/>
                </div>   
            </div>
        </section>
    );
}


export default Hero;
