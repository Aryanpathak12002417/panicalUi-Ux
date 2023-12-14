import React from 'react';
import fram1 from '../Images/frame1.png'
import frame2 from '../Images/frame2.png'
import frame3 from '../Images/frame3.png'
import checkbox from '../Images/checkbox.png'
import learnmoreAdd from '../Images/learnmoreAdd.png'

const Feature = () => {
    return (
        <div className='p-5 bg-[#F2F5F9]'>
            <div className='bg-white rounded-xl'>
                <h3 className='text-3xl md:text-5xl plus-font text-[#242E49] font-extrabold text-center p-5 md:p-10'>Our Core Features</h3>
                

                <div className='flex justify-center mt-15'>
                    <div className='md:grid md:gap-4 md:grid-cols-2 w-[70%] mt-5 flex flex-col'>
                        <div className='flex justify-end px-10 rounded-lg object-contain'>
                            <img src={fram1} className='h-full w-full object-cover rounded-lg'/>
                        </div>
                        <div className='px-10 mt-5 md:mt-0'>
                            <span className='text-[#3D4966] mb-3 plus-font text-[12px] font-semibold p-2 border-[#3D4966] border-2 rounded-md'>Feature 1</span>
                            <h3 className='mt-10 plus-font text-[#242E49] text-3xl mb-4 font-bold'>AI Health Analytics</h3>
                            <p className='max-w-sm plus-font text-[#5D6A85]'>We provide multiple AI Health analytics system for to ensure patient health is our priority. Here’s a few health metrics that we measure</p>
                            <ul className='mt-4'>
                            <li className='flex w-full py-1'>
                                <img src={checkbox} className='h-5 w-5'/>
                                <p className='plus-font uppercase plus-font text-[12px] font-semibold tracking-wider text-[#242E49]'>symptom checker</p>
                            </li>
                            <li className='flex py-1'>
                                <img src={checkbox} className='h-5 w-5'/>
                                <p className='plus-font uppercase plus-font text-[12px] font-semibold tracking-wider text-[#242E49]'>health risk assessment</p>
                            </li>
                            <li className='flex py-1'>
                                <img src={checkbox} className='h-5 w-5'/>
                                <p className='plus-font uppercase plus-font text-[12px] font-semibold tracking-wider text-[#242E49]'>chronic condition monitoring</p>
                            </li>
                        </ul>

                        <button className='bg-[#0F67FE] px-4 py-4 mt-8 flex items-center justify-center transition-all hover:scale-105 shadow-lg rounded-lg text-white plus-font text-[12px]'>
                            Learn more
                            <img src={learnmoreAdd} className='h-4 w-4 ml-2'></img>   
                        </button>   

                        </div>
                    </div>
                </div>

                <div className='flex justify-center mt-15'>
                    <div className='md:grid md:gap-4 md:grid-cols-2 w-[70%] mt-5 flex flex-col-reverse'>
                        <div className='flex justify-center w-full'>
                        <div className='px-10 mt-5 md:mt-0'>
                            <span className='text-[#3D4966] mb-3 plus-font text-[12px] font-semibold p-2 border-[#3D4966] border-2 rounded-md'>Feature 2</span>
                            <h3 className='mt-10 plus-font text-[#242E49] text-3xl mb-4 font-bold'>Wellness AI Chatbot</h3>
                            <p className='max-w-sm plus-font text-[#5D6A85]'>Say goodbye to healthcare 2.0 because we have wellness AI Chatbot technology at your fingertips. Experience it today, for free.</p>
                            
                            <div className='flex mt-10'>
                                <div>
                                    <span className='plus-font text-4xl font-semibold text-[#242E49]'>0.014</span>
                                    <div className='plus-font text-[#5D6A85] text-[14px]'>Response Speed</div>
                                </div>
                                <div className=' ml-10 md:ml-16'>
                                    <span className='plus-font text-4xl font-semibold text-[#242E49]'>50M+</span>
                                    <div className='plus-font text-[#5D6A85] text-[14px]'>LLM Datas</div>
                                </div>
                            </div>


                            <button className='bg-[#0F67FE] px-4 py-4 mt-8 flex items-center justify-center transition-all hover:scale-105 shadow-lg rounded-lg text-white plus-font text-[12px]'>
                                Learn more
                                <img src={learnmoreAdd} className='h-4 w-4 ml-2'></img>   
                            </button>   

                        </div>
                        </div>
                        <div className='flex justify-start px-10 rounded-lg w-full'>
                            <img src={frame2} className='h-full w-full object-cover rounded-lg'/>
                        </div>
                    </div>
                </div>


                <div className='flex justify-center mt-12 md:mt-16'>
                    <div className='md:grid md:gap-4 md:grid-cols-2 w-[70%] mt-5 flex flex-col'>
                        <div className='flex justify-end px-10 rounded-lg object-contain'>
                            <img src={frame3} className='h-full w-full object-cover rounded-lg'/>
                        </div>
                        <div className='px-10 mt-5 md:mt-0'>
                            <span className='text-[#3D4966] mb-3 plus-font text-[12px] font-semibold p-2 border-[#3D4966] border-2 rounded-md'>Feature 3</span>
                            <h3 className='mt-10 plus-font text-[#242E49] text-3xl mb-4 font-bold'>Predictive Health & Anomaly Detection</h3>
                            <p className='max-w-sm plus-font text-[#5D6A85]'>Our anomaly detection technology detects any abnormalities from your health, backed with asklepios AI technology.</p>
                            
                            <div className='mt-10 flex justify-between'>
                                <span className='plus-font text-[12px] font-bold text-[#242E49]'>Accuracy</span>
                                <span className='plus-font text-[12px] font-bold text-[#242E49]'>99.487%</span>
                            </div>
                            <div className='bg-slate-200'>
                            <div className='my-2 bg-[#0F67FE] w-[92%] h-[4px]'></div>
                            </div>

                            <button className='bg-[#0F67FE] px-4 py-4 mt-8 md:mt-10 flex items-center justify-center transition-all hover:scale-105 shadow-lg rounded-lg text-white plus-font text-[12px]'>
                                Learn more
                                <img src={learnmoreAdd} className='h-4 w-4 ml-2'></img>   
                            </button>   
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default Feature;
