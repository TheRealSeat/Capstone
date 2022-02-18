import React from "react";
import { Card } from "react-bootstrap";
const EventCard = ({img, title, location, pricesFrom}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src= {img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {<span>Location: {location}<span>Prices from ${pricesFrom}</span></span>}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventCard;
