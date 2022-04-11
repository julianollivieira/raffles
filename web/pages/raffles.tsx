import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { Box, Grid, MediaQuery, Paper } from "@mantine/core";
import SneakerCard from "@/components/raffles/SneakerCard";

const Raffles: NextPage = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", gap: 24 }} py="xl">
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Paper
            p={5}
            sx={{ width: "250px", height: "min-content" }}
            shadow="xs"
          >
            <p>test2</p>
          </Paper>
        </MediaQuery>
        <Box
          sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}
        >
          <Paper p={5} shadow="xs">
            <p>test</p>
          </Paper>
          <Grid gutter="xl">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Grid.Col lg={6} xl={4} key={i}>
                <SneakerCard image="https://images.stockx.com/360/adidas-Yeezy-Boost-350-V2-Zebra/Images/adidas-Yeezy-Boost-350-V2-Zebra/Lv2/img01.jpg" />
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Raffles;
