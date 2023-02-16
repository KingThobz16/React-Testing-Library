import { render, screen } from "@testing-library/react";
import { MuiMode } from "./mui-mode";
import { AppProviders } from "../providers/app-providers";

describe('MuiMode', () => { 
    test('renders text correctly', () => {
        // wrapper MuiMode with AppProviders, same as in the app.tsx file
        // Think of instance where you need to pass the context with a context provider
        render(<MuiMode/>, {
            wrapper: AppProviders
        })
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent('dark mode')
    })
 })

//  A single wrapper accross all tests
// By writing a custom render function
// The test-utils.tsx file returns a custom render with all the wrappers in place


import { render as render1, screen as screen1 } from "../../test-utils";

describe('MuiMode', () => { 
    test('renders text correctly with custom wrapper', () => {
        render1(<MuiMode/>)
        const headingElement = screen1.getByRole('heading');
        expect(headingElement).toHaveTextContent('dark mode')
    })
 })