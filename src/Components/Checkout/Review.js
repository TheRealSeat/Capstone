import * as React from "react";
import { useSelector } from "react-redux";
import "../ConfirmModal/ConfirmModal.scss";
import { Divider } from "semantic-ui-react";
import { Table } from "react-bootstrap";
export default function Review() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Catalog</th>
            <th>Title</th>
            <th>Location</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.cartEvents?.map((product, index) => (
            <tr key={index}>
              <td>{product.catalog}</td>
              <td>{product.event_title}</td>
              <td>{product.event_location}</td>
              <td>{product.event_pricesFrom}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Divider></Divider>

      <li style={{ color: "black" }}>Total: ${cart.cartTotalAmount}</li>
    </>
  );
}
