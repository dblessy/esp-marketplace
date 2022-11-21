import React from "react";
import { faGithubAlt, faJenkins } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOktaAuth } from "@okta/okta-react";
import useAuthUser from "../components/User";
import {Container, Navbar, NavbarBrand, Button} from "reactstrap";

export default function DevPortal() {
    const userInfo = useAuthUser();
    const { oktaAuth, authState } = useOktaAuth();
    const loggingIn = async () => oktaAuth.signInWithRedirect({ originalUri: "/" });
    const loggingOut = async () => oktaAuth.signOut();

    return (
      <Container>
          <Navbar color="light" light expand="md">
              <NavbarBrand href="/">ESP Marketplace</NavbarBrand>
              {
                  authState?.isAuthenticated ? (
                      <Button variant="outline-success" onClick={loggingOut}>Logout</Button>
                  ) : (
                      <Button variant="outline-success" onClick={loggingIn}>Login</Button>
                  )
              }
          </Navbar>
      {authState?.isAuthenticated ? (
    <>
      <h3 style={{ textAlign: "center", margin: "20px" }}>
        Welcome {userInfo?.name}!
      </h3>
      <div style={{justifyContent: "space-around", marginTop:"20px"}}>
        <a href="#" style={{color : "black"}}>
          <FontAwesomeIcon icon={faGithubAlt} size="4x" />
        </a>
        <a href="#" style={{color : "black"}}>
          <FontAwesomeIcon icon={faJenkins} size="4x" />
        </a>
      </div>
    </>) : (
          <p style={{ textAlign: "center", marginTop: "6rem", fontSize: '2rem' }}>
              Please login to proceed
          </p>
      )}
          </Container>
  );
}
