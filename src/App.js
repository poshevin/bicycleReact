import './App.css';
import Adv from './components/adv/adv';
import Menu from './components/header/header';
import Feedback from './components/feedback/feedback';
import Attendance from './components/attendance/attendance';
import Reviews from './components/reviews/reviews'; 

function App() {
  return (
    <div className="App">
      <Menu/>
      <Adv/>
      <Feedback/>
      <Attendance/>
      <Reviews/>
    </div>
  );
}

export default App;
