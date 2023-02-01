type GreetProps ={
    name? : string
}

export const Greet4 = (props: GreetProps) => {
    return (
        <div>Hello {props.name ? props.name : 'Guest'}</div>
    )
}


