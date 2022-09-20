import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiMinus, BiPlus } from 'react-icons/bi';

import { useStateValue } from '../context/StateProvider';
import { useEffect } from 'react';
import { actionType } from '../context/reducer';

const CartItem = ({ item }) => {
    const [qty, setQty] = useState(2);

    const [{ cartItems }, dispatch] = useStateValue();

    const cardDispatch = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        });
        localStorage.setItem('cartItems', JSON.stringify(items));
    };

    const [items, setItems] = useState([]);

    const updateQty = (action, id) => {
        if (action == 'add') {
            setQty(qty + 1);
            cartItems.map((item) => {
                if (item.id === id) {
                    item.qty += 1;
                }
            });
            cardDispatch();
        }
        if (action == 'remove') {
            if (qty == 1) {
                setItems(cartItems.filter((item) => item.id !== id));
                cardDispatch();
            } else {
                setQty(qty - 1);
                cartItems.map((item) => {
                    if (item.id === id) {
                        item.qty -= 1;
                    }
                });
                cardDispatch();
            }
        }
    };

    useEffect(() => {
        setItems(cartItems);
    }, [qty]);

    return (
        <div className="w-full p-1 px2 rounded-lg bg-cartItem flex items-center gap-2">
            <img
                src={item?.imageURL}
                alt=""
                className="w-20 h-20 max-w-[60px] rounded-full object-contain"
            />
            {/* name section */}
            <div className="flex flex-col gap-2">
                <p className="text-base text-gray-50">{item?.title}</p>
                <p className="text-sm block text-gray-300 font-semibold">
                    $ {item?.price * qty}
                </p>
            </div>
            {/* button section */}
            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                <motion.div
                    onClick={() => updateQty('remove', item?.id)}
                    whiletap={{ scale: 0.75 }}
                >
                    <BiMinus className="text-gray-50" />
                </motion.div>

                <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                    {qty}
                </p>

                <motion.div
                    onClick={() => updateQty('add', item?.id)}
                    whiletap={{ scale: 0.75 }}
                >
                    <BiPlus className="text-gray-50" />
                </motion.div>
            </div>
        </div>
    );
};

export default CartItem;
