import {  fireEvent , render} from "@testing-library/react";
import React from "react";
import { Checkbox } from "./Checkbox";


//test did not pass because of "render" in line7
//to run the test "npm test"
test("Selecting checkbox", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toequal(true);
});