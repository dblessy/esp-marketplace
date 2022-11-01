import React, { useState } from "react";
import "../public/styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Form,
  FormGroup,
  Button,
  Card,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import Profile from "../components/Profile";
import { useNavigate } from "react-router-dom";

const cardStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    profile: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function handleChange(event) {
    //this is to set email and password using login form
    const { name, value } = event.target;
    setLoginInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function selectProfile(val) {
    setLoginInfo((prev) => {
      return {
        ...prev,
        profile: val,
      };
    });
  }

  function submitHandler(event) {
    console.log(loginInfo);
    
    let tempLoginInfo = {
      'name' : 'Tom',
      'profile' :'buyer'
    }
     //TODO : if using google auth set email and password using setLoginInfo here

    localStorage.setItem("user", JSON.stringify(tempLoginInfo));
    if (loginInfo.profile == "buyer") navigate("/buyer");
    else if (loginInfo.profile == "seller") navigate("/seller");
    else navigate("/dev");
    event.preventDefault();
  }

  return (
    <>
      {" "}
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ESP Marketplace</NavbarBrand>
      </Navbar>
      <div style={cardStyle}>
        <Card className="login-form">
          <h3 style={{ textAlign: "center" }}>Choose your account type</h3>
          <br />
          <Form onSubmit={submitHandler}>
            <FormGroup floating>
              <Profile selectProfile={selectProfile} />
            </FormGroup>{" "}
            <br />
            {/* uncomment if required  - login form */}
            {/* <FormGroup floating> */}
            {/* <Input
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              value={loginInfo.email}
            />
            <Label for="email">Email</Label>
          </FormGroup>{" "}
          <FormGroup floating>
            <Input
              name="password"
              placeholder="Password"
              type="password"
              onChange={handleChange}
              value={loginInfo.password}
            />
            <Label for="password">Password</Label>
          </FormGroup>{" "}
          no account?{" "}
          <a href="#" style={{ color: "#70AACB" }}>
            Signup now!
          </a>
          <Button className="loginBtn">Login</Button>
          <br />
          <br />
          <br /> */}
            <div className="logo">
              Login using
              <br />
              <a href="">
                <Button>
                  <FontAwesomeIcon icon={faGoogle} size="4x" />
                </Button>
              </a>
              <br />
              <br />
              <p>
                Donate to our small business! Click{" "}
                <a href="#" style={{ color: "#70AACB" }}>
                  here
                </a>{" "}
                to know more.
              </p>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
}
