import Navbar from "./navbar";
import { NextPage } from "next";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
