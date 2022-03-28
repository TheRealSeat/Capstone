import React from "react";
import EventCard from "../EventCard/EventCard";
import { CardGroup } from "react-bootstrap";
import "./EventCatalog.scss"

const EventCatalog = ({ events, catalogName, handleClick }) => {
  const eventCards = events.map((events, index) => (
    <EventCard
      img={events.img.S}
      title={events.EventTitle.S}
      location={events.EventLocation.S}
      catalog={catalogName}
      pricesFrom={events.EventPrice.N}
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
