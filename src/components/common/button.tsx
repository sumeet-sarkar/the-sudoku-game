interface Props {
    text: string
}

const button = (props: Props): JSX.Element => {
    return(
        <button>
            {props.text}
        </button>
    )
}

export default button
