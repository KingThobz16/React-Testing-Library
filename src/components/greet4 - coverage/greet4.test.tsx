import { render, screen } from "@testing-library/react";
import { Greet4 } from "./greet4";

/** TDD Method
 * Greet should render the text hello and if a name is pass into the component
 * It should render hello followed by the name
 */

describe('Greet', () => {

    test('renders correctly', () => {
        render(<Greet4/>);
        const textElement = screen.getByText(/Hello/);
        expect(textElement).toBeInTheDocument()
    });

})

