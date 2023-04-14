import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import Image from "next/image";
import propertyStyles from "../styles/Property.module.css";
import DefaultImage from "../public/house.jpg";
import Link from "next/link";
import millify from "millify";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    externalID,
  },
}) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Link href={`/property/${externalID}`} passHref>
        <Box className={propertyStyles.property}>
          <Box>
            <Image
              src={coverPhoto ? coverPhoto.url : DefaultImage}
              width={400}
              height={300}
              className={propertyStyles.property_image}
              alt="property"
            />
          </Box>
          <Box p={2}>
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
            <Typography color={"textSecondary"} mb={1}>
              {rooms} Rooms | {baths} Baths | {Math.trunc(area)} Square Ft
            </Typography>
            <Typography fontWeight={"700"} color={"orange"}>
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Grid>
  );
};

export default Property;
