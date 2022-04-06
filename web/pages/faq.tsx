import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { Accordion, Box, Paper, Text } from "@mantine/core";
import faqItems from "@/utils/faqItems";

const FAQ: NextPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          py={75}
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
            },
            "@media (min-width: 768px) and (max-width: 1200px)": {
              fontSize: 50,
            },
          })}
        >
          Frequently Asked Questions
        </Text>
        <Paper sx={{ maxWidth: "500px" }} shadow="xs">
          <Accordion sx={{ width: "100%" }}>
            {faqItems.map((faqItem) => (
              <Accordion.Item label={faqItem.question}>
                {faqItem.answer}
              </Accordion.Item>
            ))}
          </Accordion>
        </Paper>
      </Box>
    </Layout>
  );
};

export default FAQ;
