import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ProjectR</h1>
        <Link to="/login">Login</Link>
      </header>
    </div>
  );
}

export default App;
