import { useState } from "react";

import { IconButton, Language, Menu, MenuItem } from "../../shared/components";
import { EnumLanguages, setLanguage } from "../../shared/locales";
import { useTranslate } from "../../shared/locales";

import { SelectLanguageContainer } from "./styles/SelectLanguage.styled";

const SelectLanguage = () => {
  const translate = useTranslate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: EnumLanguages) => {
    setLanguage(lang);
    handleClose();
  };

  return (
    <SelectLanguageContainer>
      <IconButton onClick={handleClick}>
        <Language style={{ color: "#fff" }} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => handleLanguageChange(EnumLanguages.EN_US)}>
          {translate("txtHeader.english")}
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange(EnumLanguages.PT_BR)}>
          {translate("txtHeader.portuguese")}
        </MenuItem>
      </Menu>
    </SelectLanguageContainer>
  );
};

export default SelectLanguage;
