import React, { useState, useEffect } from "react";
import EventCard from "../EventCard/EventCard";
import { CardGroup, Spinner } from "react-bootstrap";
import "./EventCatalog.scss";
import agent from "../../Services/Api/agent";

const EventCatalog = ({ events, catalogName, handleClick }) => {
  const [isLoading, setLoading] = useState(false);//true);
  //const [event, setEvent] = useState();

  useEffect(() => {
    agent.Event.listType(catalogName.split(" & ").join("-")).then((data) => {
      //setEvent(data);
      setLoading(false);
    });
  }, [catalogName]);

  if (isLoading) {
    return (
      <div>
        <div className="eventcatalog">
          <h1 className="title">{catalogName}</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  }
  //Once we have api set up this is how we will construct event cards
  // const eventCards = event.map((event, index) => (
  //   <EventCard
  //     img={event.img}
  //     title={event.title}
  //     location={event.location}
  //     catalog={catalogName}
  //     pricesFrom={event.pricesFrom}
  //     key={index}
  //     handleClick={handleClick}
  //   ></EventCard>
  // ));
  const eventCards = events.map((events, index) => (
    <EventCard
      img={events.img}
      title={events.title}
      location={events.location}
      catalog={catalogName}
      pricesFrom={events.pricesFrom}
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
