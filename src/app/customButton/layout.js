"use client";

import { Button } from "@chakra-ui/react";

const CustomButton = ({ label, onClick }) => {
  return (
    <Button
      border="2px solid red"
      color="red"
      width="auto"
      _hover={{
        bg: "red.500",
        color: "white",
      }}
      onClick={onClick} // Prop onClick para manejar el evento de clic
    >
      {label}
    </Button>
  );
};

export default CustomButton;
