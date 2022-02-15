import React from "react";
import Button from "../Components/UI/Button/Button";
import InputField from "../Components/UI/InputField/InputField";

function Events() {
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
    </div>
  );
}

export default Events;
