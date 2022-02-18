import React from "react";
import Button from "../Components/UI/Button/Button";
import InputField from "../Components/UI/InputField/InputField";
import ModalService from "../Services/ModalService";
import ModalRoot from "../Components/UI/Modal/ModalRoot";
import ConfirmModal from "../Components/ConfirmModal/ConfirmModal";
function Events() {

  const addModal = () => {
    ModalService.open(ConfirmModal);
  };

  return (
    <div>
      <div> 
      Hello World
      </div>
      <div>
        <Button onClick={() => {console.log("Click");}} type={Button} >
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

    </div>
  );
}

export default Events;
