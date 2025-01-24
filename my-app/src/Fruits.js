import React from "react";

function Fruits(probs) {

    return (
        <div>
            {probs.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits;