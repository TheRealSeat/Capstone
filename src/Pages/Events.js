import React, { useState } from "react";
import Button from "../Components/UI/Button/Button";
import InputField from "../Components/UI/InputField/InputField";
import EventCard from "../Components/EventCard/EventCard";
import logo from "../Assets/Images/logo.svg";
import fans from "../Assets/Images/fans_cheering.jpeg";
import ConfirmModal from "../Components/ConfirmModal/ConfirmModal";
// import Navbar from "../Components/Navbar";
function Events() {
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
      key={events.title}
    ></EventCard>
  );
  const [showModal, setModalState] = useState(false);
  const [modalProps, setModalProps] = useState({header_value: "Test Header", body_value: "Test Body"});
  const handleShowModal = () => {
    setModalState(true);
    handleModalPropChange({header_value: "Test Header Changed", body_value: "Test Body Changed"})
  }
  const handleHideModal = (confirmed) => {
    console.log(confirmed)
    setModalState(false);
  }
  const handleModalPropChange = (value) => {
    setModalProps(value);
  }

  return (
    <div>
      {/* Uncomment navbar when page is styled, currently overlapping things */}
      {/* <Navbar /> */}
      <ConfirmModal show={showModal} handleClose={handleHideModal} props={modalProps} />
      <div>Hello World</div>
      <div>
        <Button
          onClick={() => {
            console.log("Click");
          }}
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
      <Button onClick={handleShowModal}>Open Modal</Button>
      {eventCards}
    </div>
  );
}

export default Events;
