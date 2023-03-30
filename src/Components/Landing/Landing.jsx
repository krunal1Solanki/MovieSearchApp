import React from 'react'
import { useState } from 'react'
import './Landing.css'
import {client} from '../../Client'
import MovieCart from '../MovieCart/MovieCart'
import './Landing.css'
const Landing = () => {
    const [search, setSearch] = useState("");
    const [movieData, setMovieData] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const changeHandler = (e) => {
        console.log(search);
        setSearch(e.target.value);
    }
    const submitHandler = () => {
        client.get(`?i=tt3896198&apikey=53e46aae&s=${search}`).then((resp) =>{ 
            if(resp.data.Search)
            setMovieData(resp.data.Search)}
        );
        setIsSearched(true);
    }

    return (
        <div>
            <div className='landing-page'>
                <div>
                    Movies App
                </div>
                <hr/>
                    Search For Movies By Title<br/>
                    <input placeholder='search' value = {search} onChange={changeHandler}/><br/>
                    <button onClick={()=>submitHandler()}>Search Now!</button>
            </div>
            {isSearched && movieData.length == 0 ? <div>No results found for {search}</div> : null}
            {movieData.length > 0 && <div className='posters'>
                {movieData.map((item)=> {
                    return (<div key= {item.imdbId}>
                        <MovieCart title={item.Title} year = {item.Year} poster = {item.Poster}/>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Landing