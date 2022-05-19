import './App.css';
import Adv from './components/adv/adv';
import Header from './components/header/header';
import Feedback from './components/feedback/feedback';
import Attendance from './components/attendance/attendance';
import Reviews from './components/reviews/reviews'; 




function App() {
  return (
    <div className="App">
        <Header/>
        <Adv/>
        <Feedback/>
        <Attendance/>

    </div>
  );
}

export default App;
