import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoFastFood } from 'react-icons/io5';

import { categories } from '../utils/data';

const MenuContainer = () => {
    const [filter, setFilter] = useState('chicken');

    return (
        <section className="w-full my-6" id="menu">
            <div className="w-full flex flex-col items-center justify-center">
                <p
                    className="text-2xl font-semibold text-headingColor 
                        uppercase relative 
                        before:absolute before:rounded-lg
                        before:content before:w-32 before:h-1
                        before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400
                        to-orange-600 transition-all
                        ease-in-out duration-100 mr-auto"
                >
                    Our Hot Dishes
                </p>
                <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll ">
                    {categories.map((item) => (
                        <motion.div
                            whileTap={{ scale: 0.7 }}
                            onClick={() => setFilter(item.urlParamName)}
                            key={item.id}
                            className={`group ${
                                filter === item.urlParamName
                                    ? 'bg-cartNumBg'
                                    : 'bg-card'
                            } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg
                            flex flex-col hover:bg-red-500 justify-center items-center`}
                        >
                            <div
                                className={`w-10 h-10 rounded-full ${
                                    filter === item.urlParamName
                                        ? 'bg-card'
                                        : 'bg-cartNumBg'
                                } group-hover:bg-card flex items-center justify-center`}
                            >
                                <IoFastFood
                                    className={`${
                                        filter === item.urlParamName
                                            ? 'text-textColor'
                                            : 'text-white'
                                    } group-hover:text-textColor text-lg`}
                                />
                            </div>
                            <p
                                className={`text-sm ${
                                    filter === item.urlParamName
                                        ? 'text-white'
                                        : 'text-textColor'
                                } group-hover:text-card`}
                            >
                                {item.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuContainer;
