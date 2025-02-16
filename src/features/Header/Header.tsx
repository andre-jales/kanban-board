import { translate } from "shared/locales";

import { HeaderElement, HeaderNav, HeaderTitle } from "./styles/Header.styled";

const Header = () => {
  return (
    <HeaderElement>
      <HeaderTitle>
        <a href="/">{translate("txtHeader.title")}</a>
      </HeaderTitle>
      <HeaderNav>
        <ul>
          <li>
            <a href="https://github.com/andre-jales/kanban-board">
              {translate("txtHeader.githubProject")}
            </a>
          </li>
        </ul>
      </HeaderNav>
    </HeaderElement>
  );
};

export default Header;
