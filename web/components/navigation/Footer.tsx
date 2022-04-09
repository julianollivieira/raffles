import { ReactElement } from "react";
import { Box } from "@mantine/core";
import { Text, Container, ActionIcon, Group, Paper } from "@mantine/core";
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react";
import Logo from "@/components/Logo";
import footerItems from "@/utils/footerItems";

interface Props {
  //
}

const Footer = ({}: Props): ReactElement => {
  return (
    <Paper
      component="footer"
      sx={(theme) => ({
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        borderRadius: 0,
      })}
    >
      <Container
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        })}
      >
        <Box
          component="div"
          sx={(theme) => ({
            maxWidth: 200,

            [theme.fn.smallerThan("sm")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          })}
        >
          <Logo withText />
          <Text
            size="xs"
            color="dimmed"
            sx={(theme) => ({
              marginTop: 5,
              [theme.fn.smallerThan("sm")]: {
                marginTop: theme.spacing.xs,
                textAlign: "center",
              },
            })}
          >
            Build fully functional accessible web applications faster than ever
          </Text>
        </Box>
        <Box
          component="div"
          sx={(theme) => ({
            display: "flex",
            flexWrap: "wrap",
            [theme.fn.smallerThan("sm")]: {
              display: "none",
            },
          })}
        >
          {footerItems.map((group) => (
            <div key={group.title}>
              <Box sx={{ width: 160 }} key={group.title}>
                <Text
                  sx={(theme) => ({
                    fontSize: theme.fontSizes.lg,
                    fontWeight: 700,
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    marginBottom: theme.spacing.xs / 2,
                    color:
                      theme.colorScheme === "dark" ? theme.white : theme.black,
                  })}
                >
                  {group.title}
                </Text>
                {group.links.map((link, index) => (
                  <Text<"a">
                    key={index}
                    sx={(theme) => ({
                      display: "block",
                      color:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[1]
                          : theme.colors.gray[6],
                      fontSize: theme.fontSizes.sm,
                      paddingTop: 3,
                      paddingBottom: 3,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    })}
                    component="a"
                    href={link.link}
                    onClick={(event) => event.preventDefault()}
                  >
                    {link.label}
                  </Text>
                ))}
              </Box>
            </div>
          ))}
        </Box>
      </Container>
      <Container
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: theme.spacing.xl,
          paddingTop: theme.spacing.xl,
          paddingBottom: theme.spacing.xl,
          borderTop: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[2]
          }`,
          [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
          },
        })}
      >
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group
          spacing={0}
          sx={(theme) => ({
            [theme.fn.smallerThan("sm")]: {
              marginTop: theme.spacing.xs,
            },
          })}
          position="right"
          noWrap
        >
          <ActionIcon size="lg">
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </Paper>
  );
};

export default Footer;
