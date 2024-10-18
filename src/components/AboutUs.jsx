import { useState, useEffect, useRef } from "react";
import { aboutUs } from "../assets";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  const aboutUsRef = useRef(null);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowMore(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = aboutUsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [aboutUsRef]);

  return (
    <section
      id="about-us"
      ref={aboutUsRef}
      className="flex bg-white flex-col py-10 w-full lgss:items-center"
    >
      <div className="flex justify-center items-center h-fit py-16 lgss:pt-2">
        <h1 className="text-red mds:text-[36px] xs:text-[26px] font-bold">
          ABOUT US
        </h1>
      </div>
      <div className="flex flex-col pt-6 lgss:flex-row justify-center items-center">
        <span className="mds:text-[20px] text-[14px] lgss:w-[50%] w-full lgss:h-fit h-fit text-black flex flex-col justify-center items-center font-bold">
          <h1 className="lgss:w-[70%] w-[90%] text-center lgss:leading-10">
            Our journey began with a simple yet ambitious goal: to provide
            service beyond compare. Over the years, we have evolved and grown,
            expanding our offerings to meet the diverse needs of our clients.
            From tailored solutions to comprehensive consultations, we leverage
            our extensive knowledge and experience to drive transformative
            change and help our clients succeed in today&apos;s dynamic business
            environment.
          </h1>

          {showMore && (
            <h1 className="lgss:w-[70%] w-[90%] lgss:leading-10 text-center pt-4">
              What sets us apart is our commitment to understanding our
              clients&apos; unique challenges and goals. We take a collaborative
              approach, working closely with each client to develop customized
              strategies that address their specific needs and objectives. Our
              team of seasoned professionals brings together a wealth of
              expertise from various industries, ensuring that we can provide
              insights and solutions that are both innovative and effective.
            </h1>
          )}

          <button
            onClick={toggleShowMore}
            className="text-red underline italic hover:underline mt-4"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </span>
        <img
          src={aboutUs}
          className="rounded-[32px] w-full px-5 mds:w-[90%] lgss:w-[45%] lgss:max-w-[600px] lgss:h-[450px]"
          alt=""
        />
      </div>

      {/* Our Vision Section */}
      <div className="flex flex-col pt-10 items-center">
        <h2 className="text-red mds:text-[30px] xs:text-[24px] font-bold text-center">
          Our Vision
        </h2>
        <p className="mds:text-[20px] text-[14px] lgss:w-[70%] w-[90%] text-black text-center pt-4">
          To become a premier organization dedicated to enhancing both personal
          and professional capacities of individuals and businesses, fostering
          efficiency, heightened productivity, and innovation.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col pt-10 items-center">
        <h2 className="text-red mds:text-[30px] xs:text-[24px] font-bold text-center">
          Our Mission
        </h2>
        <p className="mds:text-[20px] text-[14px] lgss:w-[70%] w-[90%] text-black text-center pt-4">
          Our mission is to cultivate an empowering atmosphere for skill
          acquisition and capacity enhancement that heralds a holistic growth
          and development for individuals and organizations.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
