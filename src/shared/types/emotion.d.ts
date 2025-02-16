import "@emotion/react";
import { TTheme } from "./TTheme";

declare module "@emotion/react" {
  export type Theme = TTheme;
}
