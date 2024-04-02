import { useNavigate } from "react-router-dom";
const AppBar = () => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    setInterval(() => {
      localStorage.removeItem("token");
      navigate("/signin");
    }, 1000);
  };
  return (
    <div className="shadow-lg h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">Wallet</div>
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
        <button
          className="h-12 mt-1 mr-4 bg-gray-800 hover:bg-gray-900 text-white duration-300 rounded-lg px-3"
          onClick={handleOnclick}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AppBar;
