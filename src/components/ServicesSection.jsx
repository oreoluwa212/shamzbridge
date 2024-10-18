import { PiChartBar, PiGaugeFill, PiHandshake, PiMicrophoneBold, PiUsersFill, PiVideo } from "react-icons/pi";
import Card from "./Card";

const ServicesSection = () => {
  return (
    <div id="services" className="pb-12">
      <div className="flex justify-center items-center h-[166px] bg-transparent">
        <h1 className="text-red text-[36px] font-bold uppercase">
          Our Services
        </h1>
      </div>
      <div className="w-full flex justify-center items-center h-full">
        <div className="flex flex-wrap lg:w-4/5 gap-16 justify-center p-10">
          <Card
            title="Programs/Projects Management"
            description="Partner with us for seamless project execution."
            icon={<PiGaugeFill />}
          />
          <Card
            title="Capacity Building"
            description="Nurture talent and skills with our capacity building services."
            icon={<PiChartBar />}
          />
          <Card
            title="Consultancy Services"
            description="Elevate your strategy with our consultancy services."
            icon={<PiUsersFill />}
          />
          <Card
            title="Event Host/Management"
            description="Let us handle the details while you enjoy the moment."
            icon={<PiMicrophoneBold />}
          />
          <Card
            title="Community Development"
            description="Championing development where it matters most."
            icon={<PiHandshake />}
          />
          <Card
            title="Content Development"
            description="Unleash your creativity and transform ideas into impactful stories."
            icon={<PiVideo />}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
