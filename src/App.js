import React from "react";
import Moviedisplay from "./Components/Moviedisplay";
import Genre from "./Components/Genre";
import './style.css';
import movies from "./data/movies.js";
import genres from "./data/genres.js"
function App() 
{
   
    return (
        <div class="cont">
            <h1 >Top 15 Movies of All Time</h1>
            <Genre genres={genres}/>
            <Moviedisplay movies={movies}/>
        </div>
    )
}
export default App;