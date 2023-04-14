import React, { useState } from "react";
import propertyDetailsStyles from "../../styles/PropertyDetails.module.css";
import { baseUrl, fetchApi } from "@/utils/Api";
import { Box, Container, Grid, Typography, Modal } from "@mui/material";
import Image from "next/image";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "0",
    boxShadow: 24,
    p: 0,
  };

  const [activeImg, setActiveImg] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (imgId) => {
    setOpen(true);
    setActiveImg(imgId);
    console.log(imgId);
  };
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="lg">
      <Box mb={3} mt={4}>
        <Image
          src={photos[0].url}
          width={1000}
          height={400}
          alt="apartment"
          className={propertyDetailsStyles.heroImage}
        />
      </Box>

      <Typography variant="h6" fontWeight={"700"} color={"primaryText"} mb={2}>
        {title}
      </Typography>
      <Typography color={"textSecondary"} mb={2}>
        {rooms} Rooms | {baths} Baths | {Math.trunc(area)} Square Ft
      </Typography>
      <Typography color={"orange"} mb={3} fontWeight={"700"}>
        AED {price} {rentFrequency && `/${rentFrequency}`}
      </Typography>
      <Typography color={"textSecondary"} lineHeight={"1.7rem"} mb={3}>
        {description}
      </Typography>
      <Grid container spacing={2} mb={3}>
        <Grid xs={12} sm={6} item>
          <Typography
            color={"primaryText"}
            fontWeight={"500"}
            variant="h6"
            display={"inline"}
          >
            Type:{" "}
            <Box component={"span"} sx={{ color: "#5c727d" }}>
              {type}
            </Box>
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Typography
            color={"primaryText"}
            fontWeight={"500"}
            variant="h6"
            display={"inline"}
          >
            Purpose:{" "}
            <Box component={"span"} sx={{ color: "#5c727d" }}>
              {purpose}
            </Box>
          </Typography>
        </Grid>
      </Grid>
      {amenities.length && (
        <Typography
          color={"primaryText"}
          fontWeight={"700"}
          variant="h6"
          mb={1}
        >
          Facilites:
        </Typography>
      )}
      {amenities?.map((item) =>
        item?.amenities?.map((amenity) => (
          <Box
            sx={{
              backgroundColor: "#F2F6F7",
              display: "inline-block",
            }}
            borderRadius={2}
            py={1}
            px={2}
            mr={1}
            mb={1}
            key={amenity.text}
          >
            <Typography color={"orange"}>{amenity.text}</Typography>
          </Box>
        ))
      )}
      <Typography
        color={"primaryText"}
        fontWeight={"700"}
        variant="h6"
        mb={1}
        mt={3}
      >
        Photos:
      </Typography>
      <Grid container spacing={2} mb={4}>
        {photos.slice(0, 6).map((photo) => (
          <Grid item xs={4} md={2} key={photo.id}>
            <Image
              src={photo.url}
              width={1000}
              height={1000}
              alt="apartment"
              className={propertyDetailsStyles.collectionImage}
              onClick={() => handleOpen(photo.id)}
            />
            {photo.id === activeImg && (
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Image
                    src={photo.url}
                    alt="apartment"
                    style={{ width: "100%" }}
                    width={600}
                    height={600}
                  />
                </Box>
              </Modal>
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
