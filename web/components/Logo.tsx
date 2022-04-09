import { Box, Text, BoxProps } from "@mantine/core";
import type { ReactElement } from "react";

interface Props extends BoxProps<"img"> {
  withText?: boolean;
}

const Logo = ({ withText = false, ...props }: Props): ReactElement => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        component="img"
        src="/imgs/logos/logo.svg"
        alt="Raffle logo"
        sx={{ height: 20 }}
        mr={5}
        {...props}
      />
      {withText && (
        <Text sx={{ fontWeight: 1000 }} color="cyan">
          RAFFLES
        </Text>
      )}
    </Box>
  );
};

export default Logo;
