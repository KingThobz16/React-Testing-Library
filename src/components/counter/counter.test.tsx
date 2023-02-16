import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./counter";

describe('Counter', () => {
    // test to check if the component renders correctly
    test('Renders Correctly', () => {
        // We render counter on the virtual dom
        render(<Counter />)
        // We find the count element and check if its in the dom
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();

        // We find the increment button and check if its in the dom
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        expect(incrementButton).toBeInTheDocument();
    });

    // To test the initial state of the component
    test('Renders a count of 0', () => {
        render(<Counter />)
        // We find the count element
        const countElement = screen.getByRole('heading');
        // We expect the count element to text of 0 
        expect(countElement).toHaveTextContent('0');
    });
    
    /*
    // 
    // 
    // To test user interaction
    // 
    // 
    // 
    */
    // Test if the count is 1 after clicking once
    test('Renders a count of 1 after clicking the increment button', async () => {
        // create an instance of user-event
        userEvent.setup()

        render(<Counter />)
        // We find the increment button
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        await userEvent.click(incrementButton)
        // We find the count element
        const countElement = screen.getByRole('heading');
        // We expect the count element to text of 1 
        expect(countElement).toHaveTextContent('1');
    });

    // Test if the count is 2 after clicking twice
    test('Renders a count of 2 after clicking the increment button twice', async () => {
        // create an instance of user-event
        userEvent.setup()
        // We render counter on the virtual dom
        render(<Counter />)
        // We find the increment button
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        // We perform a click
        await userEvent.dblClick(incrementButton)
        // We find the count element
        const countElement = screen.getByRole('heading');
        // We expect the count element to text of 1 
        expect(countElement).toHaveTextContent('2');
    });

    /*
    // 
    // 
    // To test user interaction with input field and set button
    // 
    // 
    // 
    */
    test('Renders a count of 10 after clicking the Set button', async () => {
        // create an instance of user-event
        userEvent.setup()
        // We render counter on the virtual dom
        render(<Counter />)
        // We fine the input element
        const amountInput = screen.getByRole('spinbutton');
        // We simulate a user entering data
        await userEvent.type(amountInput, '10');
        // expect the amount input to have a value of 10
        expect(amountInput).toHaveValue(10);
        // We find the Set button
        const setButton = screen.getByRole('button', {
            name: 'Set'
        });
        // We simulate a user clicking button
        await userEvent.click(setButton)
        // We fine the heading element
        const countElement = screen.getByRole('heading');
        // We expect the count element to text of 10 
        expect(countElement).toHaveTextContent('10');
    });

    // test is elements are focused on the right order, when pressing tab
    test('elements are focused in the right order', async () => {
        userEvent.setup()
        render(<Counter/>)
        // We find all the elements
        const amountInput = screen.getByRole('spinbutton');
        const setButton = screen.getByRole('button', {
            name: 'Set'
        });
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        // To simulate tab and expect incrementButton to have focus
        await userEvent.tab()
        expect(incrementButton).toHaveFocus()
        // To simulate tab and expect amountInput to have focus
        await userEvent.tab()
        expect(amountInput).toHaveFocus()
        // To simulate tab and expect setButton to have focus
        await userEvent.tab()
        expect(setButton).toHaveFocus()
    });
})