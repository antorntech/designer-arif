import React, { useEffect } from "react";
import Header from "../shared/Header";
import AppRoutes from "../routes/AppRoutes";
import Loader from "../loaders/Loader";
import Footer from "../shared/Footer";
import GoToTop from "../components/GoToTop/GoToTop";

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
    </>
  );
};

export default AppLayout;
