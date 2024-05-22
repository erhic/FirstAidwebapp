import { navigationMenu } from "../Constants";
import { hamburger } from "../assets/icons";
import { firstaidkitelog } from "../assets/images";

const Navigation = () => {
  return (
    <nav className="w-full flex  justify-between px-16 items-center bg-slate-100 p-6 max-container">
      <div className="logo flex">
        <img src={firstaidkitelog} alt="" />
      </div>
      <div className="navlink">
        <ul className="flex gap-8  max-lg:hidden">
          {navigationMenu.map((item) => (
            <li key={item.menuName}>
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
