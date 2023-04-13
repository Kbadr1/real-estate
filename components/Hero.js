import React from "react";
import Image from "next/image";
import heroImage from "../public/hero3.svg";
import { Container, Grid, Typography, Box } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import homeStyles from "../styles/Home.module.css";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F2F6F7",
      }}
      py={12}
      mb={12}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  mb={2}
                >
                  <Typography
                    color="orange"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    variant="h6"
                  >
                    <HomeRoundedIcon />
                  </Typography>
                  <Typography
                    color={"primaryText"}
                    fontWeight={"500"}
                    variant="h6"
                  >
                    Real Estate Agency
                  </Typography>
                </Box>
                <Typography
                  color={"primaryText"}
                  variant="h2"
                  fontWeight={"700"}
                  mb={4}
                >
                  Search and find{" "}
                  <Box component={"span"} color={"orange"}>
                    Luxury
                  </Box>{" "}
                  House
                </Typography>

                <Typography color={"secondaryText"}>
                  Explore from Apartments, builder floors, villas and more
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sx={{ display: { xs: "none", md: "block" } }}>
            <Image
              src={heroImage}
              alt="hero image"
              className={homeStyles.hero_image}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
