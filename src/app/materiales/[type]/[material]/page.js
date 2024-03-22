"use client";

import { Text, Card, CardBody, CardFooter, Image } from "@chakra-ui/react";

const Material = ({ material }) => {
  return (
    <Card>
      <CardBody padding={100}>
        <Image src={material?.urlImagen} alt={material?.titulo} />
      </CardBody>
      <CardFooter
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text> {material?.titulo} </Text>
      </CardFooter>
    </Card>
  );
};

export default Material;
