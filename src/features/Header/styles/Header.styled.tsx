import styled from "@emotion/styled";

export const HeaderElement = styled.header({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  padding: "1rem",
  height: 32,
  backgroundColor: "#0F1214",
  borderBottom: "1px solid #3d47514d",

  a: {
    textDecoration: "none",
    color: "#ccc",
  },
});

export const HeaderTitle = styled.h1({
  fontFamily: "Roboto, sans-serif",
  fontSize: "1.5rem",
});

export const HeaderNav = styled.nav({
  ul: {
    display: "flex",
    gap: "1rem",
    listStyle: "none",
  },

  li: {
    fontFamily: "'Roboto', sans-serif",
  },

  a: {
    padding: "0.5rem",
  },

  "& a:hover": {
    borderRadius: 8,
    color: "#d4d4d4",
    background: "#3d47514d",
  },
});
