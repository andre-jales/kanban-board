import { FC, useEffect } from "react";

import Header from "./features/Header/Header";
import { EnumLanguages, setLanguage } from "./shared/locales";

const App: FC = () => {
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as EnumLanguages;

    if (savedLanguage && Object.values(EnumLanguages).includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default App;
