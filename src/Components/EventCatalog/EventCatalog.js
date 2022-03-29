import React from "react";
import EventCard from "../EventCard/EventCard";
import { CardGroup } from "react-bootstrap";
import "./EventCatalog.scss"

const EventCatalog = ({ events, catalogName, handleClick }) => {
  const eventCards = events.map((events, index) => (
    <EventCard
      img={events.EventImg}
      title={events.EventTitle}
      location={events.EventLocation}
      catalog={catalogName}
      pricesFrom={events.EventPrice}
      key={index}
      handleClick={handleClick}
    ></EventCard>
  ));

  return (
    <div className="eventcatalog">
      <h1 className="title">{catalogName}</h1>
      <CardGroup>{eventCards}</CardGroup>
    </div>
  );
};

export default EventCatalog;
