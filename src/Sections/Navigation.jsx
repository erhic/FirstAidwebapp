import { useState } from "react";
import { navigationMenu } from "../Constants";
import { hamburger } from "../assets/icons";
import { firstaidkitelog } from "../assets/images";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen + "iiiii");
  return (
    <nav className="w-full flex  justify-between px-16 items-center bg-red-600  p-4 max-container hover:border-slate-200 border-b-1 border-slate-100">
      <div className="logo flex">
        <img src={firstaidkitelog} alt="" />
      </div>
      <div className="navlink">
        <ul className="flex gap-8  max-lg:hidden font-monteserrat  text-white">
          {navigationMenu.map((item) => (
            <li
              className="hover:text-slate-200 border-b-4 border-red-600 hover:border-b-4 hover:border-slate-100 tracking-wide font-semibold"
              key={item.menuName}
            >
              <a href={item.routePath}>{item.menuName}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden block  flex-col justify-end absolute  mt-16 static  px-16 top-0 w-full left-0 fixed md:z-auto bg-red-600">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white w-12 flex justify-center absolute right-4 mt-[-35px]"
          >
            <img src={hamburger} alt="" width={25} height={25} />
          </button>
          <ul
            className={`${
              isOpen ? "block " : "hidden "
            }flex-col font-monteserrat text-white  px-[-50px]`}
          >
            {navigationMenu.map((item) => (
              <li
                className="hover:text-slate-200 md:border-b-4 md:border-green-600 hover:border-b-4 hover:border-slate-100 tracking-wide font-semibold py-2"
                key={item.menuName}
              >
                <a href={item.routePath}>{item.menuName}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
