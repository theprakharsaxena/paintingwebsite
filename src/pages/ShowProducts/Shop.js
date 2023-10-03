import React from "react";
import { Helmet } from "react-helmet";
import { AiFillHeart } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

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

const Shop = () => {
  const navigate = useNavigate();

  function goToProductPage(id) {
    navigate(`/shop/${id}`);
  }

  return (
    <>
      <Helmet>
        <title>Shop - SLV Galleria</title>
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
          {/* <div className="flex justify-between items-center mb-[3%]">
            <h2 className="text-4xl font-serif">New Designs</h2>
            <Link
              to="/shop"
              className="px-9 py-3 border text-white bg-pink-500 hover:bg-gray-500"
            >
              Explore More
            </Link>
          </div> */}
          <div className="grid grid-cols-5 gap-3">
            <div className="flex flex-col border h-min bg-white">
              <h3 className="p-4 text-2xl font-bold font-serif">Filters</h3>
              <div className="border"></div>
              <div className="p-4">
                <h4 className="text-xl">Categories</h4>
                <div className="text-gray-500 p-2">
                  <h5>Current Category</h5>
                </div>
                <ul className="py-3 flex flex-col space-y-1.5">
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <p>Category 1</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <p>Category 2</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <p>Category 3</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <p>Category 4</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <p>Category 5</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <p>Category 6</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-4 bg-white border grid grid-cols-1">
              <div>
                <div className="text-sm px-4 pt-4 pb-1 flex flex-col space-y-2">
                  <h3 className="text-xl font-bold font-serif">
                    Showing result for "abstract painting"
                  </h3>
                  <div className="flex space-x-5">
                    <h4 className="font-bold">Sort By</h4>
                    <ul className="flex space-x-4">
                      <li className="hover:underline underline-offset-8 hover:text-pink-900 cursor-pointer">
                        Relevance
                      </li>
                      <li className="hover:underline underline-offset-8 hover:text-pink-900 cursor-pointer">
                        Popularity
                      </li>
                      <li className="hover:underline underline-offset-8 hover:text-pink-900 cursor-pointer">
                        Price -- Low to High
                      </li>
                      <li className="hover:underline underline-offset-8 hover:text-pink-900 cursor-pointer">
                        Price -- High to Low
                      </li>
                      <li className="hover:underline underline-offset-8 hover:text-pink-900 cursor-pointer">
                        Newest First
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border"></div>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-4">
                {data.map(
                  ({ image, title, creator, featured, price }, index) => {
                    return (
                      <div
                        onClick={() => goToProductPage(index)}
                        className="flex flex-col space-y-5 mb-10 p-1 hover:p-0 cursor-pointer"
                        key={index}
                      >
                        <div className="bg-pink-50 border border-pink-200 p-5 hover:bg-pink-200 relative">
                          <div className="h-[250px] w-auto flex items-center justify-center">
                            <img
                              src={`/images/${image}`}
                              alt={title}
                              className="h-[250px]"
                            />
                          </div>
                          <div className="absolute bottom-0 right-0 flex flex-col text-pink-900 items-center p-0.5 space-y-2">
                            <Link>
                              <AiFillHeart className="text-3xl p-1 rounded bg-black/20 hover:bg-white" />
                            </Link>
                            <Link>
                              <FaEye className="text-[30px] p-1 rounded bg-black/20 hover:bg-white" />
                            </Link>
                            <Link>
                              <BiCartAdd className="text-3xl p-1 rounded bg-black/20 hover:bg-white" />
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl mb-1">{title}</h3>
                          <div className="flex space-x-2 font-serif">
                            <h4 className="text-pink-600">Creator:</h4>
                            <p>{creator}</p>
                          </div>
                          <div className="flex space-x-2 font-serif">
                            <h4 className="text-pink-600">Featured in:</h4>
                            <p>{featured}</p>
                          </div>
                          <div className="flex space-x-2 font-serif">
                            <h4 className="text-pink-600">Price:</h4>
                            <span>&#8377; {price}</span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Shop;
