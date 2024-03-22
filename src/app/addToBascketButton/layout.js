"use client";

import { Button } from "@chakra-ui/react";

const AddToBasketButton = ({ onClick }) => {
  return (
    <Button
      ml="4"
      border="2px solid red"
      color="red"
      width="auto"
      _hover={{
        bg: "red.500",
        color: "white",
      }}
      onClick={onClick} // Prop onClick para manejar el evento de clic
    ></Button>
  );
};

export default AddToBasketButton;
