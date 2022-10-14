import React from "react";  
import CharacterItem from "./CharacterItem";

const CharacterTable = ({item, isLoading}) => {
    return isLoading ? <h1>Loading</h1> : 
    <section>
        {
        item.map(items => {
            <CharacterItem key={items.id} item={item}/>
        })
    }
    </section>
}

export default CharacterTable