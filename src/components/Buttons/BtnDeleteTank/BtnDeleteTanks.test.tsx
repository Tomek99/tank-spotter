import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BtnDeleteTank from "./BtnDeleteTank";

test("should handle function", async () => {
  const mock = jest.fn();
  render(<BtnDeleteTank handleBtn={mock(15)} id={15} />);

  const btn = screen.getByText(/delete mark/i);
  await user.click(btn);

  expect(mock).toHaveBeenCalled();
});
