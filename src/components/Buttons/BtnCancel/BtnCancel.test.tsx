import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BtnCancel from "./BtnCancel";

test("should handle function", async () => {
  const mock = jest.fn();
  render(<BtnCancel handleBtn={mock} />);

  const btn = screen.getByText(/cancel/i);
  await user.click(btn);

  expect(mock).toHaveBeenCalled();
});
