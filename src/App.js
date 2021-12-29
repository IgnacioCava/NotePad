import logo from './logo.svg';
import './App.css';
import './cardboard.jpg'
import Noteboard from './Components/notepad';
import styled from 'styled-components'


function App() {

  return (
    <div className="App">
      <div id='opacity'>
        <Noteboard/>
      </div>
    </div>
  )
}

export default App;
