const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="flex flex-col md:flex-row bg-red text-white justify-between items-center h-[100%] w-full px-[5%] py-2 md:py-5">
      <h1
        className="text-[36px] font-semibold cursor-pointer"
        onClick={scrollToTop}
      >
        ShamBridge
      </h1>
      <div className="justify-between flex flex-col md:flex-row w-[80%] items-center gap-5">
        <ul className="flex justify-around w-[400px] text-[20px]">
          <li>
            <a
              href="#about-us"
              className="hover:underline hover:italic transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:underline hover:italic transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:underline hover:italic transition duration-300"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              className="hover:underline hover:italic transition duration-300"
            >
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
