import React from 'react';
import logo from '../Images/bluelogo.png'
import camera from '../Images/monotonixAdd.png'
import message from '../Images/messageIcon.png'
import menu from '../Images/mainMenu.png'
import blackMenu from '../Images/blackmonotac.png'

const Navbar = () => {
    return (
        <nav className='flex justify-between p-4 items-center'>
            <div className='p-3 cursor-pointer shadow-xl transition-all hover:scale-105 rounded-xl bg-[#FFFFFF]'>
                <img className='h-10 w-10' src={logo}/>
            </div>
            <div>
                <ul className='hidden md:flex'>
                    <li className='p-5  ml-3 rounded-xl bg-[#FFFF] transition-all hover:scale-105 cursor-pointer shadow-xl'>
                        <img src={camera} className='h-5 w-5'/>
                    </li>
                    <li className='p-5 ml-3 rounded-xl bg-[#FFF] transition-all hover:scale-105 cursor-pointer shadow-xl'>
                        <img src={message} className='h-5 w-5'/>
                    </li>
                    <li className='p-4 ml-3 cursor-pointer rounded-xl transition-all hover:scale-105 shadow-xl bg-[#0F67FE] flex items-center'>
                        <p className='text-white plus-font text-[12px] font-semibold'>Main Menu</p>
                        <img src={menu} className='pl-3 h-[18px]'/>
                    </li>
                </ul>
                <li className='  transition-all hover:scale-105 md:hidden shadow-xl cursor-pointer p-4 ml-3 rounded-xl bg-[#FFF] flex items-center'>
                        <p className='text-black plus-font text-[14px] font-semibold'>Menu</p>
                        <img src={blackMenu} className='pl-3 h-[18px]'/>
                    </li>
            </div>
        </nav>
    );
}

export default Navbar;
