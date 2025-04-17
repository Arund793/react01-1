import './App.css';
import Game from "./Game";  // ✅ 이것만 필요!

export default function App() {
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Game />
        </div>
    );
}
