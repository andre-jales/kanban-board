import { Translate as MuiTranslate } from "@mui/icons-material";
import { ComponentProps } from "react";

type ITranslateProps = ComponentProps<typeof MuiTranslate>;

const Translate = ({ ...props }: ITranslateProps) => {
  return <MuiTranslate {...props} data-testid="icon-translate" />;
};

export default Translate;
