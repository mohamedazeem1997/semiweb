import React from "react";
import { Carousel } from "flowbite-react";
import banner from "../assets/banner.png";

const Home = () => {
    return (
        <div className="bg-red-200">
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
                <Carousel className="w-full mx-auto">
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img
                                className="w-full h-auto object-cover"
                                src={banner}
                                alt=""
                            />
                        </div>
                        {/* herotext */}
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-green-600 md:w-3/4 leading-snug">
                                IT Services & Product
                                <span className=" text-amber-800 leading-snug">
                                    More than 10 years
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 text-base mb-8">
                                We provide comprehensive IT solutions, services,
                                and products to meet your business needs.
                            </p>
                            <button className="px-7 py-2 bg-black text-white">
                                Register
                            </button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;
