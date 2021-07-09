
import './App.css';
import PersonCard from './components/PersonCard'
function App() {
  return (
    <div className="App">
      <PersonCard person={{name:"Doe, Jane", age: 45, hair:'black'}}/>
      <PersonCard person={{name:"Smith, john", age: 88, hair:'Brown'}}/>
      <PersonCard person={{name:"Fillmore, Millard", age: 45, hair:'Brown'}}/>
      <PersonCard person={{name:"Smith, Maria", age: 45, hair:'Black'}}/>
    </div>
  );
}

export default App;
