import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BlurScreen from "./BlurScreen";

test("should render BlurScreen component", () => {
  const mock = jest.fn();

  const { container } = render(<BlurScreen handleBlurScreen={mock} />);

  expect(container).toMatchSnapshot();
});

test("should handle function", async () => {
  const mock = jest.fn();

  render(<BlurScreen handleBlurScreen={mock} />);
  const div = screen.getByTestId("blurScreenID");

  await user.click(div);

  expect(mock).toHaveBeenCalled();
});
