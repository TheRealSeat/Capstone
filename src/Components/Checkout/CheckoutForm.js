import React from "react";
import { Button, Segment, Grid } from "semantic-ui-react";
import Modal from "react-bootstrap/Modal";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../Components/form/MyTextInput";
import Review from "./Review";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import agent from "../../Services/Api/agent";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};
const CheckoutForm = ({ show, handleClose }) => {
  // const [Success,setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector((state) => state.cart);
  const initialValue = {
    FirstName: "",
    LastName: "",
    Email: "",
  };
  const validationSchema = Yup.object({
    FirstName: Yup.string().required("You must enter your first name"),
    LastName: Yup.string().required("You must enter your last name"),
    Email: Yup.string().required("You must enter your email address"),
  });

  const handleSubmit = async (value) => {
    console.log(value);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        const { id } = paymentMethod;

        const response = await agent.PaymentIntent.create({
          amount: cart.cartTotalAmount * 100,
          currency: "usd",
          description: "TheRealCapstone",
          payment_method: id,
        });

        //id containers payment method
        console.log(response);
        if (response.data.success) {
          console.log("Successful payment");
          // setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
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
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
          >
            {({ isValid, isSubmitting }) => (
              <Form className="ui form">
                <Grid columns={1}>
                  <Grid.Row>
                    <Grid.Column>
                      <MyTextInput name="FirstName" placeholder="First Name" />
                      <MyTextInput name="LastName" placeholder="Last Name" />
                      <MyTextInput
                        name="Email"
                        placeholder="Email"
                        type="email"
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <CardElement
                        className="card"
                        options={{ CARD_OPTIONS }}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Review />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <Button
                  loading={isSubmitting}
                  type="submit"
                  floated="right"
                  color="brown"
                  content="Place order"
                  disabled={isSubmitting || !isValid}
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
