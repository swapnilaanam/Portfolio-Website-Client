import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Main = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500)
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <PropagateLoader color="#FFFFFF" loading={loading} />
      </div>
    )
  } else {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }
}

export default Main;