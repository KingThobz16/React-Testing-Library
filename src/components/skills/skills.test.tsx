import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe('Skills', () => {
    // array of skills we will pass in as props
    const skills = ["HTML", "CSS", "JavaScript"]

    // test to check if the component renders correctly
    test('Renders Correctly', () => {
        // we render the component with the props
        render(<Skills skills={skills}/>)
    });
})