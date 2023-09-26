import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BtnUpdateData from "./BtnUpdateData";
import { GlobalContext } from "../../../contexts/GlobalContext";

const vehicles = [{ id: 0, x: 25, y: 25, sort: 0 }];

const item = {
  idSavedMap: 24,
  vehicles: vehicles,
  mapName: "test",
  name: "test",
  additionInformation: "test",
};

test("should render BtnUpdateData component", async () => {
  const updateMap = jest.fn();
  const addMap = jest.fn();
  const deleteMap = jest.fn();
  const mockBlurScreen = jest.fn();

  render(
    <GlobalContext.Provider value={{ updateMap, addMap, deleteMap }}>
      <BtnUpdateData
        item={item}
        vehicles={vehicles}
        handleBlurScreen={mockBlurScreen}
        message="test"
      />
    </GlobalContext.Provider>
  );

  const btn = screen.getByText("Confirm");
  await user.click(btn);

  expect(updateMap).toHaveBeenCalled();
});
