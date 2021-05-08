import './game.css'

const removePeriodInput = (event) => {
    if(event.key==="."){
        event.preventDefault()
    }
}

const Set3x3box = props => {

    return (
        <div className="box-3x3" box={props.boxIndex}>
            {props.row.map((elem, index) => {
                const value = elem || ""
                const readOnly = !isNaN(props.question[props.boxIndex][index]) ? true: false
                const key = props.boxIndex + index.toString()

                const row = (parseInt(props.boxIndex/3) * 3) + parseInt(index/3)
                const column = (parseInt(props.boxIndex%3) * 3) + parseInt(index%3)

                return(
                    <input 
                        key={key}
                        id={key}
                        row={row}
                        column={column}
                        type="number"
                        name="name"
                        min="1"
                        max="9"
                        maxLength="1"
                        readOnly={readOnly}
                        autoComplete="off"
                        value={value}
                        onKeyPress={removePeriodInput}
                        onInput={props.inputHandler}>
                    </input>
                )
            })}
        </div>
    )
}

const sudokuBox = props => {

    return (
        <>
            {props.puzzle.map((box, index) => {
                return (
                    <Set3x3box
                        key={index}
                        row={box}
                        boxIndex={index}
                        inputHandler={props.inputHandler}
                        question = {props.question}
                    />
                )
            })}
        </>
    )
}

export default sudokuBox;
