import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';
import Controls from './components/Controls';
import useRoomba from './hooks/useRoomba';
function App() {
    const {position, direction, moveForward, turnRight} = useRoomba();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={100}/>
        <p>
          Pair programming
        </p>
      </header>

<h1>Rooba Simulator ⬆</h1>
        <div>
        <Controls onMoveForward={moveForward} onTurnRight={turnRight}/>
        <Grid roombaPosition={position} roombaDirection={direction}/>
        </div>

    </div>
  );
}

export default App;
