import { LightMode as MuiLightMode } from "@mui/icons-material";
import { ComponentProps } from "react";

type ILightModeProps = ComponentProps<typeof MuiLightMode>;

const LightMode = ({ ...props }: ILightModeProps) => {
  return <MuiLightMode {...props} data-testid="icon-LightMode" />;
};

export default LightMode;
