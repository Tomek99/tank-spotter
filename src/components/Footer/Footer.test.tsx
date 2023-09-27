import { render } from "@testing-library/react";
import Footer from "./Footer";
import { MemoryRouter } from "react-router-dom";

test("should render Footer component", () => {
  const { container } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
