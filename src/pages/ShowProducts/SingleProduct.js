import React from "react";
import { Helmet } from "react-helmet";

const SingleProduct = () => {
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
      </div>
    </>
  );
};

export default SingleProduct;
