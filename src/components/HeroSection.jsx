import { useEffect, useRef, useState } from "react";
import { homepage, overlap } from "../assets";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-[100%] h-[85vh]">
      <img
        src={homepage}
        alt=""
        className="absolute w-full h-full object-cover rounded-b-[26px]"
      />
      <img
        src={overlap}
        alt=""
        className="absolute w-full h-full object-cover bg-center rounded-b-[26px]"
      />
      <div
        className={`absolute text-white text-left w-[100%] h-[100%] px-[5%] flex flex-col justify-center gap-2 lgss:gap-7 ${
          isVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <h1 className="transition-all duration-700 font-extrabold text-[24px] xs:text-[28px] mds:text-[40px] md:text-[50px] lgss:text-[60px]">
          Build an Organization of High Repute
        </h1>
        <h3 className="lgss:text-[28px] text-[16px] lg:w-1/2 lgss:leading-[3rem]">
          Immerse yourself in Transferable skills, In-Demand skills, Marketable
          skillset for Self Sustenance.
        </h3>
        <Link to={"/"}>
          <button className="h-[55px] w-[150px] mt-[30px] flex justify-center items-center bg-white text-red mds:text-[24px] rounded-[16px] py-2 font-extrabold shadow-sm shadow-black mds:w-[200px] transition-transform duration-300 hover:scale-105">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
