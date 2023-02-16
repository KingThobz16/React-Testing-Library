import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counter-two";
import userEvent from "@testing-library/user-event";


describe('CounterTwo', () => {

    test('renders correctly', () => {
        render(<CounterTwo count={0}/>);
        const textElement = screen.getByText("Counter Two");
        expect(textElement).toBeInTheDocument()
    });
 
    // To insure the click handlers are called onclick of the two buttons
    test('handlers are called', async () => { 
        userEvent.setup()
        // 2 mock functions using jest
        // this will cause both buttons to be renderd
        // and we can then select them below
        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()
        // pass in 2 handlers, so the component renders the buttons
        render(<CounterTwo 
            count={0}
            handleIncrement={incrementHandler}
            handleDecrement={decrementHandler}
        />);

        const incrementButton = screen.getByRole('button', {name: 'Increment'})
        const decrementButton = screen.getByRole('button', {name: 'Decrement'})

        // simulate click using the user event library
        await userEvent.click(incrementButton)
        await userEvent.click(decrementButton)

        // assert that the 2 mock functions have been called
        expect(incrementHandler).toHaveBeenCalledTimes(1)
        expect(decrementHandler).toHaveBeenCalledTimes(1)
     })

})
