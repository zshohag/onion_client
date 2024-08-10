const Button = ({ text }) => {
  return (
    <div>
      <button className="text-sm bg-[#f91944]  py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">
      { text }
      </button>
    </div>
  );
};

export default Button;
