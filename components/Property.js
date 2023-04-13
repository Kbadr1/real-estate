import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import Image from "next/image";
import propertyStyles from "../styles/Property.module.css";
import DefaultImage from "../public/house.jpg";
import { Scale } from "@mui/icons-material";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
    id,
  },
}) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box className={propertyStyles.property}>
        <Box p={2}>
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            width={400}
            height={350}
            className={propertyStyles.property_image}
          />
        </Box>
        <Box pl={2} pr={2} pb={2}>
          <Typography
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
            color={"textPrimary"}
            fontWeight={"500"}
            mb={1}
          >
            {title}
          </Typography>
          <Typography color={"textPrimary"} mb={1}>
            {rooms} Rooms | {baths} Baths | {Math.trunc(area)} sqft
          </Typography>
          <Typography fontWeight={"700"} color={"textPrimary"}>
            AED {price}
            {rentFrequency && `/${rentFrequency}`}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Property;
