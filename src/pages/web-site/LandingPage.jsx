import { Fragment } from "react";
import IsHome from "../../components/web-site/IsHome";
import NavBar from "../../routes/NavBar";
import "../../../src/styles/Website/website.css";
import Products from "../../components/web-site/Products";

const LandingPage = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="w-full px-[5%]">
        <IsHome />
        <Products />
      </div>
    </Fragment>
  );
};

export default LandingPage;