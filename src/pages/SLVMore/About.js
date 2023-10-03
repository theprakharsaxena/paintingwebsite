import React from "react";
import { LuVerified } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import { Helmet } from "react-helmet";

const About = () => {
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
        <title>About Us - SLV Galleria</title>
        <meta
          name="description"
          content="Discover who we are, our mission, and our commitment to serving our customers. Learn about our company's history, values, and the team behind our success."
        />
        <meta
          name="keywords"
          content="about us, company history, mission, values, team, customer service"
        />
      </Helmet>
      <div>
        <div className="p-9 bg-black"></div>
        <h1 className="flex justify-center text-5xl py-20 bg-[#D9D9D97A]">
          About Us
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gri px-[10%] py-20 md:gap-20 gap-10">
          <div className="flex flex-col space-y-5 md:order-none order-1">
            <h3 className="text-4xl text-pink-900 font-serif">
              We are your favourite Store
            </h3>
            <p>
              Tuas quisquam quo gravida proident harum, aptent ligula anim
              consequuntur, ultrices mauris, nunc voluptates lobortis, varius,
              potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero
              penatibus quasi! Nostra tenetur dignissimos ultrices natus
              distinctio ultrices consequuntur numqu. Officiis fuga harum porro
              et? Similique rhoncus atque! Netus blanditiis provident nunc
              posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur
              anim amet quas, malesuada proident platea corrupti expedita.
            </p>
          </div>
          <div>
            <img src="/images/painting5.jpg" alt="Painting 5" />
          </div>
        </section>
        <section className="bg-pink-900 text-white px-20 py-10 grid grid-cols-2 sm:grid-cols-4 gap-20">
          <h5 className="text-lg">Number Speaks For Themselves! </h5>
          <div className="flex flex-col">
            <h4 className="text-xl">10000+</h4>
            <p className="text-sm">Daily Visitors</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl">200+</h4>
            <p className="text-sm">Designs</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl">20+</h4>
            <p className="text-sm">Artists</p>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 px-20 py-20 gap-20">
          <div className="flex flex-col justify-center items-center relative">
            <img
              src="/images/painting6.jpg"
              alt="Painting 6"
              className="absolute top-0 h-64 w-"
            />
            <div className="bg-gray-200 p-10 flex flex-col justify-between items-center space-y-32 rounded-3xl w-full sm:w-4/6 md:w-full lg:w-[58%] mt-28">
              <div className="flex space-x-1 mt-32">{renderImages(5)}</div>
              <h4 className="text-xl font-serif">Prakhar Saxena</h4>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-serif">
              We deal with Various quality Arts & Designs
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4 font-serif">
              <div className="flex flex-col space-y-5">
                <div className="flex items-center space-x-2">
                  <LuVerified className="text-pink-500 text-2xl" />
                  <h5 className="text-lg">Creativity</h5>
                </div>
                <div className="flex items-center space-x-2">
                  <LuVerified className="text-pink-500 text-2xl" />
                  <h5 className="text-lg">Aesthetics</h5>
                </div>
                <div className="flex items-center space-x-2">
                  <LuVerified className="text-pink-500 text-2xl" />
                  <h5 className="text-lg">Technical Skill</h5>
                </div>
                <div className="flex items-center space-x-2">
                  <LuVerified className="text-pink-500 text-2xl" />
                  <h5 className="text-lg"> Conceptual Depth</h5>
                </div>
              </div>
              <div className="lg:col-span-2 flex flex-col space-y-5">
                <div className="flex items-center space-x-2">
                  <LuVerified className="text-pink-500 text-2xl" />
                  <h5 className="text-lg">Emotional Resonance</h5>
                </div>
                <div className="flex items-center space-x-2">
                  <LuVerified className="text-pink-500 text-2xl" />
                  <h5 className="text-lg">Innovation and Experimentation</h5>
                </div>
                <div className="flex items-center space-x-2">
                  <LuVerified className="text-pink-500 text-2xl" />
                  <h5 className="text-lg">Cultural and Social Commentary</h5>
                </div>
                <div className="flex items-center space-x-2">
                  <LuVerified className="text-pink-500 text-2xl" />
                  <h5 className="text-lg">Timelessness</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
