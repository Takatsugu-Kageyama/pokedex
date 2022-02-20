import { NextPage } from "next";
import Navbar from "./navbar";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
