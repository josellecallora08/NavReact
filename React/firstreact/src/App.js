
import './App.css';
import ClassEvent from './components/ClassEvent';
import Counter from './components/Counter';
import FunctionEvent from './components/FunctionEvent';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Resume from './components/Resume';
function App() {
  return (
    <div className="App">
      {/* <Message messagecontent="This is a message for you"/> */}
      {/* <Hello /> */}
      {/* <Profile name="Joselle" lastname ="Callora"/> */}
     {/* <Counter /> */}
     {/* <Resume name="soj"/> */}
     <FunctionEvent></FunctionEvent>
     <ClassEvent></ClassEvent>
    </div>
  );
}

export default App;
