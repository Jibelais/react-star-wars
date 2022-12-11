import "./card.sass"

const Card = (props) => {



    return (
        <div className = "card">
            <p id = "ship-name">{props.shipNames}</p>
            <p>Model: {props.model}</p>
            <p>Manufacturer: {props.manufacturer}</p>
            <p>Cargo-Capacity: {props.capacity}</p>
            <p>Consumables: {props.consumables}</p>
        </div>
        
    )

}

export default Card