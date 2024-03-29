import { Link } from "react-router-dom";

const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div>{label}</div>
      <Link
        className="pointer underline pl-1 cursor-pointer hover:scale-105 duration-300"
        to={to}
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default BottomWarning;
