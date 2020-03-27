import React from 'react';
import logo from './logo.svg';
import './App.css';

const handleOpen = ()=>{
  
  const now = new Date().valueOf()
  const url = window.location.href;
  setTimeout(()=>{
    if(new Date().valueOf()-now > 100) return;
    window.location.assign(
      "https://apps.apple.com/ca/app/walmart-shopping-groceries/id1084793516"
    );
    // setTimeout(()=>{
    //   window.location.assign(
    //     url
    //   );
    // })
  },25)
  window.location.assign(`walmartapp://section/${url}`)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {navigator.userAgent}
        </p>
        {(navigator.userAgent.indexOf("CriOS") !== -1) &&
         <button onClick={handleOpen}> Open</button>}

      </header>
    </div>
  );
}

export default App;
