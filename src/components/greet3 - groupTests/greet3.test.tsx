import { render, screen } from "@testing-library/react";
import { Greet3 } from "./greet3";

/** TDD Method
 * Greet should render the text hello and if a name is pass into the component
 * It should render hello followed by the name
 */

// grouping tests using describe

// describe.only() - will run only this test block group
// describe.skip() - will skip this test block group



describe('Greet Group', () => {

    test('renders correctly', () => {
        render(<Greet3/>);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument()
    });
    
    // You can also nest describe
    describe('Nested', () => {

        test('renders with a name', () => {
            render(<Greet3 name="Thobela" />)
            const textElement = screen.getByText('Hello Thobela');
            expect(textElement).toBeInTheDocument();
        });
    });

})

// You can also have multiple describe methods in a test file
describe('Greet Group2', () => {

    test('renders with a name', () => {
        render(<Greet3 name="Thobela" />)
        const textElement = screen.getByText('Hello Thobela');
        expect(textElement).toBeInTheDocument();
    });
});

