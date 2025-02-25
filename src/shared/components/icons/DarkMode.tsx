import { DarkMode as MuiDarkMode } from "@mui/icons-material";
import { ComponentProps } from "react";

type IDarkModeProps = ComponentProps<typeof MuiDarkMode>;

const DarkMode = ({ ...props }: IDarkModeProps) => {
  return <MuiDarkMode {...props} data-testid="icon-DarkMode" />;
};

export default DarkMode;
