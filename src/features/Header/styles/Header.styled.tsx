import styled from "@emotion/styled";

export const HeaderElement = styled.header({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#0f1214",
  borderBottom: "1px solid #3d47514d",

  a: {
    textDecoration: "none",
    color: "#ccc",
    padding: "0.4rem",

    "&:hover": {
      borderRadius: 8,
      color: "#eee",
      background: "#3d47514d",
    },
  },
});

export const HeaderNav = styled.nav({
  ul: {
    display: "flex",
    gap: "1rem",
    listStyle: "none",
  },
});
