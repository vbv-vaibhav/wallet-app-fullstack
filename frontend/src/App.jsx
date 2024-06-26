import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import Receipt from "./pages/Receipt";
import UpdateInfo from "./pages/UpdateInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/updateinfo" element={<UpdateInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
