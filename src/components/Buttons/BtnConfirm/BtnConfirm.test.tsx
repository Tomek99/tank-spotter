import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BtnConfirm from "./BtnConfirm";

const vehicles = [{ id: 0, x: 25, y: 25, sort: 0 }];

const item = {
  id: 24,
  name: "test",
  path: "test",
  camoType: "test",
  availableBattleTypes: [],
};

test("should handle function", async () => {
  const mockAddMap = jest.fn();
  const mockBlurScreen = jest.fn();

  render(
    <BtnConfirm
      addMap={mockAddMap}
      item={item}
      vehicles={vehicles}
      handleBlurScreen={mockBlurScreen}
      message="test"
    />
  );

  const btn = screen.getByText(/confirm/i);
  await user.click(btn);

  expect(mockAddMap).toBeCalled();
  expect(mockBlurScreen).toBeCalled();
});
