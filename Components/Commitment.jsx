import React from 'react';
import p1 from '../Images/commitment1.png'
import p2 from '../Images/commitment2.png'
import p3 from '../Images/commitment3.png'
import p4 from '../Images/commitment4.png'
import p5 from '../Images/commitment5.png'
import p6 from '../Images/commitment6.png'
import sideArrow from '../Images/learnMore.png'
import learnmoreAdd from '../Images/learnmoreAdd.png'

const Commitment = () => {
    return (
        <div className='bg-[#F2F5F9] p-3'>
            <div className='bg-[#242E49] rounded-2xl p-10 md:p-16'>
                <div className='flex items-center'>
                    <div className='bg-[#0F67FE] h-3 w-3 rounded-sm'></div>
                    <h3 className='plus-font text-white ml-1 font-semibold text-[14px]'>Our Commitment</h3>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <h2 className='plus-font text-4xl font-bold text-white mt-4'>Why Choose asklepios?</h2>
                    <span className='h-20 w-28 py-1 mt-4 md:mt-0 plus-font text-[10px] md:text-[12px] uppercase px-4 rounded-lg border border-white flex items-center text-white'>6  benefits</span>
                </div>
                <div className='mt-10  p-6 md:p-0 md:grid md:grid-cols-3 w-full gap-4 place-content-center'>
                    <div className='bg-[#3D4966] rounded-xl p-3 mt-5 md:mt-0'>
                        <div className=' bg-[#242E49] h-14 w-14 flex justify-center items-center rounded-xl'>
                            <img  src={p1}/>
                        </div>
                        
                        <div className='mt-10'>
                            <h4 className='text-white plus-font text-xl font-semibold'>Actionable Insights</h4>
                            <p className='text-[#BEC5D2] max-w-sm plus-font mt-3'>Asklepios leverages cutting-edge AI technology to offer personalized health assessments.</p>
                        </div>

                        <div className='mt-8 flex justify-between items-center'>
                            <p className='plus-font text-white font-medium text-[12px] uppercase'>Learn More</p>
                            <img src={sideArrow} className='h-6 w-6 ml-2'></img>  
                        </div>
                    </div> 
                    <div className='bg-[#3D4966] rounded-xl p-3 mt-5 md:mt-0'>
                        <div className=' bg-[#242E49] h-14 w-14 flex justify-center items-center rounded-xl'>
                            <img  src={p2}/>
                        </div>
                        
                        <div className='mt-10'>
                            <h4 className='text-white plus-font text-xl font-semibold'>Personalized AI Healthcare</h4>
                            <p className='text-[#BEC5D2] max-w-sm plus-font mt-3 md:line-clamp-2'>Our platform simplifies the healthcare journey. From booking appointments to accessing your health records.</p>
                        </div>

                        <div className='mt-8 flex justify-between items-center'>
                            <p className='plus-font text-white font-medium text-[12px] uppercase'>Learn More</p>
                            <img src={sideArrow} className='h-6 w-6 ml-2'></img>  
                        </div>
                    </div> 
                    <div className='bg-[#3D4966] rounded-xl p-3 mt-5 md:mt-0'>
                        <div className=' bg-[#242E49] h-14 w-14 flex justify-center items-center rounded-xl'>
                            <img  src={p3}/>
                        </div>
                        
                        <div className='mt-10'>
                            <h4 className='text-white plus-font text-xl font-semibold'>Streamlined Experience</h4>
                            <p className='text-[#BEC5D2] max-w-sm plus-font mt-3'>We believe in the power of data. Asklepios provides data-driven insights that help you.</p>
                        </div>

                        <div className='mt-8 flex justify-between items-center'>
                            <p className='plus-font text-white font-medium text-[12px] uppercase'>Learn More</p>
                            <img src={sideArrow} className='h-6 w-6 ml-2'></img>  
                        </div>
                    </div>
                    <div className='bg-[#3D4966] rounded-xl p-3 mt-5 md:mt-0'>
                        <div className=' bg-[#242E49] h-14 w-14 flex justify-center items-center rounded-xl'>
                            <img  src={p4}/>
                        </div>
                        
                        <div className='mt-10'>
                            <h4 className='text-white plus-font text-xl font-semibold'>Seamless Communication</h4>
                            <p className='text-[#BEC5D2] max-w-sm plus-font mt-3'>We bridge the gap between patients and healthcare providers. Our platform enables.</p>
                        </div>

                        <div className='mt-8 flex justify-between items-center'>
                            <p className='plus-font text-white font-medium text-[12px] uppercase'>Learn More</p>
                            <img src={sideArrow} className='h-6 w-6 ml-2'></img>  
                        </div>
                    </div>
                    <div className='bg-[#3D4966] rounded-xl p-3 mt-5 md:mt-0'>
                        <div className=' bg-[#242E49] h-14 w-14 flex justify-center items-center rounded-xl'>
                            <img  src={p5}/>
                        </div>
                        
                        <div className='mt-10'>
                            <h4 className='text-white plus-font text-xl font-semibold'>Trusted by Professionals</h4>
                            <p className='text-[#BEC5D2] max-w-sm plus-font mt-3'>Asklepios is trusted by both healthcare professionals and pharmaceutical companies.</p>
                        </div>

                        <div className='mt-8 flex justify-between items-center'>
                            <p className='plus-font text-white font-medium text-[12px] uppercase'>Learn More</p>
                            <img src={sideArrow} className='h-6 w-6 ml-2'></img>  
                        </div>
                    </div>
                    <div className='bg-[#3D4966] rounded-xl p-3 mt-5 md:mt-0'>
                        <div className=' bg-[#242E49] h-14 w-14 flex justify-center items-center rounded-xl'>
                            <img  src={p6}/>
                        </div>
                        
                        <div className='mt-10'>
                            <h4 className='text-white plus-font text-xl font-semibold'>Trusted by Professionals</h4>
                            <p className='text-[#BEC5D2] max-w-sm plus-font mt-3'>Asklepios is trusted by both healthcare professionals and pharmaceutical companies.</p>
                        </div>

                        <div className='mt-8 flex justify-between items-center'>
                            <p className='plus-font text-white font-medium text-[12px] uppercase'>Learn More</p>
                            <img src={sideArrow} className='h-6 w-6 ml-2'></img>  
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                        <button className='bg-[#0F67FE] px-4 py-4 mt-8 flex items-center justify-center transition-all hover:scale-105 shadow-lg rounded-lg text-white plus-font text-[12px]'>
                                View All Benefits
                                <img src={learnmoreAdd} className='h-4 w-4 ml-2'></img>   
                        </button> 
                </div>
            </div>
        </div>
    );
}

export default Commitment;
