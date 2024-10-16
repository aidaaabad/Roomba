

const Controls = ({onMoveForward,onTurnRight}) => {
    return(
    <div className='flex space-x-4 mt-4'>
    <button class='button' onClick={onTurnRight}>Turn Right</button>
    <button class='button' onClick={onMoveForward}>Move Forward</button>
    </div>
    )
}
export default Controls;