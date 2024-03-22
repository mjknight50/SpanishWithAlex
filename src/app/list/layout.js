"use client";

import { Grid } from "@chakra-ui/react";
import CardDetail from "../cardDetail/layout";
import LayoutContainer from "../commons/layoutContainer/layout";

const List = ({ materiales }) => {
  return (
    <LayoutContainer pt={16}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        justifyContent="space-around"
      >
        {materiales.map((material) => (
          <CardDetail material={material} key={material._id} />
        ))}
      </Grid>
    </LayoutContainer>
  );
};

export default List;
