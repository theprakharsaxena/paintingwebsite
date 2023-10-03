import React, { useEffect } from "react";
import CircularProgressIndicator from "./common/Loadable/CircularProgressIndicator";
import Routes from "./routes/routes";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import getAllProductsApi from "./services/products/getAllProductsApi";
import { useQueryGetAllProducts } from "./reactQuery/getAllProducts";
import { addAllProducts } from "./redux/slice/ProductSlice";

const App = () => {
  const dispatch = useDispatch();

  const getAllProduct = useQueryGetAllProducts();

  // useEffect(() => {
  //   if (!getAllProduct.isLoading) {
  //     dispatch(addAllProducts(getAllProduct?.data));
  //   }
  // }, [getAllProduct]);

  return (
    <>
      <CircularProgressIndicator loading={false} />
      <Toaster />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
