import React from 'react';
import Cell from '../components/Cell';

const Grid = ({ roombaPosition, roombaDirection }) => {
    const columns = Array.from({ length: 10 }, (_, colIndex) => (
        <div key={colIndex} className="Column">
            {Array.from({ length: 10 }, (_, rowIndex) => {
                const isRoombaHere = roombaPosition.x === colIndex && roombaPosition.y === rowIndex;
                return (
                    <Cell key={rowIndex} direction={isRoombaHere ? roombaDirection : null} />
                );
            })}
        </div>
    ));

    return <div className="Grid">{columns}</div>;
};

export default Grid;
