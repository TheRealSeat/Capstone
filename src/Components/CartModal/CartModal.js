import Modal from "react-bootstrap/Modal";
import "../ConfirmModal/ConfirmModal.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Services/Slices/cart";
import {Button,Icon} from 'semantic-ui-react'
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
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ color: "#bac3d6" }}>
          <span>Cart</span>
        </Modal.Header>
        <Modal.Body style={{ color: "#bac3d6" }}>
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
                <tr>
                  <td>{product.catalog}</td>
                  <td>{product.event_title}</td>
                  <td>{product.event_location}</td>
                  <td>{product.event_pricesFrom}</td>
                  <td>
                  <Button animated='vertical' onClick={() => dispatch(removeFromCart(index))}>
      <Button.Content hidden>Delete</Button.Content>
      <Button.Content visible>
        <Icon name='trash' />
      </Button.Content>
    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p>Total: ${cart.cartTotalAmount}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose(false)} color="red">
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)} color="green">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
