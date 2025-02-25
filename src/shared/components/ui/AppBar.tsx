import { AppBar as MuiAppBar } from "@mui/material";
import { ComponentProps } from "react";

type AppBarProps = ComponentProps<typeof MuiAppBar>;

const AppBar = ({ children, ...props }: AppBarProps) => {
  return <MuiAppBar {...props}>{children}</MuiAppBar>;
};

export default AppBar;
