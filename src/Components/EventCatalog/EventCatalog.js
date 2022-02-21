import React from "react";
import EventCard from "../EventCard/EventCard";
import { CardGroup } from "react-bootstrap";
import "./EventCatalog.scss"

const EventCatalog = ({events, eventCategory}) => {

  const eventCards = events.map((events) => (
    <EventCard
      img={events.img}
      title={events.title}
      location={events.location}
      pricesFrom={events.pricesFrom}
      key={events.title}
    ></EventCard>
  ));

  return (
    <div className = "eventcatalog">
    <h1 className = "title">{eventCategory}</h1>
      <CardGroup>{eventCards}</CardGroup>
    </div>
  );
};

export default EventCatalog;
