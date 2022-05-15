import { Badge, Card, Text, Group, Image, Button, Center } from "@mantine/core";
import { ReactElement } from "react";
import { CalendarEvent, Palette, Tag, ColorSwatch } from "tabler-icons-react";

interface Props {
  image: string;
}

const SneakerCard = ({ image }: Props): ReactElement => {
  const mockdata = [
    { label: "02/25/2017", icon: CalendarEvent },
    { label: "CP9654", icon: Palette },
    { label: "$220", icon: Tag },
    { label: "White/Core Black/Red", icon: ColorSwatch },
  ];

  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card
      radius="md"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      })}
      shadow="xs"
    >
      <Card.Section
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[3]
          }`,
        })}
      >
        <Image src={image} alt="Tesla Model S" />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text weight={500}>adidas Yeezy Boost 350 V2</Text>
          <Text size="xs" color="dimmed">
            Zebra
          </Text>
        </div>
        <Badge variant="outline">NEW</Badge>
      </Group>

      <Card.Section
        sx={(theme) => ({
          padding: theme.spacing.md,
          borderTop: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[3]
          }`,
        })}
        mt="md"
      >
        <Text
          size="sm"
          color="dimmed"
          sx={(theme) => ({
            marginBottom: theme.spacing.xs,
            lineHeight: 1,
            fontWeight: 700,
            fontSize: theme.fontSizes.xs,
            letterSpacing: -0.25,
            textTransform: "uppercase",
          })}
        >
          Details
        </Text>

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section
        sx={(theme) => ({
          padding: theme.spacing.md,
          borderTop: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[3]
          }`,
        })}
      >
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              {Math.floor(Math.random() * 10)}
            </Text>
            <Text
              size="sm"
              color="dimmed"
              weight={500}
              sx={{ lineHeight: 1 }}
              mt={3}
            >
              raffles open
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            View raffles
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default SneakerCard;
