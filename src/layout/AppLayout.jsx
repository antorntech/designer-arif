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
    }, 1000);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "01996774893";
    const message = "Hello Arif, I would like to chat with you!";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

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
          {/* Sticky WhatsApp Button */}
          <button
            className="whatsapp-button animate-ping"
            onClick={handleWhatsAppClick}
            aria-label="Chat on WhatsApp"
          >
            <i className="fa-brands fa-whatsapp heartbeat"></i>
          </button>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default AppLayout;
