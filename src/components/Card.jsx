/* eslint-disable react/prop-types */
const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg shadow-gray-300/50 h-fit py-10 min-h-[250px] max-w-[400px] px-8 w-[100%] rounded-xl overflow-hidden flex flex-col justify-start items-center text-center transform transition-transform duration-300 hover:scale-105">
      {icon && (
        <div className="mb-4 text-4xl text-red flex justify-center">{icon}</div>
      )}
      <h2 className="text-xl text-red font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
