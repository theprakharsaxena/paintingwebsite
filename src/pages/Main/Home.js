import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { BiMessageDetail, BiCategory } from "react-icons/bi";
import { MdOutlineLocalShipping, MdOutlineSavings } from "react-icons/md";
import { TbCertificate, TbTruckReturn } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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

const Home = () => {
  const renderImages = (repeatCount) => {
    const images = [];

    for (let i = 0; i < repeatCount; i++) {
      images.push(<AiFillStar key={i} className="text-pink-500 text-xl" />);
    }

    return images;
  };
  return (
    <>
      <Helmet>
        <title>Home - SLV Galleria</title>
        <meta
          name="description"
          content="Welcome to our online platform for buying and selling paintings. Discover a wide selection of unique artworks from talented artists. Sell your own paintings and showcase your artistic talent to a global audience."
        />
        <meta
          name="keywords"
          content="paintings, buy paintings, sell paintings, art marketplace, artist platform, showcase artwork"
        />
      </Helmet>
      <div>
        <header className="bg-black h-screen">
          <div
            className={`flex items-center justify-center text-center h-screen bg-fixed bg-center bg-cover page1`}
          >
            <div className="p-5 text-white z-[2] mt-[-1rem] lg:w-2/3 sm:w-3/4">
              <h4 className="text-xl font-mono">Welcome To SLV Galleria</h4>
              <h2 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl mt-12 mb-14 font-serif">
                Let’s Bring the Designs to Your Home
              </h2>
              <Link
                to="/shop"
                className="px-9 py-3 text-black bg-white hover:text-white hover:bg-pink-500"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </header>
        <section className="mt-5 p-[6%]">
          <div className="flex justify-between items-center mb-[4%]">
            <h2 className="text-4xl font-serif">New Designs</h2>
            <Link
              to="/shop"
              className="px-9 py-3 border text-white bg-pink-500 hover:bg-gray-500"
            >
              Shop Now
            </Link>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-7 gap-12">
            {data.map(({ image, title, creator, featured, price }, index) => {
              return (
                <div className="flex flex-col space-y-5" key={index}>
                  <div>
                    <img src={`/images/${image}`} alt={title} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">{title}</h3>
                    <div className="flex space-x-2 font-serif">
                      <h4 className="text-pink-500">Creator:</h4>
                      <p>{creator}</p>
                    </div>
                    <div className="flex space-x-2 font-serif">
                      <h4 className="text-pink-500">Featured in:</h4>
                      <p>{featured}</p>
                    </div>
                    <div className="flex space-x-2 font-serif">
                      <h4 className="text-pink-500">Price:</h4>
                      <span>&#8377; {price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="flex justify-between items-center mt-[4%] mb-[8%] px-[6%] py-10 bg-pink-900">
          <h3 className="sm:text-2xl text-xl text-white mr-1">
            Get flat 20% Off on your first purchase!
          </h3>
          <Link
            to="/shop"
            className="flex items-center space-x-2 px-8 py-3 min-w-[170px] text-black bg-white hover:text-white hover:bg-pink-500"
          >
            <HiShoppingCart className="text-xl" />
            <h4>Shop Now</h4>
          </Link>
        </section>
        <section className="bg-gray-50 my-[6%] grid md:grid-cols-2 grid-cols-1 md:gap-20 justify-center items-center">
          <div>
            <img
              src="/images/join.jpg"
              alt="Product1"
              className="p-[10%] md:p-0"
            />
          </div>
          <div className="w-[86%] p-[10%]">
            <h5 className="merriweather">Best Quality Designs</h5>
            <h1 className="merriweather text-5xl text-pink-950 leading-normal mt-3 mb-6">
              Join the new Era of Art & Designing.
            </h1>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Link
              to="/shop"
              className="px-9 py-3 text-white bg-pink-500 hover:bg-gray-500"
            >
              Explore Now
            </Link>
          </div>
        </section>
        <section className="mt-28">
          <div className="flex flex-col items-center justify-center text-5xl mb-14">
            <h2 className="text-6xl mb-3 font-serif text-pink-900">
              Top Categories
            </h2>
            <BiCategory className="text-4xl" />
          </div>
          <div className="bg-pink-900 lg:px-[10%] lg:py-[6%] px-[14%] py-[14%] grid grid-cols-1 gap-16 justify-center items-center">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-20">
              <div className="bg-white p-10 flex flex-col justify-between items-center space-y-64">
                <h3 className="text-4xl font-serif">Handmade</h3>
                <Link
                  to="/shop"
                  className="px-9 py-3 text-white bg-gray-500 hover:text-white hover:bg-pink-500"
                >
                  <h4>Show More...</h4>
                </Link>
              </div>
              <div className="bg-white p-10 flex flex-col justify-between items-center space-y-64">
                <h3 className="text-4xl font-serif">Printed</h3>
                <Link
                  to="/shop"
                  className="px-9 py-3 text-white bg-gray-500 hover:text-white hover:bg-pink-500"
                >
                  <h4>Show More...</h4>
                </Link>
              </div>
              <div className="bg-white p-10 flex flex-col justify-between items-center space-y-64">
                <h3 className="text-4xl font-serif">Designs</h3>
                <Link
                  to="/shop"
                  className="px-9 py-3 text-white bg-gray-500 hover:text-white hover:bg-pink-500"
                >
                  <h4>Show More...</h4>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center py-20 flex-col space-y-10">
          <div className="flex flex-col items-center space-y-1">
            <h2 className="text-6xl mb-2 font-serif text-pink-900">
              Testimonials
            </h2>
            <BiMessageDetail className="text-4xl" />
          </div>
          <div className="flex justify-center flex-col lg:flex-row lg:space-x-20 w-4/6">
            <div className="bg-gray-200 p-10 flex flex-col justify-between items-center h-80 rounded-3xl lg:min-w-[33%] m-0 lg:mt-16">
              <div className="flex space-x-1">{renderImages(4)}</div>
              <h4 className="text-xl">Prakhar Saxena</h4>
            </div>
            <div className="bg-gray-200 p-10 flex flex-col justify-between items-center h-80  rounded-3xl lg:min-w-[33%] mt-16 lg:mt-0 mb-16">
              <div className="flex space-x-1">{renderImages(5)}</div>
              <h4 className="text-xl">Ankit Yadav</h4>
            </div>
            <div className="bg-gray-200 p-10 flex flex-col justify-between items-center h-80 rounded-3xl lg:min-w-[33%] m-0 lg:mt-16">
              <div className="flex space-x-1">{renderImages(4)}</div>
              <h4 className="text-xl">Prakhar Saxena</h4>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 px-[20%] sm:px-12 py-16 flex flex-col items-start sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex items-center justify-center space-x-4">
            <MdOutlineLocalShipping className="text-5xl text-white bg-pink-500 p-2.5 rounded-full" />
            <div className="font-serif">
              <h4 className="text-2xl">Free Shipping</h4>
              <p>Above 50 Rs. Only</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <TbCertificate className="text-5xl text-white bg-pink-500 p-2.5 rounded-full" />
            <div className="font-serif">
              <h4 className="text-2xl">Certified Designs</h4>
              <p>100% Guarantee</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <MdOutlineSavings className="text-5xl text-white bg-pink-500 p-2.5 rounded-full" />
            <div className="font-serif">
              <h4 className="text-2xl">Huge Savings</h4>
              <p>At Lowest Price</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <TbTruckReturn className="text-5xl text-white bg-pink-500 p-2.5 rounded-full" />
            <div className="font-serif">
              <h4 className="text-2xl">Easy Return</h4>
              <p>FAQs</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
