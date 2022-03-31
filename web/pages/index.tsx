import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { Box, Button, Text } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: 100,
          "@media (min-width: 768px)": {
            paddingTop: 200,
          },
        }}
      >
        <Text
          sx={(theme) => ({
            fontSize: 80,
            fontWeight: "1000",
            color:
              theme.colorScheme === "light"
                ? theme.colors.gray[9]
                : theme.colors.gray[0],
            lineHeight: "90px",
            "@media (max-width: 768px)": {
              fontSize: 30,
              lineHeight: "30px",
            },
            "@media (min-width: 768px) and (max-width: 1200px)": {
              fontSize: 50,
              lineHeight: "60px",
            },
          })}
        >
          Never miss a single
        </Text>
        <Text
          sx={(theme) => ({
            fontSize: 80,
            fontWeight: "1000",
            background: `-webkit-linear-gradient(${theme.colors.teal[5]}, ${theme.colors.cyan[5]})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "90px",
            "@media (max-width: 768px)": {
              fontSize: 30,
              lineHeight: "30px",
            },
            "@media (min-width: 768px) and (max-width: 1200px)": {
              fontSize: 50,
              lineHeight: "60px",
            },
          })}
        >
          sneaker drop
        </Text>
        <Text
          color="gray"
          pt={20}
          sx={(theme) => ({
            fontSize: 25,
            fontWeight: 500,
            width: "75%",
            "@media (max-width: 768px)": {
              fontSize: 15,
            },
            "@media (min-width: 768px) and (max-width: 992px)": {
              fontSize: 20,
            },
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi facilis
          iste minus vitae enim sapiente consequatur fugiat blanditiis atque
          explicabo veritatis eum quidem, facere quasi id! Fugit suscipit
          praesentium culpa?
        </Text>
        <Button
          mt={20}
          size="xl"
          sx={{
            borderRadius: 9999,
            "@media (max-width: 768px)": {
              fontSize: 15,
            },
          }}
        >
          Sign up for free!
        </Button>
      </Box>
    </Layout>
  );
};

export default Home;
