import CustomNavbar from "./components/common/CustomNavbar";
import Footer from "./components/common/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <CustomNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
};

export default Layout;
