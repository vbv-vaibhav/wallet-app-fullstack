import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

const Dashboard = () => {
  return (
    <div>
      <AppBar />
      <div className="px-16 pt-10">
        <Balance value={"10000"} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
