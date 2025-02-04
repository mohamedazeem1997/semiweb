import React from "react";

function Services() {
    const products = [
        {
            id: 1,
            name: "Semi ERP",
            description:
                "Best POS, Invoicing, Inventory & Service management application for your growing business",
            image: "/src/assets/products/erp.png",
            site: "https://semierp.com/",
        },
        {
            id: 2,
            name: "Semi Co",
            description:
                "Convenience, speed, and a seamless shopping experience anytime, anywhere",
            image: "/src/assets/products/ecom.png",
            site: "https://semico.lk/",
        },
        {
            id: 3,
            name: "SemiGro",
            description:
                " fast, reliable, and hassle-free transportation of goods from sellers to customers",
            image: "/src/assets/products/delivery.png",
            site: "https://semigro.com/",
        },
    ];
    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl max-auto">
            <div className="text-center my-8">
                <h2 className="text-4xl text-orange-600 mb-2">Our Clients</h2>
                <p className="text-grey-600">
                    We have been working with 150+ clients
                </p>

                {/* clients logos */}
                <div className="my-12 flex flex-wrap justify-between item-center gap-8">
                    <img src="/src/assets/company/c2.png" alt="" />
                    <img src="/src/assets/company/c3.png" alt="" />
                    <img src="/src/assets/company/c4.png" alt="" />
                    <img src="/src/assets/company/c5.png" alt="" />
                    <img src="/src/assets/company/c6.png" alt="" />
                    <img src="/src/assets/company/c7.png" alt="" />
                    <img src="/src/assets/company/c8.png" alt="" />
                </div>

                {/* company services */}
                <div className="mt-20 md:w-1/2 mx-auto text-center ">
                    <h2 className="text-4xl text-zinc-600 mb-3">
                        Manage your Entire business in one single system
                    </h2>
                    <p className="text-zinc-600">Semicolans Suitable for</p>
                </div>

                {/* products cards */}
                <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-orange-600 transition-all duration-300 flex items-center justify-center h-full"
                        >
                            <div>
                                <div>
                                    <img
                                        className="bg-white h-14 w-14 mx-auto "
                                        src={product.image}
                                        alt=""
                                    />
                                </div>
                                <h4 className="text-2xl font-bold text-orange-600 mb-2 px-2">
                                    {product.name}
                                </h4>
                                <p className="text-sm text-zinc-600">
                                    {product.description}
                                </p>
                                <a
                                    href={product.site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 block"
                                >
                                    <button className="rounded-full px-8 py-2 bg-zinc-600 text-white hover:bg-gray-800 transition duration-300">
                                        Visit
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
