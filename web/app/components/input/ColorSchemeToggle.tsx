import {
  useMantineColorScheme,
  ActionIcon,
  Group,
  SegmentedControl,
  Center,
  Box,
  GroupProps,
} from "@mantine/core";
import { ReactElement } from "react";
import { Sun, MoonStars } from "tabler-icons-react";

interface Props extends GroupProps {
  segmented?: boolean;
}

const ColorSchemeToggle = ({
  segmented = false,
  ...props
}: Props): ReactElement => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Group position="center" {...props}>
      {segmented ? (
        <SegmentedControl
          value={colorScheme}
          onChange={(value: "light" | "dark") => {
            toggleColorScheme(value);
          }}
          data={[
            {
              value: "light",
              label: (
                <Center>
                  <Sun size={16} />
                  <Box ml={10}>Light</Box>
                </Center>
              ),
            },
            {
              value: "dark",
              label: (
                <Center>
                  <MoonStars size={16} />
                  <Box ml={10}>Dark</Box>
                </Center>
              ),
            },
          ]}
        />
      ) : (
        <ActionIcon
          onClick={() => toggleColorScheme()}
          size="lg"
          sx={(theme) => ({
            height: "36px",
            width: "36px",
            backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
            color: dark ? theme.colors.yellow[4] : theme.colors.cyan[6],
          })}
        >
          {colorScheme === "dark" ? <Sun size={18} /> : <MoonStars size={18} />}
        </ActionIcon>
      )}
    </Group>
  );
};

export default ColorSchemeToggle;
