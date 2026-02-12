import React, { useEffect, useState } from "react";

const getData = () => {

    function getCharacters () {
        fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => setCharacters(data.results))        
    }

    useEffect (() => {
        console.log("Estamos ready")
        getCharacters ()
    }, [])

    const [characters, setCharacters] = useState ([])


    return (
        <>
            <h1>COMPONENTE GET DATA</h1>
            {characters.map ((character) => (
                <p key={character.id}> 
                    <img src={character.image } />
                    <br></br>
                    personaje {character.id}: {character.name}
                </p>
            ))}
        </>
    )
}

export default getData