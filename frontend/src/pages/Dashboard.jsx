import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import axios from "axios";

const Dashboard = () => {
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

  return (
    <div>
      <AppBar />
      <div className="px-16 pt-10">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
