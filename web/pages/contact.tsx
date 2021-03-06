import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { Box, Button, Paper, Text, Textarea, TextInput } from "@mantine/core";
import Link from "@/components/navigation/Link";

const Contact: NextPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
        pb={50}
      >
        <Text
          py={75}
          sx={(theme) => ({
            fontSize: 80,
            fontWeight: "900",
            color:
              theme.colorScheme === "light"
                ? theme.colors.gray[9]
                : theme.colors.gray[0],
            lineHeight: "90px",
            "@media (max-width: 768px)": {
              fontSize: 30,
              paddingTop: 10,
              paddingBottom: 10,
            },
            "@media (min-width: 768px) and (max-width: 1200px)": {
              fontSize: 50,
            },
          })}
        >
          Contact us
        </Text>
        <Paper
          sx={{
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
          shadow="xs"
          p={30}
        >
          <TextInput
            placeholder="Your email"
            label="Email"
            required
            type="email"
          />
          <Textarea
            placeholder="Your message"
            label="Message"
            required
            minRows={10}
          />
          <Box
            pt={10}
            sx={(theme) => ({
              display: "flex",
              justifyContent: "end",
              gap: 50,
              [theme.fn.smallerThan("sm")]: {
                gap: 10,
                flexDirection: "column-reverse",
                textAlign: "center",
              },
            })}
          >
            <Text
              size="sm"
              color="gray"
              sx={(theme) => ({
                [theme.fn.smallerThan("sm")]: {
                  fontSize: theme.fontSizes.xs,
                },
              })}
            >
              Don&apos;t hesitate to have a look at our{" "}
              <Link href="/faq" size="sm">
                FAQ
              </Link>
              , you&apos;ll probably find an answer to your question!
            </Text>
            <Button sx={{ fontWeight: "bold" }}>Send</Button>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Contact;
