import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';

import Logo from './img/logo.png';
import Avatar from './img/avatar.png';

const Header = () => {
    return (
        <header className="w-screen fixed z-50 bg-slate-300 p-6 px-16">
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="w-10 object-cover" />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </div>
                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8 ">
                        {['Home', 'Menu', 'About Us', 'Service'].map((item, index) => (
                            <li
                                key={index}
                                className="text-base text-headingColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="relative flex items-center justify-center">
                        <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
                        <div className="w-5 h-5 absolute -top-2 -right-2 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-sm text-white font-semibold">2</p>
                        </div>
                    </div>

                    <img
                        src={Avatar}
                        alt="User Profile"
                        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl"
                    />
                </div>
            </div>
            {/* Mobile */}
            <div className="flex md:hidden w-full h-full"></div>
        </header>
    );
};

export default Header;
