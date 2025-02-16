import { Language as MuiLanguage } from "@mui/icons-material";
import { ComponentProps } from "react";

type ILanguageProps = ComponentProps<typeof MuiLanguage>;

const Language = ({ ...props }: ILanguageProps) => {
  return <MuiLanguage {...props} data-testid="icon-Language" />;
};

export default Language;
