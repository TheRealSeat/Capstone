import "./EventCard.scss";
import React from "react";
import { Card } from "react-bootstrap";

const EventCard = ({ img, title, location, pricesFrom }) => {
  return (
    <div className="EventCard">
      <Card className="Card" style={{ width: "18rem" }}>
        <div className = "ImgContainer">
          <Card.Img className="Img" variant="top" src={img} />
        </div>
        <Card.Body className="Body">
          <Card.Title className="Title">{title}</Card.Title>
          <Card.Text className="Description">
            Location: {location}
            <br />
            Prices from ${pricesFrom}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventCard;
