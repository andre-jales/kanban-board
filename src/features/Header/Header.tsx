import { FC } from "react";

import {
  AppBar,
  GitHub,
  IconButton,
  Link,
  Typography,
} from "../../shared/components";
import { useTranslate } from "../../shared/locales/useTranslate";

import { ActionsContainer, HeaderContainer } from "./styles/Header.styled";
import SelectLanguage from "./SelectLanguage";

const Header: FC = () => {
  const translate = useTranslate();

  return (
    <header>
      <AppBar>
        <HeaderContainer>
          <Link href="./" underline="none" color="inherit">
            <Typography variant="h6">{translate("txtHeader.title")}</Typography>
          </Link>

          <ActionsContainer>
            <Link
              href="https://github.com/andre-jales/kanban-board"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
            >
              <IconButton color="inherit">
                <GitHub />
              </IconButton>
            </Link>

            <SelectLanguage />
          </ActionsContainer>
        </HeaderContainer>
      </AppBar>
    </header>
  );
};

export default Header;
