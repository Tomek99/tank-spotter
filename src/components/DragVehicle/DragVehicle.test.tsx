import { render } from "@testing-library/react";

import DragVehicle from "./DragVehicle";

const item = { id: 23, x: 23, y: 23, sort: 0 };

test("should render DragVehicle component", () => {
  const settleMark = jest.fn();
  const updateCooridnates = jest.fn();

  const { container } = render(
    <DragVehicle
      item={item}
      settleMark={settleMark}
      updateCooridnates={updateCooridnates}
    />
  );

  expect(container).toMatchSnapshot();
});
