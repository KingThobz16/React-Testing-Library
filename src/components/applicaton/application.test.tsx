import Application from "./application";
import { render, screen } from "@testing-library/react";

describe('Application', () => { 
    test('renders correctly', () => { 
        render(<Application/>)
        // checking for the text input
        const nameElement = screen.getByRole('textbox')
        expect(nameElement).toBeInTheDocument()

        // checking by the select element
        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument()

        // checking by the checkbox element
        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        // checking by the submit element
        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()
     })

 })
