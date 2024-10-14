import { Link } from "react-router-dom";
import GetStartedBtn from "../components/buttons/GetStartedBtn";
import { ajoLogo2 } from "./assets/index";

function NavBar() {
  return (
    <header className="flex items-center justify-between gap-4 px-[5%] py-5 w-full shadow-lg">
      <img className="h-10" src={ajoLogo2} alt="" />
      <nav className=" lgss:flex gap-8 justify-center items-center">
        <Link className="hidden lgss:flex font-semibold capitalize text-[20px]" to={"/user/home"}>
          <p>contact us</p>
        </Link>
        <GetStartedBtn />
      </nav>
    </header>
  );
}

export default NavBar;
