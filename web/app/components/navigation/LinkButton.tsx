import NextLink from "next/link";
import { ReactElement, ReactNode } from "react";
import { Button, ButtonProps } from "@mantine/core";

interface Props extends ButtonProps<"a"> {
  href: string;
  children: ReactNode;
}

const LinkButton = ({ href, children, ...props }: Props): ReactElement => {
  return (
    <NextLink href={href}>
      <Button component="a" sx={{ fontWeight: "bold" }} {...props}>
        {children}
      </Button>
    </NextLink>
  );
};
export default LinkButton;
