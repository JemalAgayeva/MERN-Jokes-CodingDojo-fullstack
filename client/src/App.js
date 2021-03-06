import './App.css';
import AllJokes from "./components/AllJokes"
import OneJoke from "./components/OneJoke"
import CreateJoke from "./components/CreateJoke"
import EditJoke from "./components/EditJoke"
import {Router, Link} from '@reach/router'


function App() {
  return (
    <div key = "idx" className="App container">
      <h6 className="text-secondary">Limited Edition of Jokes</h6>
      <div className="col-md-3 mx-auto mb-1">
        <img className="thumbnail img-fluid" src="https://img.republicworld.com/republic-prod/stories/images/15935020215efae94530944.png"></img>
      </div>
      <Link to="/jokes"> <button className="btn btn-warning"> All Jokes </button></Link>
      <Link to="/jokes/new"> <button className="btn btn-primary"> Create New Joke </button></Link>
      <Router>
        <AllJokes path="/jokes"></AllJokes>
        <OneJoke path="/jokes/info/:jokeId"> </OneJoke>
        <CreateJoke path="/jokes/new"> </CreateJoke>
        <EditJoke path="/jokes/edit/:jokeId"> </EditJoke>
      </Router>
    </div>
  );
}

export default App;
