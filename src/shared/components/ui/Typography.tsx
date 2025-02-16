import { Typography as MuiTypography } from "@mui/material";
import { ComponentProps } from "react";

type TypographyProps = ComponentProps<typeof MuiTypography>;

const Typography = ({ children, ...props }: TypographyProps) => {
  return <MuiTypography {...props}>{children}</MuiTypography>;
};

export default Typography;
