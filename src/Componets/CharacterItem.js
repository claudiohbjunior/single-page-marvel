import React from "react";  

const CharacterItem = ({items}) => {
    return (
        <div>
            <div>
                <div>
                    <img src={items.thumbnail.path} /> 
                </div>
                <div>
                    <h1>{items.name}</h1>
                    <ul>
                        <li>
                            <strong>Name:</strong> {items.name}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem