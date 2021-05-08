interface Props {
    text: string
    clicked: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const button = (props: Props): JSX.Element => {
    return(
        <button onClick={props.clicked}>
            {props.text}
        </button>
    )
}

export default button
