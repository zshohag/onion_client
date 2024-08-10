const TextField = ({ ...props }) => {
  return (
    <input
      {...props}
      className="w-full px-3 py-3 rounded-lg  focus:outline-none bg-gray-100 border border-gray-100"
    />
  );
};

export default TextField;
