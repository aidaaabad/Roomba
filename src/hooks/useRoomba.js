import {useState, useEffect} from 'react';
const DIRECTIONS=['N','E','S','W'];
const GRID_SIZE=10;

const useRoomba=()=> {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [direction, setDirection] = useState('N');

    const turnRight = () => {
        const currentDirectionIndex = DIRECTIONS.indexOf(direction);
        setDirection(DIRECTIONS[(currentDirectionIndex + 1) % DIRECTIONS.length]);
    }
    const moveForward = () => {
        let {x, y} = position;
        switch (direction) {
            case 'N':
                y = Math.max(0, y - 1);
                break;
            case 'E':

                x = Math.min(GRID_SIZE - 1, x + 1);
                break;
            case 'S':
                y = Math.min(GRID_SIZE - 1, y + 1);
                break;
            case 'W':
                x = Math.max(0, x - 1);
                break;
        }
        if (x === position.x && y === position.y) {
            turnRight();
        } else {
            setPosition({x, y});
        }

    }
    return {position, direction, moveForward, turnRight};
}
export default useRoomba;