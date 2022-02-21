import { NextPage } from "next";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
