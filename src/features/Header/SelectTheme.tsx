import { FC } from "react";

import { DarkMode, IconButton, LightMode } from "../../shared/components";
import { useTheme } from "../../shared/hooks/useTheme";

const SelectTheme: FC = () => {
  const { mode, toggleTheme } = useTheme();
  const isDarkMode = mode === "dark";

  return (
    <IconButton onClick={toggleTheme}>
      {isDarkMode ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default SelectTheme;
