import { render, screen } from "@testing-library/react";
import { Greet3 } from "./greet3";

/** TDD Method
 * Greet should render the text hello and if a name is pass into the component
 * It should render hello followed by the name
 */

test('Greet renders correctly', () => {
    render(<Greet3/>);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument()
});


test('Greet renders with a name', () => {
    render(<Greet3 name="Thobela" />)
    const textElement = screen.getByText('Hello Thobela');
    expect(textElement).toBeInTheDocument();
});
