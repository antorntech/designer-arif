import React, { useEffect } from "react";
import Header from "../shared/Header";
import AppRoutes from "../routes/AppRoutes";
import Loader from "../loaders/Loader";

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
          <Header />
          <main>
            <AppRoutes />
          </main>
        </>
      )}
    </>
  );
};

export default AppLayout;
