import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe('Skills', () => {
    // array of skills we will pass in as props
    const skills = ["HTML", "CSS", "JavaScript", "React"]

    // test to check if the component renders correctly
    test('Renders Correctly', () => {
        // we render the component with the props
        render(<Skills skills={skills}/>)
        // we insure the list is present in the dom
        const listElement = screen.getByRole('list');
        // we expect the list on the document
        expect(listElement).toBeInTheDocument();
    });
    
    // lets insure that all the list items
    //  are also rendered for the given props
    test('Renders a list of Skills', () => {
        // we render the component with the props
        render(<Skills skills={skills}/>)
        // we then get all the list items using the list item role
        const listItemElements = screen.getAllByRole('listitem');
        // we expect the list elements, to have length of skills.length
        expect(listItemElements).toHaveLength(skills.length);
    })
})