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
        <Link to="/" className="text-black">
          Courses
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
     
      <div className="dropdown dropdown-bottom">
        <div className="avatar placeholder mt-[4px]" tabIndex={0}>
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <span className="text-xs">AA</span>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
      <div className="navbar bg-[#6082B6] lg:justify-around justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/">
            <span className="font-bold text-5xl text-gray-400">e</span>
            <span className="font-bold text-5xl text-white">Learn</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
