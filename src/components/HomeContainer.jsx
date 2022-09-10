import React from 'react';
import Delivery from './img/delivery.png';
import HeroBg from './img/heroBg.png';
import I1 from './img/i1.png';
import F1 from './img/f1.png';
import C3 from './img/c3.png';
import Fi1 from './img/fi1.png';

const heropData = [
    { id: 1, name: 'Icecream', decp: 'Chocolate & vanilla', price: '5.25', imgSrc: I1 },
    { id: 2, name: 'Strawberry', decp: 'Fresh Strawberry', price: '10.25', imgSrc: F1 },
    { id: 3, name: 'Chicken Kebab', decp: 'Mixed Kebab Plate', price: '8.25', imgSrc: C3 },
    { id: 4, name: 'Fish', decp: 'Mixed Fish kebab', price: '5.25', imgSrc: Fi1 },
];

const HomeContainer = () => {
    return (
        <section id="home" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
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
            <div className="py-2 flex-1 flex items-center relative">
                <img className="ml-auto h-420 w-full lg:w-auto lg:h-650" src={HeroBg} alt="Hero bg" />
                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-16 py-4 gap-4 flex-wrap">
                    {heropData &&
                        heropData.map((n) => (
                            <div
                                key={n.id}
                                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                            >
                                <img src={n.imgSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20 " alt="I1" />
                                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                                    {n.name}
                                </p>

                                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                                    {n.decp}
                                </p>

                                <p className="text-sm font-semibold text-headingColor">
                                    <span className="text-xs text-red-600">$</span> {n.price}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default HomeContainer;
