import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { Box } from "@mantine/core";

const Raffles: NextPage = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex" }}>
        <Box>{/* Menu */}</Box>
        <Box>{/* Content */}</Box>
      </Box>
    </Layout>
  );
};

export default Raffles;
