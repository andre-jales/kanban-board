import { HeaderElement, HeaderNav, HeaderTitle } from "./styles/Header.styled";

const Header = () => {
  return (
    <HeaderElement>
      <HeaderTitle>
        <a href="/">Kanban Board</a>
      </HeaderTitle>
      <HeaderNav>
        <ul>
          <li>
            <a href="https://github.com/andre-jales">Github project</a>
          </li>
        </ul>
      </HeaderNav>
    </HeaderElement>
  );
};

export default Header;
