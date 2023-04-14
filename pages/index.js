import Head from "next/head";
import Hero from "@/components/Hero";
import { baseUrl, fetchApi } from "@/utils/Api";
import { Container } from "@mui/material";
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
          link={"/search?purpose=for-sale"}
        />
        <Properties
          properties={propertiesForRent}
          purpose={"Rent"}
          linkName={"Renting"}
          link={"/search?purpose=for-rent"}
        />
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
