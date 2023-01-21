import Header from './components/Header';
import './App.css';
// import './components/Header.css';
import Movie from './components/Movie';
import movies from "./movies";

function App() {
  
  return (
<>
    <div className="App">
    <Header/>
     </div>
     <div className="main">
     {
      movies.map((element)=>{
        return(
        <Movie
          title={element.Title}
          year={element.Year}
          img={element.Poster}

        />
        )

      })
     }
      
      
     </div>
     </>
    
  );
}

export default App;
