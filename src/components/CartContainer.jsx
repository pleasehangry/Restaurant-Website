import React from 'react';
import { motion } from 'framer-motion';
import { RiRefreshFill } from 'react-icons/ri';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { BiMinus, BiPlus } from 'react-icons/bi';

import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import emptyCart from './img/emptyCart.svg';
import { CartItem } from './';

const CartContainer = () => {
    const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
    console.log(cartItems);

    const showCard = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="fixed right-0 top-0 w-full md:w-375 h-screen bg-white drop-shadow-md
            flex flex-col z-[101]"
        >
            <div
                whiletap={{ scale: 0.75 }}
                className="w-full flex items-center justify-between p-4 cursor-pointer"
            >
                <motion.div whiletap={{ scale: 0.75 }} onClick={showCard}>
                    <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
                </motion.div>
                <p className="text-textColor text-lg font-semibold">Cart</p>
                <motion.p
                    whiletap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p1 px-2 bg-gray-200 rounded-md hover:shadow-md duration-100
                ease-in-out transition-all cursor-pointer text-textColor text-base"
                >
                    Clear <RiRefreshFill />
                </motion.p>
            </div>
            {/* bottom section */}
            {cartItems && cartItems.length > 0 ? (
                <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
                    <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3">
                        {/* card Item */}
                        {cartItems &&
                            cartItems.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                    </div>
                    {/* Cart total section */}
                    <div
                        className="w-full flex-1 bg-cartTotal round-t-[2rem] flex flex-col items-center
                justify-center px-8 py-2"
                    >
                        <div className="w-full flex items-center justify-between">
                            <p className="text-gray-400 text-lg">Sub Total</p>
                            <p className="text-gray-400 text-lg">$ 8.5</p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className="text-gray-400 text-lg">Delivery</p>
                            <p className="text-gray-400 text-lg">$ 2.5</p>
                        </div>
                        <div className="w-full border-b border-gray-600"></div>
                        <div className="w-full flex items-center justify-between">
                            <p className="text-gray-200 text-xl font-semibold">
                                Total
                            </p>
                            <p className="text-gray-200 text-xl font-semibold">
                                $11.5
                            </p>
                        </div>
                        <motion.button
                            whiletap={{ scale: 0.8 }}
                            type="button"
                            className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2
                        hover:shadow-lg"
                        >
                            Check out
                        </motion.button>
                    </div>
                </div>
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                    <img src={emptyCart} alt="" className="w-300" />
                    <p className="text-xl text-textColor font-semibold">
                        Add some items to your cart
                    </p>
                </div>
            )}
        </motion.div>
    );
};

export default CartContainer;
