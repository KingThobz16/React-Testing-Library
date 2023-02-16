import { render, screen } from "@testing-library/react";
import { Users } from "./users";
import { server } from '../../mocks/server'
import { rest } from 'msw'
// api mocking - https://mswjs.io

describe('CounterTwo', () => {

    test('renders correctly', () => {
        render(<Users/>);
        const textElement = screen.getByText("Users");
        expect(textElement).toBeInTheDocument()
    });

    // To check if it renders a list of users
    test('renders a list of users', async () => {
        render(<Users/>);
        // select all the list of items
        const users = await screen.findAllByRole('listitem')
        // we expect users to have 3 items
        expect(users).toHaveLength(3);
    });

    // To check if it renders error
    test('renders error, async', async () => {
        // specify which request to use.
        // default is in the handlers.ts file which return status 200
        // we defined a custom handler which the server will use
        server.use(
            rest.get(
                'https://jsonplaceholder.typicode.com/users',
                (req, res, ctx) => {
                    return res(ctx.status(500))
                }
            )
        )
        render(<Users/>)
        const error = await screen.findByText('Error fetching users')
        expect(error).toBeInTheDocument()
    });

})