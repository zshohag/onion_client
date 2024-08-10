import "./Banner.css";
import Button from "../../../components/Button/Button";

const Banner = ({ searchQuery, setSearchQuery, handleSearch }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(); // Call handleSearch on input change
  };

  return (
    <section
      style={{ width: "100%" }}
      className="header-banner h-96 w-full bg-yellow-50"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">
          Best food waiting for your belly
        </h1>

        <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
          <input
            type="text"
            className="rounded-full px-4 focus:outline-none w-full bg-transparent form-control"
            placeholder="Search Food Item"
            value={searchQuery}
            onChange={handleInputChange}
          />

          <Button text={"Search"} onClick={handleSearch} />
        </div>
      </div>
    </section>
  );
};

export default Banner;

