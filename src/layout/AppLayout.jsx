import React, { useEffect } from "react";
import Header from "../shared/Header";
import AppRoutes from "../routes/AppRoutes";
import Loader from "../loaders/Loader";
import Footer from "../shared/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppLayout = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <GoToTop />
          <Header />
          <main>
            <AppRoutes />
          </main>
          <Footer />
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default AppLayout;
