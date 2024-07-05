import './App.css';
import AboutPage from './AboutPage';
import Profile from './ProfilePage';
import Shoppinglist from './Shoopinglist';
import AppLevel from './memoryStateAppLevel';
import AppLevel2 from './memoryStateAppLevel2';
import Counter from './memoryState';
import Greetings from './ButtonClicks';
import { useState } from 'react';

// creating component and nesting 



function Click({flag, setFlag}){
  return (
    <button className='clicks' onClick={()=>{ {flag ? setFlag(false) : setFlag(true)} }}>Show</button>
  )
}

function App() { 
  var [flag, setFlag] = useState(false)
  let [appLevelCounter, setAppLevelCounter] = useState(0)

  function additionClick(){
    setAppLevelCounter(appLevelCounter + 1)
  }

  return (
    <div className="App">
      <h1>This is the button</h1>
      <AboutPage />
      <Shoppinglist />
      <Greetings />
      <h3>App Level Counter</h3>
      <AppLevel  additionClick={additionClick} /> {/* sharing the same use state */}
      <h4>{appLevelCounter}</h4>
      <AppLevel2  additionClick={additionClick} /> {/* sharing the same use state */}
      <Counter />
      <Counter />  {/* the counter will be diffrent for the same */}
      <Click flag = {flag} setFlag = {setFlag} />
      {flag == true && <Profile />}
      
    </div>
  );
}



export default App;
