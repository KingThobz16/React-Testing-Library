import { render, screen } from "@testing-library/react";
import { Greet2 } from "./greet2";

/** TDD Method
 * Greet should render the text hello and if a name is pass into the component
 * It should render hello followed by the name
 */

test('Greet renders correctly', () => {
    // create a virtual dom of the greet component, against which we test our assertions
    // To create a virtual dom of our component we use the render method from react testing library
    // and pass in our componenet
    render(<Greet2/>);
    // now check if the text hello is present.
    // for that we query the global screen object that RTL provides
    // and use the getbytext method available on the screen object
    const textElement = screen.getByText(/hello/i);
    // We use the expect methed from jest, to test our assertion
    // We expect text element to be in the virtual dom created by render above
    expect(textElement).toBeInTheDocument()
});

// second requirement
// it should render hellow followed by the name, if a name is passed in
test('Greet renders with a name', () => {
    // we render the component
    // we pass in a named prop
    render(<Greet2 name="Thobela" />)
    // Now we check if hello and prop are present on the virtual document
    const textElement = screen.getByText('Hello Thobela');
    // We use the expect methed from jest, to test our assertion
    // We expect text element to be in the virtual dom created by render above
    expect(textElement).toBeInTheDocument();
});
