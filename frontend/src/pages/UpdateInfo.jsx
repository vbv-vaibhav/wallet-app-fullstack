import { useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Update Your Info"} />
          <SubHeading label={"Enter the details below"} />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="New Email"
            label={"New Email"}
          />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="First Name"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Last Name"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="New Password"
            label={"New Password"}
            type="password"
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await axios.put(
                  "https://wallet-app-backend-ashen.vercel.app/api/v1/user/",

                  { firstName, lastName, password },

                  {
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  }
                );
                alert(response.data.message);
                navigate("/dashboard");
              }}
              label={"Update"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
