import { navigationMenu } from "../Constants";
import { firstaidkitelog } from "../assets/images";

const Navigation = () => {
  return (
    <nav className="w-full flex  justify-between px-16 items-center bg-slate-100 p-6 ">
      <div className="logo flex">
        <img src={firstaidkitelog} alt="" />
      </div>
      <div className="navlink">
        <ul className="flex gap-8 ">
          {navigationMenu.map((item) => (
            <li key={item.menuName}>
              <a href={item.routePath}>{item.menuName}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
