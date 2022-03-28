import React, { useState } from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import { Link,useNavigate,useLocation } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import uuid from 'react-uuid'
import LoadingComponent from "../../Components/Loading/LoadingComponent";
import MyTextInput from "../../Components/form/MyTextInput"
import agent from "../../api/agent";
function EventForm() {
  // const selectedEvent = useSelector((state) =>
  //   state.event.events.find((i) => i.id === match.params.id)
  // );

  let history = useNavigate();
  
  const initialValue =  {
    EventID:uuid(),
    EventTitle: "",
    EventPrice: 0,
    EventLocation:"",
    EventType: "",
    img: "",
  };
  const [isSubmitting,setIsSubmitting]= useState(false);
  const validationSchema = Yup.object({
    EventTitle: Yup.string().required("You must provide a title"),
    EventLocation: Yup.string().required("You must provide a Location"),
    EventType: Yup.string().required("You must provide a EventType"),
    img: Yup.string().required("You must provide a image URL"),
  });

  function handleSubmit(values)
  {
    try {
      setIsSubmitting(true);
      console.log(values);

      agent.Event.create(values);

      history('/events');
    } catch (error) {
      console.log(error)
    }
    finally{
      setIsSubmitting(false);
    }

  }
 

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        // onSubmit={ (values, { setSubmitting }) =>  handleSubmit(values)}
      >
        {({ values}) => (
         
          <Form className="ui form">
            <Header content="Event Details" color="teal" />

            <MyTextInput name="EventTitle" placeholder="Event Title" />
            <MyTextInput name="EventLocation" placeholder="Event Location" />
            <MyTextInput name="EventType" placeholder="Event Type" />
            <MyTextInput name="img" placeholder="Event Image URL" />
            <MyTextInput name="EventPrice" type="number" placeholder="Event Price" min="0" />
           
          
            <Button
              loading={isSubmitting}
              type="button"
              floated="right"
              positive
              content="Submit"
              disabled={isSubmitting}
              onClick={()=>handleSubmit(values)}
            />
            <Button
              as={Link}
              to="/events"
              type="button"
              floated="right"
              content="Cancel"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
     
    </Segment>
  );
}

export default EventForm;
