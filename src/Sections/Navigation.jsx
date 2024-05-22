import { navigationMenu } from "../Constants";

const Navigation = () => {
  return (
    <nav>
      <div className="logo"></div>
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
