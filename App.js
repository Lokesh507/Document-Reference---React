
import './App.css';
import { useState } from 'react';

function App() {
  const [isopen,setIsopen] = useState(false)
  function handleClick()
  {
    setIsopen(!isopen)
  }
  return (
      <div className="App">
        <div className='left'><button className='App-link' onClick={handleClick}>Open Reference</button></div>
      {isopen && <div className='right'><button onClick={handleClick}>&times;</button><iframe allowFullScreen  src={isopen?"doc.pdf":""} title='iframe'></iframe></div>}
      
    </div>
  );
    
}

export default App;
