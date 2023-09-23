import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BtnClose from "./BtnClose";

test("should handle function", async () => {
  const mock = jest.fn();
  render(<BtnClose handleBtn={mock} />);

  const btn = screen.getByTestId(/btnclose/i);
  await user.click(btn);

  expect(mock).toBeCalled();
});
