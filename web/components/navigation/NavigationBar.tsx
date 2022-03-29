import { Box, Button, Text } from "@mantine/core";
import { ReactElement } from "react";

const NavigationBar = (): ReactElement => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      py={5}
    >
      <Text sx={{ fontWeight: "bolder", fontSize: 23 }}>RAFFLES</Text>
      <Box sx={{ display: "flex", gap: 10 }}>
        <Button variant="subtle" color="gray" sx={{ fontWeight: "bold" }}>
          Log in
        </Button>
        <Button sx={{ fontWeight: "bold" }}>Sign up for free</Button>
      </Box>
    </Box>
  );
};

export default NavigationBar;
