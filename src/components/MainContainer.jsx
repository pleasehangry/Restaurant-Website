import React from 'react';
import Delivery from './img/delivery.png';

const MainContainer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="py-2 flex-1 flex flex-col items-center md:items-start md:justify-start justify-center gap-6">
                <div className="flex items-center rounded-full gap-2 justify-center bg-orange-100 px-4 py-1">
                    <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
                    <div className="w-8 h-8 rounded-full overflow-hi bg-white drop-shadow-md">
                        <img src={Delivery} alt="Delivery" className="w-full h-full object-contain rounded-full" />
                    </div>
                </div>
                <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
                    The Fastest Delivery in
                    <span className="text-orange-600 text-[3rem] lg:text-[5rem]">Your City</span>
                </p>
                <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
                    Inspirational designs, illustrations, and graphic elements from the world’s best designers. Want
                    more inspiration? Browse our search results...
                </p>

                <button
                    type="button"
                    className="bg-gradient-to-tr
                     from-orange-400
                     to-orange-500
                     w-full px-4 py-2
                     rounded-lg hover:shadow-lg 
                     transition-all ease-in-out 
                     duration-100 md:w-auto
                     "
                >
                    Order Now
                </button>
            </div>
            <div className="py-2 flex-1"></div>
        </div>
    );
};

export default MainContainer;
