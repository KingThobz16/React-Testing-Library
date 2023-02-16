import Application from "./application";
import { render, screen } from "@testing-library/react";

describe('Application', () => { 
    test('renders correctly', () => { 
        render(<Application/>)

// 
// 
// getByRole query examples 
// 
// 
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

// 
// 
// getByLabelTest query examples 
// 
// 
        // getBylabelText will find the lable element
        // And then find the input associated with that element.
        // 
        const nameElement2 = screen.getByLabelText('Name')
        // now we expect the input element to be in the document
        expect(nameElement2).toBeInTheDocument();

        // in the case the are multiple labels with the same Name value
        // you can use options to be more specific
        const nameElementOptions = screen.getByLabelText('Name', {
            selector: "input",
        })
        // now we expect the input element to be in the document
        expect(nameElementOptions).toBeInTheDocument();

        // getBylabelText can also select using the label value
        // And then find the input associated with that element.
        const termsElement2 = screen.getByLabelText("I agree with the terms and conditions")
        expect(termsElement2).toBeInTheDocument();
     })

 
 })
