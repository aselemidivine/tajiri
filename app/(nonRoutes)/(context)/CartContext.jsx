"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { truncateString } from "../(utils)/Helpers";

const Context = createContext();

export const CartContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(Cookies.get("cart") || "[]")
  );
  const [totalPrice, setTotalPrice] = useState(
    JSON.parse(Cookies.get("totalPrice") || 0)
  );
  const [totalQuantities, setTotalQuantities] = useState(
    JSON.parse(Cookies.get("totalQuantities") || 0)
  );
  const [qty, setQty] = useState(1);

  useEffect(() => {
    Cookies.set("cart", JSON.stringify(cartItems));
    Cookies.set("totalPrice", JSON.stringify(totalPrice));
    Cookies.set("totalQuantities", JSON.stringify(totalQuantities));
  }, [cartItems, totalQuantities, totalPrice]);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {

    //if its a variation product, size must be selected if not, send a toast back rejecting it
    if (product.type == 'variation' && product.size == null) {
      return toast.error("Please select a size for the product");
    }
    //check if the product is already inside the cart
    const checkProductInCart = cartItems.find((item) => item.id === product.id);
    // adding to the price

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    //adding to the quantity
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    //writing different functionality for when its a variation product or not
    if (checkProductInCart) {
     
      if (product.type == "variation") {
        //checking if the what was added was the same size with the one in cart already
        const checkFoundProductSameSize = cartItems.find(
          (item) => item.id === product.id && item.size === product.size ? item : null
        );
       
        //if its the same size, increase quantity, if its not, add it again with that new size
        if (checkFoundProductSameSize) {
          const updatedCartItems = cartItems.map((cartProduct) => {
            if (
              cartProduct.id === product.id &&
              cartProduct.size == product.size
            ) {
              return {
                ...cartProduct,
                quantity: cartProduct.quantity + quantity,
              };
            } else {
              return {
                ...cartProduct,
              };
            }
          });
          
          setCartItems(updatedCartItems);
          //toast.success(`${truncateString(product.name, 20)} added to the cart.`);
        } else {
          product.quantity = quantity;

          setCartItems([...cartItems, { ...product }]);
        
          //toast.success(`${truncateString(product.name, 20)} added to the cart.`);
        }
      } else {

        const updatedCartItems = cartItems.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          } else {
            return {
              ...cartProduct,
            };
          }
        });
         
        setCartItems(updatedCartItems);
      }
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${truncateString(product.name, 20)} added to the cart.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id && item.size === product.size);
    
    const newCartItems = cartItems.filter((item) => {
      if (item.id == product.id && item.size == product.size) {
       
      }
      else{
        return item
      }
    });

    setCartItems(newCartItems);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
  };

  const toggleCartItemQuanitity = (id, size, value) => {

    foundProduct = cartItems.find((item) => item.id === id && item.size === size);

    if (value === "inc") {
      const newFoundProduct = {
        ...foundProduct,
        quantity: foundProduct.quantity + 1,
      };
      const newArray = cartItems.map((obj) =>
        obj.id === id && obj.size === size ? newFoundProduct : obj
      );
      setCartItems(newArray);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        const newFoundProduct = {
          ...foundProduct,
          quantity: foundProduct.quantity - 1,
        };
        const newArray = cartItems.map((obj) =>
          obj.id === id && obj.size === size ? newFoundProduct : obj
        );
        setCartItems(newArray);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCartContext = () => useContext(Context);
