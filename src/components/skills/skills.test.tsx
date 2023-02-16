import { render, screen, logRoles } from "@testing-library/react";
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

    // To confirm the login button is the UI
    test('renders Login button', () => {
        // we render the component with the props
        render(<Skills skills={skills}/>)
        // Find the login button element using get by role
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        // Expect it to be in the document
        expect(loginButton).toBeInTheDocument();
    })

    // To confirm that the start learning button is NOT in the ui
    test('Start Learning Button is not rendered', () => {
        // we render the component with the props
        render(<Skills skills={skills}/>)
        // Find the start learning button element using get by role
        // const loginButton = screen.getByRole('button', {
        // when we want an element to not be present on the dom, we use queryby insteat of getby 
        const loginButton = screen.queryByRole('button', {
            name: 'Start learning'
        })
        // Expect it to NOT be in the document
        expect(loginButton).not.toBeInTheDocument()
    })

    // To check if start learning button is eventually displayed with a setTimeout delay
    test('Start Learning Button is eventually displayed', async () => {
        // we render the component with the props
        const view = render(<Skills skills={skills}/>)
        // To display a list of roles in the dom
        logRoles(view.container)
        // For debuggin
        // screen.debug()
        // Find the start learning button element using get by role
        const loginButton = await screen.findByRole('button', {
            name: 'Start learning'
        }, {
            timeout: 2000
        })
        // Expect it to NOT be in the document
        expect(loginButton).toBeInTheDocument()
    })
 

})
