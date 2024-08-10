import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <div className="relative top-8">
      <Link
        to="/"
        className="poppins text-gray-700 select-none flex items-center space-x-2"
      >
        <MdArrowBackIosNew  /> <span>Back</span>
      </Link>
    </div>
  );
};

export default Back;
