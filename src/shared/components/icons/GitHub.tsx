import { GitHub as MuiGitHub } from "@mui/icons-material";
import { ComponentProps } from "react";

type IGitHubProps = ComponentProps<typeof MuiGitHub>;

const GitHub = ({ ...props }: IGitHubProps) => {
  return <MuiGitHub {...props} data-testid="icon-GitHub" />;
};

export default GitHub;
