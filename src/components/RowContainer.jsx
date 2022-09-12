import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

const RowContainer = ({ flag }) => {
    return (
        <div
            className={`w-full  ${
                flag ? 'overflow-x-scroll' : 'overflow-x-hidden'
            }`}
        >
            <div className="w-300 md:w-340 hover:drop-shadow-lg my-12 h-auto p-2 bg-cardOverlay rounded-md backdrop-blur-lg">
                <div className="w-full flex items-center justify-between">
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        className="w-40 -mt-8"
                        src="http://localhost:3000/static/media/c3.55f83414f33f66456b35.png"
                        alt="Food"
                    />
                    <motion.div
                        whileTap={{ scale: 0.75 }}
                        className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                    >
                        <MdShoppingBasket className="text-white" />
                    </motion.div>
                </div>
                <div className="w-full flex flex-col items-end justify-end">
                    <p className="text-textColor font-semibold md:text-lg text-base">
                        Kebab
                    </p>
                    <p className="mt-1 text-sm text-gray-500">45 Calories</p>
                    <div className="flex items-center gap-8 ">
                        <p className="text-lg text-textColor font-semibold ">
                            <span className="text-sm text-red-500">$</span> 5.25
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RowContainer;
