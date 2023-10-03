import React from "react";
import { Helmet } from "react-helmet";
import { BsFillCircleFill } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";

const data = [
  {
    image: "vaseofflower.jpg",
    title: "Vase of Flowers",
    creator: "Jan Davidsz de Heem",
    featured: "Arts & Culture",
    price: 1000.0,
  },
  {
    image: "adriana.jpg",
    title: "Palace of Versailles",
    creator: "Adrianna geo",
    featured: "Arts & Culture",
    price: 1500.0,
  },
  {
    image: "bird.jpg",
    title: "Fantail Wrens",
    creator: "Henry de",
    featured: "Arts & Culture",
    price: 700.0,
  },
  {
    image: "vaseofflower.jpg",
    title: "Vase of Flowers",
    creator: "Jan Davidsz de Heem",
    featured: "Arts & Culture",
    price: 1000.0,
  },
  {
    image: "adriana.jpg",
    title: "Palace of Versailles",
    creator: "Adrianna geo",
    featured: "Arts & Culture",
    price: 1500.0,
  },
  {
    image: "bird.jpg",
    title: "Fantail Wrens",
    creator: "Henry de",
    featured: "Arts & Culture",
    price: 700.0,
  },
];

const Orders = () => {
  return (
    <>
      <Helmet>
        <title>Orders - SLV Galleria</title>
        <meta
          name="description"
          content="Explore our wide range of products in our online shop. Find high-quality items, browse different categories, and make a purchase conveniently."
        />
        <meta
          name="keywords"
          content="shop, online shop, products, browse, categories, purchase"
        />
      </Helmet>
      <div>
        <div className="p-9 bg-black"></div>
        <section className="py-3 px-[1%] bg-gray-200">
          <div className="grid md:grid-cols-12 gap-3">
            <div className="hidden md:flex md:col-span-4 lg:col-span-3 flex-col border h-min bg-white">
              <h3 className="p-4 text-2xl font-bold font-serif">Filters</h3>
              <div className="border"></div>
              <div className="p-4">
                <h4 className="text-xl">ORDER TIME</h4>
                <div className="text-gray-500 p-2">
                  <h5>Current ORDER TIME</h5>
                </div>
                <ul className="py-3 flex flex-col space-y-1.5">
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <p>Last 30 days</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <p>Last 3 Months</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <p>Last 6 Months</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <p>Last 9 Months</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <p>2022</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <p>2021</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 h-min">
              {data.map(({ image, title, creator, featured, price }, index) => {
                return (
                  <div
                    className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-3 p-4 border border-gray-300 hover:shadow-lg cursor-pointer bg-white rounded-lg"
                    key={index}
                  >
                    <div className="flex items-center justify-center">
                      <img
                        src={`/images/${image}`}
                        alt=""
                        className="h-[80px]"
                      />
                    </div>
                    <div className="col-span-2">
                      <h3 className="text-xl mb-1">{title}</h3>
                      <div className="flex space-x-2 font-serif">
                        <h4 className="text-sm text-pink-600">Creator:</h4>
                        <p className="text-sm">{creator}</p>
                      </div>
                      <div className="flex space-x-2 font-serif">
                        <h4 className="text-sm text-pink-600">Featured in:</h4>
                        <p className="text-sm">{featured}</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2 font-serif">
                      <h4 className="text-xl text-pink-600">Price:</h4>
                      <span className="text-xl">&#8377; {price}</span>
                    </div>
                    <div className="col-span-2 flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="text-green-500 text-xs">
                          {index % 2 == 0 ? (
                            <FaRegCircle />
                          ) : (
                            <BsFillCircleFill />
                          )}
                        </div>
                        <h5>Delivered on June 10</h5>
                      </div>
                      <p className="text-xs">Your item has been delivered</p>
                      <div className="flex items-center space-x-2 text-blue-500">
                        <IoStarSharp className="" />
                        <h5 className="text-sm font-medium">
                          Rate & Review Product
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Orders;
