import { navigationMenu } from "../Constants";
import { firstaidkitelog } from "../assets/images";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src={firstaidkitelog} alt="" />
      </div>
      <div className="navlink">
        <ul>
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
