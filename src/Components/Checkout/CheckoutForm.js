import React, { useState } from "react";
import { Button, Segment, Grid } from "semantic-ui-react";
import Modal from "react-bootstrap/Modal";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../Components/form/MyTextInput";
import Review from "./Review";
const CheckoutForm = ({show,handleClose}) => {
  // const selectedEvent = useSelector((state) =>
  //   state.event.events.find((i) => i.id === match.params.id)
  // );

  const initialValue = {
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validationSchema = Yup.object({
    cardName: Yup.string().required("You must provide a cardName"),
    cardNumber: Yup.string().required("You must provide a cardNumber"),
    expDate: Yup.string().required("You must provide a expDate"),
    cvv: Yup.string().required("You must provide cvv"),
  });

  function handleSubmit(values) {
    try {
      setIsSubmitting(true);
      console.log(values);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal
    show={show}
    dialogClassName="modal-content-style"
    onHide={handleClose}
    keyboard={false}
    centered
  >
    <Modal.Header closeButton style={{ color: "#bac3d6" }}>
      <span>Checkout</span>
    </Modal.Header>
    <Modal.Body style={{ color: "#bac3d6" }}>
    <Segment clearing basic>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
         onSubmit={ (values, { setSubmitting }) =>  handleSubmit(values)}
      >
        {({ values,isValid }) => (
          <Form className="ui form" >
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <MyTextInput name="cardName" placeholder="Card Name" />
                  <MyTextInput name="cardNumber" placeholder="Card Number" />
                </Grid.Column>
                <Grid.Column>
                  <MyTextInput name="expDate" placeholder="Exp Date" />
                  <MyTextInput name="cvv" placeholder="CVV" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                 
                </Grid.Column>
                <Grid.Column>
                 <Review/>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Button
              loading={isSubmitting}
              type="submit"
              floated="right"
              color="brown"
              content="Place order"
              disabled={isSubmitting||!isValid}
              onClick={() => handleSubmit(values)}
            />
           
          </Form>
        )}
      </Formik>
    </Segment>
    </Modal.Body>
    </Modal>
  );
};

export default CheckoutForm;
