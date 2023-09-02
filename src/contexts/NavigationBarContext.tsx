import { createContext } from "react";

interface navData {
  text: string;
  path: string;
}

export interface NavBarContextInterface {
  blurScreen: boolean;
  activeMobileNav: boolean;
  navigationData: navData[];
  handleBtnMobileNav: () => void;
  handleBlurScreen: () => void;
}

export const NavigationBarContext = createContext<NavBarContextInterface>({
  blurScreen: false,
  activeMobileNav: false,
  navigationData: [],
  handleBtnMobileNav: () => {},
  handleBlurScreen: () => {},
});
