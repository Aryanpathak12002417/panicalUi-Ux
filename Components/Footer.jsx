import React from 'react';
import plus from '../Images/plus.png'
import fb from '../Images/facebook.png'
import yt from '../Images/youtube.png'
import ig from '../Images/instagram.png'
import ld from '../Images/linkedin.png'
import download from '../Images/downloadIcon.png'

const Footer = () => {
    return (
        <div className='bg-[#F2F5F9] p-4 pb-0'>
            <div className='bg-[#242E49] rounded-xl'>
                <div className='flex flex-col items-center   rounded-2xl bg-footer-image bg-center bg-contain'>
                    <div className='bg-[#0F67FE] h-14 w-14 flex justify-center items-center rounded-lg mt-28 p-3'>
                        <img src={plus}/>
                    </div>


                    <div className='max-w-md plus-font text-[15px] text-white text-center mt-7'>
                    Revolutionizing The Personalized Health Industry through the power of AI Technology and Machine Learning.
                    </div>

                    <ul className='flex flex-col md:flex-row mt-24'>
                        <li className='plus-font font-semibold cursor-pointer transition-all hover:scale-105 hover:border-b text-[#FFFFFF] text-xl mx-9'>Homepage</li>
                        <li className='plus-font font-semibold cursor-pointer transition-all hover:scale-105 text-[#5D6A85] text-xl mx-9'>Services</li>
                        <li className='plus-font font-semibold cursor-pointer transition-all hover:scale-105 text-[#5D6A85] text-xl mx-9'>Platform</li>
                        <li className='plus-font font-semibold cursor-pointer transition-all hover:scale-105 text-[#5D6A85] text-xl mx-9'>About Us</li>
                        <li className='plus-font font-semibold cursor-pointer transition-all hover:scale-105 text-[#5D6A85] text-xl mx-9'>Contact Us</li>
                    </ul>

                    <ul className='flex items-center mt-20'>
                        <li className='h-6 w-6 mx-5 cursor-pointer'>
                            <img src={fb}/>
                        </li>
                        <li className='h-6 w-6 mx-5 cursor-pointer'>
                            <img src={yt}/>
                        </li>
                        <li className='h-6 w-6 mx-5 cursor-pointer'>
                            <img src={ig}/>
                        </li>
                        <li className='h-6 w-6 mx-5 cursor-pointer'>
                            <img src={ld}/>
                        </li>
                    </ul>

                    <div className='flex items-center justify-around mt-16'>
                        <span className='plus-font text-[12px] text-white font-semibold mx-2'>Copyright© 2023 asklepios. inc</span>
                        <span className='h-2 w-2 bg-[#818BA0] mx-2'></span>
                        <span className='plus-font text-[12px] text-white font-semibold mx-2'>Privacy Policy</span>
                        <span className='h-2 w-2 bg-[#818BA0] mx-2'></span>
                        <span className='plus-font text-[12px] text-white font-semibold mx-2'>Terms & Conditions</span>
                    </div>


                </div> 
                <div className=' flex flex-col md:grid grid-cols-2 p-2 gap-2 mt-20 '>
                    <div className='bg-[#0F67FE] text-white flex justify-center items-center cursor-pointer plus-font p-2 px-5 rounded-md'>
                        Google play
                        <img src={download} className='h-5 w-5 ml-2'/>
                    </div>
                    <div className='bg-[#0F67FE] text-white flex justify-center items-center cursor-pointer plus-font p-2 px-5 rounded-md'>
                        App store
                        <img src={download} className='h-5 w-5 ml-2'/>
                    </div>
                </div>
            </div>       

            </div>
            
    );
}

export default Footer;
