import homeStyles from "../styles/Home.module.css";
import Head from "next/head";
import Hero from "@/components/Hero";
import { baseUrl, fetchApi } from "@/utils/Api";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import Image from "next/image";
import Property from "@/components/Property";
import Properties from "@/components/Properties";

export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForSale);
  return (
    <>
      <Head>
        <title>Platinum</title>
      </Head>
      <Hero />
      <Container maxWidth="xl">
        <Properties
          properties={propertiesForSale}
          purpose={"Sale"}
          linkName={"Buying"}
        />
        <Properties
          properties={propertiesForRent}
          purpose={"Rent"}
          linkName={"Renting"}
        />
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
          mb={6}
        >
          <Typography variant="h5" fontWeight={"700"} color={"primaryText"}>
            Properties For Sale
          </Typography>
          <Button>Explore Buying</Button>
        </Box>
        <Grid container spacing={4}>
          {propertiesForSale.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Grid> */}
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
          mb={6}
        >
          <Typography variant="h5" fontWeight={"700"} color={"primaryText"}>
            Properties For Rent
          </Typography>
          <Button>Explore Renting</Button>
        </Box>
        <Grid container spacing={4}>
          {propertiesForRent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Grid> */}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
