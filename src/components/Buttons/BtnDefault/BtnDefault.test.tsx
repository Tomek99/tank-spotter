import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BtnDefault from "./BtnDefault";

test("should handle function", async () => {
  const mock = jest.fn();
  render(<BtnDefault handleBtn={mock} text="test" id={52} />);

  const btn = screen.getByText("test");
  await user.click(btn);

  expect(mock).toHaveBeenCalled();
});
