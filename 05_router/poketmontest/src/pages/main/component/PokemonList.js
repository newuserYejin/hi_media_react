import ListItem from "./ListItem"

function PokemonList({ pokeList }) {

    console.log("list pokeList : ", pokeList)

    return (
        <div>
            {pokeList.map(poke => <ListItem poke={poke} />)}
        </div>
    )

}

export default PokemonList