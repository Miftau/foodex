import "../styles/pages/login.scss";
import { useState, useContext } from "react";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import AuthContext from "../AuthContext/AuthProvider";
import RightSvg from "../assets/Vector.png";
import LeftSvg from "../assets/Ellipse.png";
const LOGIN_URL = "/login";

export default function LoginPage() {
  const { setAuth } = useContext(AuthContext);

  const [errMsg, setErrMsg] = useState("");
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "it must be a valid email",
      label: "email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:
        "Password should be 8-20 characters and should include at least 1 letter, 1 number and 1 special character",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{8,20}$",
      label: "password",
      required: true,
    },
  ];

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: info.email, password: info.password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      // const role = response?.data?.role;

      setAuth({...info})
      // clear state and controlled inputs
      setInfo({
        email: "",
        password: ""
      });
      
      if(accessToken){
        navigate("/home")
      }else{
        setErrMsg("Account doesn't exist, please create an account")
      }

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else {
        setErrMsg("Login Failed");
      }
      console.log(errMsg);
    }
    console.log(info)
  };

  const goToResetPassword = () => {
    navigate("/resetPassword");
  };

  return (
    <>
        <section className="Container">
          <img className="right-img" src={RightSvg} alt="" />
          <img className="left-img" src={LeftSvg} alt="" />
          <form className="login-form" onSubmit={handleFormSubmit}>
            <p className={errMsg ? "error-msg" : "no-error"}>{errMsg}</p>
            <h1>Welcome Back</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={info.name !== "" ? info[input.name] : input.name}
                onChange={handleChange}
              />
            ))}
            <button className="login-btn">LOGIN</button>
            <p className="confirm">
              Forgot your password? <br />
              <span className="reset" onClick={goToResetPassword}>
                Reset password
              </span>
            </p>
          </form>
        </section>
    </>
  );
}

