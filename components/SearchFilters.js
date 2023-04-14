import { useState } from "react";
import { filterData, getFilterValues } from "@/utils/filterData";
import { useRouter } from "next/router";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Container,
  Grid,
} from "@mui/material";
import Select from "@mui/material/Select";

const SearchFilters = () => {
  const [filters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };
  return (
    <Box sx={{ backgroundColor: "#F2F6F7" }} pb={3}>
      <Container maxWidth="xl">
        <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 5 }}>
          {filters?.map((filter) => (
            <Grid item xs={4} sm={3} md={1} key={filter.queryName}>
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 120, width: "100%" }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  {filter.placeholder}
                </InputLabel>
                <Select
                  inputProps={{ "aria-label": "Without label" }}
                  onChange={(e) =>
                    searchProperties({ [filter.queryName]: e.target.value })
                  }
                  placeholder={filter.placeholder}
                >
                  {filter?.items.map((item) => (
                    <MenuItem value={item.value} key={item.value}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SearchFilters;
