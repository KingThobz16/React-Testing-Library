import Application from "./application";
import { render, screen } from "@testing-library/react";

describe('Application', () => { 
    test('renders correctly', () => { 
        render(<Application/>)

        // checking for the text input
        const nameElement = screen.getByRole('textbox', {
            // we chose the value of the inputs label as out option
            name: "Name",
        }) 
        expect(nameElement).toBeInTheDocument()
        // checking for the textarea input
        const bioElement = screen.getByRole('textbox', {
            // we chose the value of the inputs label as out option
            name: "Bio",
        }) 
        expect(bioElement).toBeInTheDocument()

        // checking by the select element
        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument()

        // checking by the checkbox element
        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        // checking by the submit element
        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()

        // checking by the submit element
        const pageHeading = screen.getByRole('heading', {
            // since there a multiple headings
            // we use options
            // we filter by the value of the heading
            name : "Job application form"
        })
        expect(pageHeading).toBeInTheDocument()

        // checking by the submit element
        const sectionHeading = screen.getByRole('heading', {
            // since there a multiple headings
            // we use options
            // we filter by level heading level 2 for h2
            level : 2,
        })
        expect(sectionHeading).toBeInTheDocument()
     })
 
 })
