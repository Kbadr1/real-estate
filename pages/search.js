import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { baseUrl, fetchApi } from "@/utils/Api";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import Property from "@/components/Property";
import SearchFilters from "@/components/SearchFilters";

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F2F6F7",
          textAlign: "center",
        }}
        py={3}
      >
        <Button
          onClick={() => setSearchFilters(!searchFilters)}
          sx={{
            fontWeight: "700",
            backgroundColor: "transparent",
            color: "#071C1F",
            "&:hover": {
              color: "#FF5A3C",
              backgroundColor: "transparent",
            },
            transition: "all 0.3s ease-in-out",
            fontSize: 16,
          }}
        >
          Search Property By Filters <FilterListRoundedIcon />
        </Button>
      </Box>

      {searchFilters && <SearchFilters />}
      <Container maxWidth="xl">
        <Typography
          fontWeight={"700"}
          color={"primaryText"}
          variant="h6"
          my={3}
        >
          Properties {router.query.purpose}
        </Typography>
        <Grid container spacing={4}>
          {properties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Grid>
        {properties.length === 0 && (
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              margin: "200px 0",
            }}
          >
            <Typography variant="h6" fontWeight={"600"} color={"primaryText"}>
              No Result Found.
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
