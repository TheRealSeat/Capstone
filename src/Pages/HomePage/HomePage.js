import React from "react";
import {
  Button,
  Container,
  Form,
  Grid,
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
              <Grid columns="2">
                <Grid.Row>
                  <Grid.Column floated textAlign="right">
                    <div className="white-large">Where your seat is placed</div>
                  </Grid.Column>
                  <Grid.Column textAlign="left">
                    <div className="orange-large">TheRealSeat</div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid columns={6}></Grid>
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
                  Today
                </div>
              </h1>
              <div>
                <p style={{fontSize:'20px',marginBottom:'15px'}}>
                Sign up to receive our latest updates and developments. Plus get information about early access and upcoming events.                </p>
              </div>
              <Form>
                <Grid columns="1">
                  <Grid.Row>
                    <Form.Field>
                      <input placeholder="Your Name" style={{height:'50px',backgroundColor:'GrayText',width:'60%'}} />
                    </Form.Field>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'10px'}}>
                    <Form.Field>
                      <input placeholder="Your Email"  style={{height:'50px',backgroundColor:'GrayText',width:'60%'}} />
                    </Form.Field>
                  </Grid.Row>
                  <Grid.Row>
                    <Form.Field>
                      <Button type="submit" color="grey" size="massive">Join Now</Button>
                    </Form.Field>
                  </Grid.Row>
                </Grid>
              </Form>
            </Container>
          </header>
        </div>
      </div>
    </Segment>
  );
};

export default HomePage;
