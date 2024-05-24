import { navigationMenu } from "../Constants";
import { hamburger } from "../assets/icons";
import { firstaidkitelog } from "../assets/images";

const Navigation = () => {
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
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="" width={25} height={25} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
