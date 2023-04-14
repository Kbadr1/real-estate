import React from "react";
import Property from "./Property";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import Link from "next/link";

const Properties = ({ properties, purpose, linkName, link }) => {
  return (
    <Box mb={12}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
        mb={6}
      >
        <Typography variant="h5" fontWeight={"700"} color={"primaryText"}>
          Properties For {purpose}
        </Typography>
        <Link href={`${link}`}>
          <Button
            sx={{
              backgroundColor: "orange",
              fontWeight: "500",
              color: "white",
              "&:hover": {
                backgroundColor: "orange",
                fontWeight: "500",
                color: "white",
              },
            }}
          >
            Explore {linkName}
          </Button>
        </Link>
      </Box>
      <Grid container spacing={4}>
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default Properties;
