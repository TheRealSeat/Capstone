import Modal from "react-bootstrap/Modal";
import "../ConfirmModal/ConfirmModal.scss";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { removeFromCart } from "../../Services/Slices/cart";
import { Button, Divider, Icon } from "semantic-ui-react";
import { Table } from "react-bootstrap";
const CartModal = ({ show, handleClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        show={show}
        dialogClassName="modal-content-style"
        onHide={handleClose}
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ color: "#bac3d6" }}>
          <span>Cart</span>
        </Modal.Header>
        <Modal.Body style={{ color: "#bac3d6" }}>
          {cart.cartEvents.length > 0 ? (
            <>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Catalog</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.cartEvents?.map((product, index) => (
                    <tr key={index}>
                      <td>{product.catalog}</td>
                      <td>{product.event_title}</td>
                      <td>{product.event_location}</td>
                      <td>{product.event_pricesFrom}</td>
                      <td>
                        <Button
                          animated="vertical"
                          onClick={() => dispatch(removeFromCart(index))}
                        >
                          <Button.Content hidden>Delete</Button.Content>
                          <Button.Content visible>
                            <Icon name="trash" />
                          </Button.Content>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Divider></Divider>

              <Typography
                variant="h4"
                sx={{ textalign: "right", marginRight: "10%" }}
              >
                <li>Total: ${cart.cartTotalAmount}</li>
              </Typography>
            </>
          ) : (
            <h3>Your cart is empty</h3>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose(false)} color="red">
            Close
          </Button>
          <Button onClick={() => handleClose(true)} color="green">
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
