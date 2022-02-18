import React from "react";
import {
  Button,
  Container,
  Form,
  Icon,
  Label,
  Segment,
} from "semantic-ui-react";

import "./HomePage.css";
const HomePage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div>
        <header className="HomePage-header">
          <Container style={{ marginTop: "30vh" }}>
            <h1 className="header-container">
              <div className="orange-large">TheRealSeat</div>
              <div className="white-large">&nbsp;Capstone Project</div>
            </h1>

            <div>
              <Button size="huge" inverted style={{ marginTop: "20px" }}>
                Get started
                <Icon name="right arrow" inverted />
              </Button>
            </div>
          </Container>
        </header>
      </div>

      <div>
        <div>
          <header className="Form-header">
            <Container style={{ marginTop: "30vh" }}>
              <h1 className="header-container">
                <div className="dark-large" style={{ marginRight: "20px" }}>
                  Join{" "}
                </div>

                <div className="orange-large"> TheRealSeat </div>

                <div className="dark-large" style={{ marginLeft: "20px" }}>
                  Today{" "}
                </div>
              </h1>
              <form className="ui form">
                <div className="field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    style={{ maxWidth: "50%" }}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    style={{
                      maxWidth: "50%",
                    }}
                  />
                </div>
              </form>
            </Container>
          </header>
        </div>
      </div>
    </Segment>
  );
};

export default HomePage;
