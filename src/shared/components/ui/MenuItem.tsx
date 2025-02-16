import { MenuItem as MuiMenuItem } from "@mui/material";
import { ComponentProps } from "react";

type MenuItemProps = ComponentProps<typeof MuiMenuItem>;

const MenuItem = ({ children, ...props }: MenuItemProps) => {
  return <MuiMenuItem {...props}>{children}</MuiMenuItem>;
};

export default MenuItem;
