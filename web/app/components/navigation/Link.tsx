import NextLink from "next/link";
import { ReactElement, ReactNode } from "react";
import { Anchor, AnchorProps } from "@mantine/core";

interface Props extends AnchorProps<"a"> {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children, ...props }: Props): ReactElement => {
  return (
    <NextLink href={href}>
      <Anchor sx={{ fontWeight: "bold" }} {...props}>
        {children}
      </Anchor>
    </NextLink>
  );
};
export default Link;
