import React from 'react'
import Images from '../Constand';
import { useState } from 'react';
const NavBar = () => {

    let Links = [
        { name: "Home", link: "/home" },
        { name: "Products", link: "/products" },
        // { name: "ItemsList", link: "./items" },
        { name: "Login", link: "/login" },
        { name: " Sign In", link: "/signin" },
        { name: "Contact Us", link: "/contact" }, 
        { name: "Games", link: "/tictactoe" }, 
        
    ];
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className='p-3 bg-white shadow md:flex md:items-center md:justify-between'>
                <div className='flex justify-between items-center'>
                    <span className='text-3xl font-[Poppins] cursor-pointer'>
                        <a href='/home'><img className='h-10 inline' src={Images.nike} /></a>
                    </span>

                </div>
                <div onClick={() => setOpen(!open)}
                    className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[3] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'} md:opacity-100 opacity- `}>
                    {
                        Links.map((link, index) => (
                            <li key={index} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a style={{ textDecoration: "none" }} className='text-xl text-gray-700 hover:text-cyan-500 duration-500' href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }
                    <button className='bg-cyan-400 text-white font-[Pippins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded'>
                        LogOut
                    </button>
                </ul>
            </nav>

        </div>
    )
}

export default NavBar
