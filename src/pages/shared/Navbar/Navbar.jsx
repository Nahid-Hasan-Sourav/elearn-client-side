import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItem = (
    <>
      <li>
        <Link to="/" className="text-black">
          Home
        </Link>
      </li>
      <li>
        <Link to="/category" className="text-black">
          Category
        </Link>
      </li>
      <li>
        <Link to="/" className="text-black">
          About
        </Link>
      </li>
      <li>
        <Link to="/" className="text-black">
          Contact Us
        </Link>
      </li>
      <li>
        <Link to="dashboard" className="text-black">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="login" className="text-black">
          Login
        </Link>
      </li>
      <li>
        <Link to="signUp" className="text-black">
          SignUp
        </Link>
      </li>
     
      <div className="dropdown dropdown-bottom">
        <div className="avatar placeholder mt-[4px]" tabIndex={0}>
          <div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
            <span className="text-xs">AA</span>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#6082B6] lg:justify-around justify-between lg:py-[20px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/">
            <span className="text-5xl font-bold text-gray-400">e</span>
            <span className="text-5xl font-bold text-white">Learn</span>
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
