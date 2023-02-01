import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// You can either use the "test()" or "it()" method to create a test.
// 

test('Greet renders correctly', () => {
    // create a virtual dom of the greet component, against which we test our assertions
    // To create a virtual dom of our component we use the render method from react testing library
    // and pass in our componenet
    render(<Greet/>);
    // now check if the text hello is present.
    // for that we query the global screen object that RTL provides
    // and use the getbytext method available on the screen object
    const textElement = screen.getByText(/hello/i);
    // We use the expect methed from jest, to test our assertion
    // We expect text element to be in the virtual dom created by render above
    expect(textElement).toBeInTheDocument()
});