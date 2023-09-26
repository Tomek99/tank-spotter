import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BtnHamburger from "./BtnHamburger";
import { NavigationBarContext } from "../../../contexts/NavigationBarContext";

interface navData {
  text: string;
  path: string;
}

test("should handle function", async () => {
  const handleBtnMobileNav = jest.fn();
  const activeMobileNav: boolean = false;
  const navigationData: navData[] = [];
  const blurScreen = false;

  render(
    <NavigationBarContext.Provider
      value={{
        activeMobileNav,
        handleBtnMobileNav,
        blurScreen,
        navigationData,
      }}
    >
      <BtnHamburger />
    </NavigationBarContext.Provider>
  );

  const btn = screen.getByTestId("btnHamburger");
  await user.click(btn);

  expect(handleBtnMobileNav).toHaveBeenCalled();
});
