import { Link as MuiLink } from "@mui/material";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof MuiLink>;

const Link = ({ children, ...props }: LinkProps) => {
  return <MuiLink {...props}>{children}</MuiLink>;
};

export default Link;
