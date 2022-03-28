import React from "react";
import { Container, Segment, Loader, Dimmer } from "semantic-ui-react";

const LoadingComponent = ({ content = "Loading..." }) => {
  return (
    <Segment inverted textalign="center" vertical>
      <Container style={{ height: "100vh" }}>
        <Dimmer active={true}>
          <Loader content={content} />
        </Dimmer>
      </Container>
    </Segment>
  );
};

export default LoadingComponent;
