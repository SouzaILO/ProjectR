import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
        <Link to="/login" margin="10px">Login</Link>
        <Link to="/home">Home</Link>
    </div>        
        
  );
}

export default App;
