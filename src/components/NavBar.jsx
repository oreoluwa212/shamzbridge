import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isSidebarOpen]);

  return (
    <section className="sticky top-0 z-50 flex bg-[#fafafa] text-black items-center justify-between h-[100px] w-full px-[5%]">
      <Link to={"/"}>
        <img src={logo} alt="company logo" />
      </Link>
      <div className="lg:hidden">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
      </div>
      <ul className="hidden lg:flex justify-around text-black w-[400px] text-[20px]">
        <li>
          <a
            href="#about-us"
            className="hover:underline hover:text-red transition duration-300"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:underline hover:text-red transition duration-300"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            className="hover:underline hover:text-red transition duration-300"
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="#faqs"
            className="hover:underline hover:text-red transition duration-300"
          >
            FAQs
          </a>
        </li>
      </ul>
      <div className="hidden lg:flex justify-between gap-6">
        <button
          onClick={() => {
            navigate("/login"); // Updated to navigate to login
          }}
          className={`rounded-[16px] shadow-sm border-red border-[1px] shadow-black flex justify-center items-center h-[48px] w-[80px] lg:w-[130px] transition duration-300 
            ${
              pathname.includes("/login")
                ? "bg-red text-white"
                : "bg-transparent text-black"
            }
            hover:bg-red hover:text-white`} // Hover effect
        >
          Log In
        </button>
        <button
          onClick={() => {
            navigate("/signup"); // Updated to navigate to signup
          }}
          className={`rounded-[16px] shadow-sm border-red border-[1px] shadow-black flex justify-center items-center h-[48px] w-[80px] lg:w-[130px] transition duration-300 
            ${
              pathname.includes("/signup")
                ? "bg-red text-white"
                : "bg-transparent text-black"
            }
            hover:bg-red hover:text-white`} // Hover effect
        >
          Sign Up
        </button>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="fixed top-0 left-0 w-[250px] h-full bg-[#fafafa] z-50 p-4">
            <button onClick={toggleSidebar} className="absolute top-4 right-4">
              <FaTimes size={24} />
            </button>
            <ul className="flex flex-col items-center text-black text-[20px] mt-16">
              <li className="mb-4">
                <a
                  href="#about-us"
                  className="hover:underline hover:text-red transition duration-300"
                  onClick={toggleSidebar}
                >
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#services"
                  className="hover:underline hover:text-red transition duration-300"
                  onClick={toggleSidebar}
                >
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#testimonials"
                  className="hover:underline hover:text-red transition duration-300"
                  onClick={toggleSidebar}
                >
                  Testimonials
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#faqs"
                  className="hover:underline hover:text-red transition duration-300"
                  onClick={toggleSidebar}
                >
                  FAQs
                </a>
              </li>
              <li className="mt-4 w-full">
                <button
                  onClick={() => {
                    navigate("/login");
                    toggleSidebar();
                  }}
                  className={`rounded-[16px] shadow-sm border-red border-[1px] shadow-black flex justify-center items-center h-[48px] w-full transition duration-300 
                    ${
                      pathname.includes("/login")
                        ? "bg-red text-white"
                        : "bg-transparent text-black"
                    }
                    hover:bg-red hover:text-white`} // Hover effect
                >
                  Log In
                </button>
              </li>
              <li className="mt-4 w-full">
                <button
                  onClick={() => {
                    navigate("/signup");
                    toggleSidebar();
                  }}
                  className={`rounded-[16px] shadow-sm border-red border-[1px] shadow-black flex justify-center items-center h-[48px] w-full transition duration-300 
                    ${
                      pathname.includes("/signup")
                        ? "bg-red text-white"
                        : "bg-transparent text-black"
                    }
                    hover:bg-red hover:text-white`} // Hover effect
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default NavBar;
