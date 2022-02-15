import { render} from "@testing-library/react";
import TestLibrary from './TestLibrary';
import React from "react";

test("renders an h1", ()=> {
    const { getByText } = render(<TestLibrary />);
    const h1 = getByText(/Hello React Testing Library/);
    expect(h1).toHaveTextContent("Hello React Testing Library"
    )
});