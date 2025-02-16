import { Typography } from "../../shared/components";
import { useTranslate } from "../../shared/locales/useTranslate";

import { HeaderElement, HeaderNav } from "./styles/Header.styled";
import SelectLanguage from "./SelectLanguage";

const Header = () => {
  const translate = useTranslate();

  return (
    <HeaderElement>
      <Typography variant="h5">
        <a href="/">{translate("txtHeader.title")}</a>
      </Typography>
      <HeaderNav>
        <ul>
          <li>
            <Typography variant="body2">
              <a href="https://github.com/andre-jales/kanban-board">
                {translate("txtHeader.githubProject")}
              </a>
            </Typography>
          </li>
        </ul>
      </HeaderNav>
      <SelectLanguage />
    </HeaderElement>
  );
};

export default Header;
