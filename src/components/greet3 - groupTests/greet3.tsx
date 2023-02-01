type GreetProps ={
    name? : string
}

export const Greet3 = (props: GreetProps) => {
    return (
        <div>Hello {props.name}</div>
    )
}


