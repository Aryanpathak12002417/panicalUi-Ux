import React from 'react';
import patience from '../Images/patience.png'
import provide from '../Images/provider.png'
import pharma from '../Images/pharma.png'
import professional from '../Images/professionals.png'
import sideArrow from '../Images/sideArrow.png'

const Service = () => {
    return (
        <div className='bg-[#F2F5F9] p-5 pb-8'>
            <div className='flex flex-col items-center h-full w-full p-y-5'>
            <span className=' w-48 flex justify-center items-center mt-8 border-2  border-[#5D6A85] rounded-lg py-3 px-8 text-[#5D6A85] plus-font font-semibold text-[12px]'>Our Service</span>
            <h3 className='text-[#242E49] mt-5 text-3xl text-center mb-5 items-center md:text-5xl plus-font font-extrabold'>Who We Serve</h3>

            <div className='w-[70vw]'>
            <div className='flex flex-col items-center md:grid md:grid-cols-2 gap-4 mb-4'>
                    <div className='flex justify-center md:justify-end'>
                        <div className='bg-white rounded-xl p-10 w-[80%]'>
                            <div className='h-12 w-12 bg-[#EDF5FF] rounded-lg flex justify-center items-center mb-4'>
                                <span className=''>
                                    <img src={patience} className='h-5   w-5'/>
                                </span>
                            </div>

                            <div className='flex justify-between items-center transition-all hover:scale-105'>
                                <h5 className='plus-font text-xl font-semibold mt-2'>Patients</h5>
                                <img src={sideArrow}/>
                            </div>
                            <div className='mt-2 max-w-[80%] plus-font text-sm'>
                            At Asklepios, we empower patients with personalized healthcare solutions, helping them make informed choices.
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-white rounded-xl p-10 w-[80%]'>
                            <div className='h-12 w-12 bg-[#EDF5FF] rounded-lg flex justify-center items-center mb-4'>
                                <span className=''>
                                    <img src={provide} className='h-5 w-5'/>
                                </span>
                            </div>

                            <div className='flex justify-between items-center'>
                                <h5 className='plus-font text-xl font-semibold mt-2 transition-all hover:scale-105'>Providers</h5>
                                <img src={sideArrow}/>
                            </div>
                            <div className='mt-2 max-w-[80%] plus-font text-sm'>
                            Asklepios supports healthcare providers with advanced tools and insights to streamline patient interactions.
                            </div>
                    </div>
                </div>



                <div className='flex flex-col items-center md:grid md:grid-cols-2 gap-4 mb-4'>
                    <div className='flex justify-center md:justify-end'>
                        <div className='bg-white rounded-xl p-10 w-[80%]'>
                            <div className='h-12 w-12 bg-[#EDF5FF] rounded-lg flex justify-center items-center mb-4'>
                                <span className=''>
                                    <img src={professional} className='h-5   w-5'/>
                                </span>
                            </div>

                            <div className='flex justify-between items-center transition-all hover:scale-105'>
                                <h5 className='plus-font text-xl font-semibold mt-2'>Professional</h5>
                                <img src={sideArrow}/>
                            </div>
                            <div className='mt-2 max-w-[80%] plus-font text-sm'>
                            We offerhealthcare professionals access to cutting-edge AI-driven health assessments and data analytics.
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-white rounded-xl p-10 w-[80%]'>
                            <div className='h-12 w-12 bg-[#EDF5FF] rounded-lg flex justify-center items-center mb-4'>
                                <span className=''>
                                    <img src={pharma} className='h-5 w-5'/>
                                </span>
                            </div>

                            <div className='flex justify-between items-center'>
                                <h5 className='plus-font text-xl font-semibold mt-2 transition-all hover:scale-105'>Pharma</h5>
                                <img src={sideArrow}/>
                            </div>
                            <div className='mt-2 max-w-[80%] plus-font text-sm'>
                            We provide valuable data insights to pharmaceutical companies, aiding research and development efforts.
                            </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
}

export default Service;
