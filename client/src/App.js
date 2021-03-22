import './App.css';
import AllJokes from "./components/AllJokes"


function App() {
  return (
    <div className="App">
      <h6 className="text-secondary">Limited Edition of Jokes</h6>
      <form>
        <AllJokes />
      </form>
    </div>
  );
}

export default App;
