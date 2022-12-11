import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img 
          src={logo} 
          className='logo'  
        />
      </div>
      <ToDo />
    </div>
  );
}

export default App;
