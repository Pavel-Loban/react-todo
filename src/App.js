
import './App.css';
import AddTask from './Components/AddTask';
import Buttons from './Components/Buttons';
import InfoTodo from './Components/InfoTodo';
import Search from './Components/Search';
import Tasks from './Components/Tasks';
import Title from './Components/Title';

function App() {
  return (
    <div className="App">
      <div className={'container'} >
      <Title/>
      <InfoTodo/>
      <Search/>
      <Buttons/>
      <Tasks/>
      <AddTask/>
      </div>

    </div>
  );

}

export default App;
