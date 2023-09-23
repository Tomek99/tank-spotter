import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BtnClearMap from "./BtnClearMap";

test("should handle function", async () => {
  const mock = jest.fn();
  render(<BtnClearMap handleBtn={mock} />);

  const btn = screen.getByText(/clear map/i);
  await user.click(btn);

  expect(mock).toBeCalled();
});
