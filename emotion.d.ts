import "@emotion/react";
import { Theme as InsdTheme } from "./theme/types";

declare module "@emotion/react" {
  export interface Theme extends InsdTheme {}
}
