import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import "../styles/Faq.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set the default active index to 0

  const faqData = [
    {
      question: "What is ShamzBridge?",
      answer:
        "A premier organization enhancing personal and professional capacities through innovative consultations and training.",
    },
    {
      question: "Why choose ShamzBridge?",
      answer:
        "ShamzBridge offers tailored solutions, expert insights, and a collaborative approach, ensuring exceptional service that drives transformative results for individuals and organizations.",
    },
    {
      question: "How does ShamzBridge approach consultations?",
      answer:
        "By collaborating closely with clients to develop customized strategies tailored to their needs.",
    },
    {
      question: "What services does ShamzBridge offer?",
      answer:
        "Services include project management, capacity building, consultancy, event management, community development, and content development.",
    },
    {
      question: "How can I subscribe to updates?",
      answer: "Enter your email on the ShamzBridge website to receive updates.",
    },
    {
      question: "Who trusts ShamzBridge?",
      answer:
        "Clients include Kwara State College of Education, KSolutions, and the National Productivity Center.",
    },
    // Add more FAQ items as needed
  ];

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="faqs" className="flex flex-col justify-center items-center lg:my-7 my-0 w-full">
      <div className="flex justify-center items-center h-[126px] md:h-[166px] w-full">
        <h1 className="text-red lg:hidden text-center text-[28px] md:text-[36px] font-extrabold uppercase">
          FAQ
        </h1>
        <h1 className="text-red lg:flex hidden text-center text-[28px] md:text-[36px] font-extrabold uppercase">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="bg-white shadow-sm shadow-gray-500/50 h-[450px] md:h-[320px] rounded-[16px] flex justify-center items-center w-full">
        <div className="md:w-[80%] lg:w-[50%] h-full flex flex-col justify-between p-10">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center cursor-pointer mb-4"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-center items-center w-full">
                <div
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? "bg-red" : "bg-gold"
                  }`}
                ></div>
                <div className="flex w-full justify-between pl-4 text-[18px] font-semibold max-w-[80%]">
                  <h1 className="truncate">{faq.question}</h1>
                  <FaAngleRight
                    className={`text-gold ${
                      activeIndex === index ? "text-red" : "text-gold"
                    }`}
                  />
                </div>
              </div>
              {activeIndex === index && (
                <div className="lg:hidden flex flex-col gap-5 px-8">
                  <h3 className="text-[14px] w-full">{faq.answer}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-[45%] h-full flex-col gap-5 py-10 hidden lg:flex">
          {activeIndex !== null && (
            <>
              <h1 className="text-[20px] font-bold">{faqData[activeIndex].question}</h1>
              <h3 className="text-[18px] w-[90%]">{faqData[activeIndex].answer}</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
