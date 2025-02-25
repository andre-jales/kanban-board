import { FC } from "react";

import { DarkMode, IconButton, LightMode } from "../../shared/components";
import { useTheme } from "../../shared/hooks/useTheme";
import { ThemeMode } from "../../shared/types/ThemeMode";

const SelectTheme: FC = () => {
  const { mode, toggleTheme } = useTheme();
  const isDarkMode = mode === ThemeMode.Dark;

  return (
    <IconButton onClick={toggleTheme}>
      {isDarkMode ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default SelectTheme;
