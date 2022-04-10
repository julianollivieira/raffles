import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { Accordion, Box, Paper, Text } from "@mantine/core";
import faqItems from "@/utils/items/faqItems";

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
            fontSize: 60,
            fontWeight: "900",
            color:
              theme.colorScheme === "light"
                ? theme.colors.gray[9]
                : theme.colors.gray[0],
            lineHeight: "90px",
            "@media (max-width: 768px)": {
              fontSize: 30,
              lineHeight: "30px",
              textAlign: "center",
              paddingTop: 50,
              paddingBottom: 50,
            },
            "@media (min-width: 768px) and (max-width: 1200px)": {
              fontSize: 42,
            },
          })}
        >
          Frequently Asked Questions
        </Text>
        <Paper sx={{ maxWidth: "800px", width: "100%" }} shadow="xs">
          <Accordion>
            {faqItems.map((faqItem) => (
              <Accordion.Item label={faqItem.question} key={faqItem.question}>
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
