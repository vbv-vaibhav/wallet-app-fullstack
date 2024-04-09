import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Receipt = () => {
  const navigate = useNavigate();

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://wallet-app-backend-ashen.vercel.app/api/v1/account/balance",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setBalance(Math.round(response.data.balance * 100) / 100);
      });
  }, []);

  const sendAgain = () => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  const logOut = () => {
    setTimeout(() => {
      navigate("/signin");
      localStorage.removeItem("token");
    }, 1000);
  };

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col space-y-1.5 px-6 pt-6">
            <h2 className="text-3xl font-bold text-center">
              Transfer Successful!
            </h2>
          </div>
          <div className="px-6 pb-6">
            <h3 className="text-2xl font-semibold text-center">
              Updated Balance
            </h3>
            <h3 className="text-2xl font-semibold text-center pb-6 mt-3 hover:scale-110 duration-300">
              ₹ {balance}
            </h3>
            <div className="space-y-4">
              <div className="flex">
                <button
                  onClick={sendAgain}
                  className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors mx-3 h-10 px-4 py-2 w-full bg-green-500 text-white hover:bg-green-600 duration-300"
                >
                  Send Again
                </button>
                <button
                  onClick={logOut}
                  className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors mx-3 h-10 px-4 py-2 w-full  text-white bg-gray-800 hover:bg-gray-900 duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
