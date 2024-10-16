const Cell=({direction})=>{
    console.log('Cell', direction);
    return (
        <div  className="Cell">
            <span>
                {direction === 'N' && '⬆️'}
                {direction === 'E' && '➡️'}
                {direction === 'S' && '⬇️'}
                {direction === 'W' && '⬅️'}
            </span>
        </div>
    )
}
export default Cell;