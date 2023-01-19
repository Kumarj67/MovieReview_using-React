
import './App.css';
import {Header,Footer,Middle} from "./components/Header";

const name="Jeetesh"
function App() {
  
  return (
    <div className="App">
    <Header />
      <header className="App-header">
        
        <p>
          Learn React
          {name}
          <Header />
          <Middle />
          <Footer /> 

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
