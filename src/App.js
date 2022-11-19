import './App.css';
import Body from './compnents/Body';
import Nav from './compnents/Nav';

function App() {
  return (
    <>
    <div className='header'>
      <Nav/>
    </div>
    <div className="container">
      {/* Nav */}
      {/* body */}
      <Body/>
    </div>
    
    </>
  );
}

export default App;
