import React, { useState } from 'react';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';

import Logo from './img/logo.png';
import Avatar from './img/avatar.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [isMenu, setIsMenu] = useState();

    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    const showCard = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    const login = async () => {
        if (!user) {
            const {
                user: { refreshToken, providerData },
            } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu);
        }
    };

    const logout = () => {
        setIsMenu(false);
        localStorage.clear();
        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
    };
    return (
        <header className="w-screen fixed z-50 bg-slate-300 p-3 px-4 md:p-6 md:px-16">
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="w-10 object-cover" />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link>
                <div className="flex items-center gap-8">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex items-center gap-8 "
                    >
                        {['Home', 'Menu', 'About Us', 'Service'].map(
                            (item, index) => (
                                <li
                                    key={index}
                                    className="text-base text-headingColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                                >
                                    {item}
                                </li>
                            ),
                        )}
                    </motion.ul>
                    <div
                        className="relative flex items-center justify-center"
                        onClick={showCard}
                    >
                        <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
                        {cartItems && cartItems.length > 0 && (
                            <div className="w-5 h-5 absolute -top-2 -right-2 rounded-full bg-cartNumBg flex items-center justify-center">
                                <p className="text-sm text-white font-semibold">
                                    {cartItems.length}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <motion.img
                            onClick={login}
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar}
                            alt="User Profile"
                            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer"
                        />
                        {isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className="w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 "
                            >
                                <Link
                                    to="/createItem"
                                    onClick={() => setIsMenu(false)}
                                >
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                                        New Item <MdAdd />
                                    </p>
                                </Link>
                                <p
                                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                                    onClick={logout}
                                >
                                    Logout <MdLogout />
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className="flex md:hidden w-full h-full items-center justify-between">
                <div
                    className="relative flex items-center justify-center"
                    onClick={showCard}
                >
                    <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
                    {cartItems && cartItems.length > 0 && (
                        <div className="w-5 h-5 absolute -top-2 -right-2 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-sm text-white font-semibold">
                                {cartItems.length}
                            </p>
                        </div>
                    )}
                </div>
                <Link to="/" className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="w-10 object-cover" />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link>
                <div className="relative">
                    <motion.img
                        onClick={login}
                        whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar}
                        alt="User Profile"
                        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer"
                    />
                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className="w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 "
                        >
                            <Link
                                to="/createItem"
                                onClick={() => setIsMenu(false)}
                            >
                                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                                    New Item <MdAdd />
                                </p>
                            </Link>
                            <ul className="flex flex-col">
                                {['Home', 'Menu', 'About Us', 'Service'].map(
                                    (item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => setIsMenu(false)}
                                            className="hover:bg-slate-200 text-base px-4 py-2 hover: text-headingColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                                        >
                                            {item}
                                        </li>
                                    ),
                                )}
                            </ul>
                            <p
                                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                                onClick={logout}
                            >
                                Logout <MdLogout />
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
