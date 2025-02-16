import { IconButton as MuiIconButton } from "@mui/material";
import { ComponentProps } from "react";

type IconButtonProps = ComponentProps<typeof MuiIconButton>;

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return <MuiIconButton {...props}>{children}</MuiIconButton>;
};

export default IconButton;
