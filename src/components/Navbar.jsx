import React, { useEffect, useState } from "react";
import logo from "../assets/samplelogo.jpg";
import { Link } from "react-scroll"; // Correct import for react-scroll Link
import { FaXmark, FaBars } from "react-icons/fa6";

function Navbar() {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isSticky, setisSticky] = useState(false);

    // Toggle menu function
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    };

    // Sticky navbar effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setisSticky(true);
            } else {
                setisSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Nav items array
    const navItems = [
        { name: "Home", path: "home" },
        { name: "Service", path: "service" },
        { name: "About Us", path: "aboutus" },
        { name: "Products", path: "products" },
        { name: "Reviews", path: "reviews" },
    ];

    return (
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
            <nav
                className={`py-4 lg:px-14 px-4  ${
                    isSticky
                        ? "sticky top-0 left-0 right-0 bg-white duration-300"
                        : ""
                }`}
            >
                <div className="flex justify-between items-center text-base gap-8">
                    {/*logo and name  */}
                    <a
                        href="#"
                        className="text-2xl flex items-center space-x-3"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-50 h-20 inline-block"
                        />
                    </a>

                    {/* Nav items for large screens */}
                    <ul className="hidden md:flex items-center space-x-12">
                        {navItems.map(({ name, path }, index) => (
                            <li key={index}>
                                <Link
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    className="block text-base text-zinc-600 hover:text-orange-600 "
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* btn for large devices */}
                    <div className="hidden lg:flex items-center space-x-12">
                        <button className="bg-orange-600 text-white py-2 px-6 transition-all duration-300 rounded-full hover:bg-gray-700">
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden  ">
                        <button
                            className=" text-naturalDGrey focus:outline-none focus:text-gray-500"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <FaXmark className="h-6 w-6 " />
                            ) : (
                                <FaBars className="h-6 w-6 " />
                            )}
                        </button>
                    </div>
                </div>

                {/* nav items for Mobile Menu */}
                <div
                    className={`md:hidden absolute top-full left-0 right-0 bg-gray-800 border-b ${
                        isMenuOpen ? "block" : "hidden"
                    }`}
                >
                    <ul className="px-4 py-6 space-y-4">
                        {navItems.map(({ name, path }, index) => (
                            <li key={index}>
                                <Link
                                    to={path} // Use react-scroll Link here
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    className="block text-base text-white hover:text-amber-800"
                                    onClick={() => setisMenuOpen(false)} // Close menu after clicking
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button className="w-full bg-amber-800 text-white py-2 px-6 transition-all duration-300 rounded-full hover:bg-gray-700">
                                Contact Us
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
