import React from "react";

function Genre({ genres }) 
{
   const handleClick=(genre)=>{
    
        console.log(`filtering by ${genre}`);
    }


    return (
     
        <div class="genre">
            <h3>Filter by Genre</h3>
        {
                genres.map((genre,index)=>(
                    <button key={index} class="button" onClick={()=>handleClick(genre)}>{genre}</button>
                ))
            }
        </div>
    );
}

export default Genre;


