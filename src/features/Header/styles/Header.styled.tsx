import styled from "@emotion/styled";

export const HeaderElement = styled.header({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  padding: "1rem",
  height: 64,
  backgroundColor: "#222527",
  borderBottom: "1px solid #3A3F44",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",

  a: {
    textDecoration: "none",
    color: "#D4D4D4",
  },
});

export const HeaderTitle = styled.h1({
  fontFamily: "Roboto, sans-serif",
  color: "#D4D4D4",
});

export const HeaderNav = styled.nav({
  ul: {
    display: "flex",
    gap: "1rem",
    listStyle: "none",
  },

  li: {
    fontFamily: "Roboto, sans-serif",
  },

  "& a:hover": {
    color: "#1E90FF",
  },
});
