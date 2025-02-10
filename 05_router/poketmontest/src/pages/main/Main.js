import axios from 'axios';
import { useEffect, useState } from "react";
import PokemonList from './component/PokemonList';
import './main.css'
import ListItem from './component/ListItem';

function Main() {

    const [pokeList, setPokeList] = useState([])

    async function getPokeList() {
        const data = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')

        setPokeList(data.data.results)
    }

    useEffect(() => {
        getPokeList()
    }, [])

    return (
        <div className='mainContent'>
            {pokeList.map(poke => <ListItem poke={poke} />)}
        </div>
    )
}

export default Main