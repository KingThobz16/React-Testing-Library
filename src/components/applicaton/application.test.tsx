import Application from "./application";
import { render, screen } from "@testing-library/react";

describe('Application', () => { 
    test('renders correctly', () => { 
        render(<Application/>)
        const nameElement = screen.getByRole('textbox')
        expect(nameElement).toBeInTheDocument()
     })
 })