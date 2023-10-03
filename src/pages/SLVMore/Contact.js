import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import Dropdown from "../../components/Dropdown";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - SLV Galleria</title>
        <meta
          name="description"
          content="Get in touch with our team for any inquiries, feedback, or assistance you may need. Contact us today to reach our dedicated customer support team and find the answers you're looking for."
        />
        <meta
          name="keywords"
          content="contact us, get in touch, customer support, inquiries, feedback, assistance"
        />
      </Helmet>
      <div>
        <div className="p-9 bg-black"></div>
        <h1 className="flex justify-center text-5xl py-20 bg-[#D9D9D97A]">
          Contact Us
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 my-[7%]">
          <div className="border-r border-black px-[14%]">
            <div className="py-2">
              <div className="mb-10">
                <h2 className="text-6xl font-serif mb-5">Get In Touch</h2>
                <p className="text-gray-500">
                  Sit vulputate faucibus eget eget scelerisque faucibus
                  malesuada nullam mollis ut montes, dui scelerisque ornare.
                </p>
              </div>
              <div className="flex flex-col space-y-10">
                <div className="flex space-x-7">
                  <IoLocationOutline className="text-pink-500 text-2xl mb-4" />
                  <div>
                    <h4 className="text-lg font-bold font-serif mb-2">
                      Visit Us
                    </h4>
                    <h5 className="">Bada Bazaar, Bareilly</h5>
                  </div>
                </div>
                <div className="flex space-x-7">
                  <IoCallOutline className="text-pink-500 text-2xl mb-4" />
                  <div>
                    <h4 className="text-lg font-bold font-serif mb-2">
                      Call Us
                    </h4>
                    <h5 className="">+91 98977 01719</h5>
                    <h5 className="">+91 82794 08704</h5>
                  </div>
                </div>
                <div className="flex space-x-7">
                  <CiMail className="text-pink-500 text-2xl mb-4" />
                  <div>
                    <h4 className="text-lg font-bold font-serif mb-2">
                      Email Us
                    </h4>
                    <h5 className="">info.slvgalleria@gmail.com</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-l border-black px-[14%]">
            <div className="py-2">
              <h2 className="text-3xl font-serif mb-10">
                Drop us a line or two
              </h2>
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-1">
                  <label className="font-semibold">Name</label>
                  <input
                    className="bg-gray-50 border border-gray-300 p-2.5"
                    placeholder="Full name"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="font-semibold">Email</label>
                  <input
                    className="bg-gray-50 border border-gray-300 p-2.5"
                    placeholder="Email address"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="font-semibold">Comment or Message</label>
                  <textarea
                    rows={4}
                    className="bg-gray-50 border border-gray-300 p-2.5"
                    placeholder="Your message"
                  />
                </div>
              </div>
              <button className="flex px-7 py-2.5 bg-pink-500 text-white mt-5">
                Submit
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center py-20">
          <h1 className="text-3xl">Frequently Asked Questions!</h1>
          <h4 className="text-sm">General asked quires about our Platform</h4>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-6 px-10 md:px-20 lg:px-32 mb-20">
          <div className="flex flex-col space-y-6">
            <Dropdown
              title="How can I sell my paintings on your platform?"
              description="Answer to question 1 goes here."
            />
            <Dropdown
              title="What are the requirements for joining as an artist?"
              description="Answer to question 1 goes here."
            />
            <Dropdown
              title="How do you ensure the safety of my artwork during shipping?"
              description="Answer to question 1 goes here."
            />
          </div>
          <div className="flex flex-col space-y-6">
            <Dropdown
              title="How do I receive payment for my sold paintings?"
              description="Answer to question 2 goes here."
            />
            <Dropdown
              title="How do you ensure the safety of my artwork during shipping?"
              description="Answer to question 2 goes here."
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
