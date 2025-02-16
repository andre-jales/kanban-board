import { Menu as MuiMenu } from "@mui/material";
import { ComponentProps } from "react";

type MenuProps = ComponentProps<typeof MuiMenu>;

const Menu = ({ children, ...props }: MenuProps) => {
  return <MuiMenu {...props}>{children}</MuiMenu>;
};

export default Menu;
