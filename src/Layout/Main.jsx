import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { FaChartBar, FaSignInAlt } from "react-icons/fa";

const Main = () => {
  const ListItems = (
    <>
      <li>
        <NavLink to="/" 
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/adf" 
          className={({ isActive, isPending }) =>
           isPending ? "" : isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
          }
        >
          Navbar Item 2
        </NavLink>
      </li>
      <li>
        <NavLink to="/d" 
          className={({ isActive, isPending }) =>
           isPending ? "" : isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
          }
        >
          Navbar Item 1
        </NavLink>
      </li>
      <li>
        <NavLink to="/ds=" 
          className={({ isActive, isPending }) =>
           isPending ? "" : isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
          }
        >
          Navbar Item 2
        </NavLink>
      </li>
      <li>
        <NavLink to="/das" 
          className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
          }
        >
          Navbar Item 1
        </NavLink>
      </li>
      <li>
        <NavLink to="/Login"
        >
          <button
            type="button"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 duration-1000 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login <FaSignInAlt className="inline text-lg" />
          </button>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="w-full navbar bg-gray-200 border-gray-200 dark:bg-gray-900 ">
            <div className=" container mx-auto">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">
                <Link
                  to="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <FaChartBar className="text-3xl dark:text-white text-black" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Task Master
                  </span>
                </Link>
              </div>

              <div className="flex-none hidden lg:block">
                <ul className="flex gap-5 items-center">
                  {/* Navbar menu content here */}
                  {ListItems}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="min-h-screen"
            style={{ minHeight: "calc(100vh - 250px)" }}
          >
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {ListItems}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
