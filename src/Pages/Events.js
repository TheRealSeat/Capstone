import React from "react";
import Button from "../Components/UI/Button/Button";
import InputField from "../Components/UI/InputField/InputField";
import ModalService from "../Services/ModalService";
import ModalRoot from "../Components/UI/Modal/ModalRoot";
import ConfirmModal from "../Components/ConfirmModal/ConfirmModal";
import EventCard from "../Components/EventCard/EventCard";
import logo from "../Assets/Images/logo.svg";
import fans from "../Assets/Images/fans_cheering.jpeg";
function Events() {
  const addModal = () => {
    ModalService.open(ConfirmModal);
  };
  const events = [
    {
      img: logo,
      title: "Superb Owl",
      location: "Yum Center",
      pricesFrom: 99,
    },
    {
      img: fans,
      title: "Event",
      location: "Place",
      pricesFrom: 49,
    },
  ];
  const eventCards = events.map((events) =>
  <EventCard
    img={events.img}
    title={events.title}
    location={events.location}
    pricesFrom={events.pricesFrom}
  ></EventCard>
  );

  return (
    <div>
      <div>Hello World</div>
      <div>
        <Button
          onClick={() => {
            console.log("Click");
          }}
          type={Button}
        >
          Click Me!
        </Button>
        <InputField
          type="text"
          placeholder="Enter Your Name"
          label="Name"
          name="name"
        />
      </div>
      <ModalRoot />
      <Button onClick={addModal}>Open Modal</Button>
      {eventCards}
    </div>
  );
}

export default Events;
