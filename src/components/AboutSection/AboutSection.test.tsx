import { render } from "@testing-library/react";
import AboutSection from "./AboutSection";

test("rendering required component", () => {
  const { container } = render(<AboutSection />);
  expect(container).toMatchSnapshot();
});
