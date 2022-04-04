import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import {  NavLink } from "react-router-dom";
import CartModal from "../CartModal/CartModal";
import { useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const [showCart, setCartState] = useState(false);
  const cart = useSelector((state) => state.cart);

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <NavLink to="/">
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={() => setActiveItem("Home")}
          />
        </NavLink>
        <NavLink to="/Events">
          <Menu.Item
            name="Events"
            active={activeItem === "Events"}
            onClick={() => setActiveItem("Events")}
          />
        </NavLink>
        <NavLink to="/Services">
          <Menu.Item
            name="Fans"
            active={activeItem === "Fans"}
            onClick={() => setActiveItem("Fans")}
          />
        </NavLink>
        <NavLink to="/Services">
          <Menu.Item
            name="Organizers"
            active={activeItem === "Organizers"}
            onClick={() => setActiveItem("Organizers")}
          />
        </NavLink>
          <Button style={{backgroundColor:'#576278',marginLeft:'75%',display:'flex'}} onClick={()=>setCartState(true)}>
          <Badge badgeContent={cart.cartEvents.length} color="secondary">
              <ShoppingCart />
            </Badge>
           <p style={{marginLeft:'5px',color:'#c1c9d9'}}>View Cart</p>
          </Button>
           
         
      </Menu>

      <CartModal show={showCart} handleClose={() => setCartState(false)} />
    </Segment>
  );
};

export default Navbar;
