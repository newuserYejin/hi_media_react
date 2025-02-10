import axios from "axios";
import { useEffect, useState } from "react";
import './listitem.css'

function ListItem({ poke }) {
    const url = poke.url

    const [info, setInfo] = useState([])

    useEffect(() => {

        async function getInfo() {
            const data = await axios.get(url)

            console.log("data: ", data.data)

            setInfo(data.data)
        }

        getInfo();
    }, [])

    return (
        <div className="pokeCard">
            <img src={info.sprites.front_default} alt="포켓몬 사진" />
        </div>
    )
}

export default ListItem