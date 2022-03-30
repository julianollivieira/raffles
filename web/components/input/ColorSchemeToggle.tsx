import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { ReactElement } from "react";
import { Sun, MoonStars } from "tabler-icons-react";

const ColorSchemeToggle = (): ReactElement => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Group position="center">
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
    </Group>
  );
};

export default ColorSchemeToggle;
