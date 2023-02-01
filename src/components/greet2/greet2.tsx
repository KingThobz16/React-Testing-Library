type GreetProps ={
    name? : string
}

export const Greet2 = (props: GreetProps) => {
    return (
        <div>Hello {props.name}</div>
    )
}


