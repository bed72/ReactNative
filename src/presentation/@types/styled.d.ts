import "styled-components";

import themes from "@presentation/themes";

declare module "styled-components" {
  type ThemeType = typeof themes;

  export interface DefaultTheme extends ThemeType {}
}
