import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import "../styles/pages/sign-up.scss";
import axios from "../api/axios";
import LinkedInImage from "../assets/entypo-social_linkedin-with-circle.png";
import GoogleLogo from "../assets/icomoon-free_google-plus3.png";
import FaceBookLogo from "../assets/la_facebook.png";
const REGISTER_URL = "/register";

export default function SignUp() {
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "name",
      errorMessage:
        "name should be 3-16 characters and shouldn't include any special characters!",
      label: "name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "It should be a valid email address",
      label: "email",
      required: true,
    },
    {
      id: 3,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response));

      alert("Account created successfully");
      setValues({
        name: "",
        email: "",
        password: "",
      });
      setSuccess(true);
      navigate('/home');

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("name taken");
      } else {
        setErrMsg("Signup Failed");
      }
      console.log(errMsg);
      // console.error("Error", err.request.response);
    }

    console.log(values);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {success ? (
        <section className="formContainer">
          <h1>Account has been created</h1>
        </section>
      ) : (
        <main className="formContainer">
          <div className="container">
            <section className="image-wrapper">
              <img
                src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1706615980/Group_gblybp.png"
                alt="icon"
              />
            </section>
            <form id="form" onSubmit={handleSubmit}>
              <span className={errMsg && "error"}>{errMsg}</span>
              <h1>Create Account</h1>
              <div className="logos">
                <img src= {FaceBookLogo} alt="FaceBook logo" />
                <img src= {GoogleLogo} alt="Google logo" />
                <img src= {LinkedInImage} alt="linked-in icon" />
              </div>
              <p className="use-email" style={{ cursor: "pointer" }}>
                use your email account
              </p>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={handleChange}
                />
              ))}
              <button className="loginbtn">signup</button>
              <p className="confirm">
                Already have an account?
                <span className="signin" onClick={goToLogin}>
                  Sign in
                </span>
              </p>
            </form>
          </div>
        </main>
      )}
    </>
  );
}
